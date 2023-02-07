window.addEventListener('DOMContentLoaded', () => {
  // 替换页面中 DOM 元素显示文本的辅助函数
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})