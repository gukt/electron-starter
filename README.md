# electron-playground
My Electron Playground

## 打包

```bash
$ yarn make
```
NOTE：由于我们添加了 @electron-forge/maker-dmg，以及在 forge.config.js 中添加了 name: '@electron-forge/maker-dmg' 的配置项，所以打包后，将会同时生成 zip 文件以及一个 dmg 文件。

