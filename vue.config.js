const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    autoRouting: {
      // Specify a prefix which will be added to all auto generated chunk name.
      chunkNamePrefix: 'page-'
    }
  }
})
