module.exports = {
  packagerConfig: {},
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
    // Added by gukt
    // {
    //   name: '@electron-forge/maker-appx',
    //   config: {
    //     publisher: 'CN=developmentca',
    //     devCert: 'C:\\devcert.pfx',
    //     certPass: 'abcd'
    //   }
    // },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        // background: './assets/dmg-background.png',
        format: 'ULFO'
      }
    }
  ],
};
