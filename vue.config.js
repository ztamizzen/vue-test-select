const path = require('path')
module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('svg-inline-loader')
      .loader('svg-inline-loader');
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.resolve(__dirname, 'node_modules')]
      }
    }
  }
};
