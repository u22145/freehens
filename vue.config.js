const {
  defineConfig
} = require('@vue/cli-service')
// const IN_PRODUCTION = process.env.NODE_ENV === "production"; // /上正式站才壓縮圖片
const version = new Date().getTime() //時間戳
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],

  //js文件不要輸出map檔案
  productionSourceMap: false,

  //js文件增加版號解決緩存問題
  configureWebpack: {
    output: { //輸出編譯後的文件名稱：【文件名稱.版本號.時間戳】
      filename: `js/[name].[chunkhash].${version}.js`,
      chunkFilename: `js/[name].[chunkhash].${version}.js`,
    },
  },
  //css文件增加版號解決緩存問題
  css: {
    // loaderOptions: {
    //   sass: {
    //     prependData: `
    //        @import "@/assets/scss/all.scss";
    //     `
    //   }
    // },
    extract: { // 輸出編譯後的文件名稱：【文件名稱.版本號.時間戳】
      filename: `css/[name].[chunkhash].${version}.css`,
      chunkFilename: `css/[name].[chunkhash].${version}.css`
    }
  },

  //壓縮圖片
  chainWebpack(config) {
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },


  //关闭eslint检查
  lintOnSave: false,
  //開發環境時使用 HTTPS
  devServer: {
    https: true,
  },
  publicPath: './'
})