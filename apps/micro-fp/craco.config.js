const { name } = require('./package.json');

// const port = 9201;

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const isDev = env === 'development';

      if (!isDev) {
        // 修改打包目录名称
        paths.appBuild = 'dist';
      }

      webpackConfig.output = {
        ...webpackConfig.output,
        // 应用的基本URL
        // publicPath: isDev ? `//localhost:${port}` : `/microApps/${name}/`,
        // 微前端打包配置
        library: `${name}-[name]`,
        libraryTarget: `umd`,
      };

      return webpackConfig;
    },
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
