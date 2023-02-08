// 由于此文件是 Electron 的主进程脚本，所以它控制了应用程序主进程。
// 它运行在一个完整的 Node.js 环境中，负责控制应用的生命周期，
// 显示原生界面和执行底层的原生操作。
// See also: https://www.electronjs.org/zh/docs/latest/tutorial/quick-start
const { app, BrowserWindow } = require('electron')
const path = require('path')

/**
 * 创建一个新的浏览器窗口
 */
const createWindow = () => {
  // 创建一个浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true, 
    frame: false,
    // Web 页面功能设置
    webPreferences: {
      // 指定一个脚本文件，该脚本文件在页面上所有文件运行之前加载。
      // 此处的 preload 脚本可以获取到 Node.js 的 API
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'assets/youdao-icon.icns'),
  })
  // 在浏览器口中，加载工作目录下的 index.html
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  // 创建一个新的浏览器窗口
  // 在 Electron 中，只有在 app 模块的 ready 事件被激活后才能创建浏览器窗口。
  createWindow()

  app.on('activate', () => {
    // 在 macOS 上，当单击 dock 图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// 当所有窗口关闭时退出
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// require('update-electron-app')()