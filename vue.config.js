const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vue' // 例如，将vue库转译为ES5
    // 在这里可以添加其他需要转译的依赖模块
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      '/another-api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          '^/another-api': '',
        },
      },
    },
  },
});
