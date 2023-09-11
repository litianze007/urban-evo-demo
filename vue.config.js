const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,
  css:{
    loaderOptions:{
      less:{
        additionalData: '@import "@/style/global.less";'
      }
    }
  }
});
