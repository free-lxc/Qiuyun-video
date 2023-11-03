const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  devServer: {
    proxy: {
      '/index': { // 前缀，匹配所有以api开头的请求路径
        target: 'http://localhost:8080', // 代理目标的基础路径
        pathRewrite: { '^/index': '' }
      }
    }
  }
}
