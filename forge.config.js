module.exports = {
  packagerConfig: {
    // 这里全局提提供 icon 的设置（NOTE：不要提供后缀名）
    // 这样就不需要在每个 maker 内部的 config 里配置 icon
    icon: './assets/app-icon',
    // 启用在 macOS 上进行代码签名。
    // 在大多数情况下，osxSign 的配置附带了开箱即用的默认值，
    // 因此我们建议您从一个空配置对象开始。
    // https://www.electronforge.io/guides/code-signing/code-signing-macos
    osxSign: {}, // object must exist even if empty
    
    // Option 1: Using an app-specific password
    // https://www.electronforge.io/guides/code-signing/code-signing-macos#option-1-using-an-app-specific-password
    // osxNotarize: {
    //   tool: 'notarytool',
    //   appleId: process.env.APPLE_ID,
    //   appleIdPassword: process.env.APPLE_PASSWORD,
    //   teamId: process.env.APPLE_TEAM_ID,
    // }

    // Option 2: Using an App Store Connect API key
    // https://www.electronforge.io/guides/code-signing/code-signing-macos#option-2-using-an-app-store-connect-api-key
    osxNotarize: {
      tool: 'notarytool',
      appleApiKey: process.env.APPLE_API_KEY,
      appleApiKeyId: process.env.APPLE_API_KEY_ID,
      appleApiIssuer: process.env.APPLE_API_ISSUER,
    }

    // Option 3: Using a keychain
    // https://www.electronforge.io/guides/code-signing/code-signing-macos#option-3-using-a-keychain
    // osxNotarize: {
    //  ...
    // }
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
    {
      name: '@electron-forge/maker-dmg',
      // https://js.electronforge.io/interfaces/_electron_forge_maker_dmg.MakerDMGConfig.html
      config: {
        // 指定 DMG 图标
        // https://www.electronforge.io/guides/create-and-add-icons
        // icon: './assets/youdao-icon.icns',
        // 指定 DMG 窗口的背景图片
        background: './assets/dmg-bg.png',
        format: 'ULFO'
      }
    }
  ],
};
