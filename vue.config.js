
const webpack = require('webpack')

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  productionSourceMap: false,
  outputDir: process.env.outputDir,



  configureWebpack: {
    resolve: {
      alias: {
        // '@': 'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'utils': '@/utils',
        'router': '@/router',
        'store': '@/store',
        'views': '@/views'
      }
    }
  },

}