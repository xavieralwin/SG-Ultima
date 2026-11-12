'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpackConfigPath = require.resolve('react-scripts/config/webpack.config');
const originalConfigFactory = require(webpackConfigPath);

function stripFileHashes(config) {
  if (config.output) {
    config.output.filename = 'static/js/[name].js';
    config.output.chunkFilename = 'static/js/[name].chunk.js';
    config.output.assetModuleFilename = 'static/media/[name][ext]';
  }

  if (config.module && Array.isArray(config.module.rules)) {
    config.module.rules.forEach((rule) => {
      if (!rule || !Array.isArray(rule.oneOf)) return;
      rule.oneOf.forEach((oneOfRule) => {
        if (!oneOfRule || !Array.isArray(oneOfRule.use)) return;
        oneOfRule.use.forEach((loaderEntry) => {
          if (
            loaderEntry &&
            typeof loaderEntry === 'object' &&
            typeof loaderEntry.loader === 'string' &&
            loaderEntry.loader.includes('file-loader') &&
            loaderEntry.options
          ) {
            loaderEntry.options.name = 'static/media/[name].[ext]';
          }
        });
      });
    });
  }

  if (Array.isArray(config.plugins)) {
    config.plugins.forEach((plugin) => {
      if (
        plugin &&
        plugin.constructor &&
        plugin.constructor.name === 'MiniCssExtractPlugin' &&
        plugin.options
      ) {
        plugin.options.filename = 'static/css/[name].css';
        plugin.options.chunkFilename = 'static/css/[name].chunk.css';
      }
    });
  }

  return config;
}

require.cache[webpackConfigPath].exports = function (webpackEnv) {
  const config = originalConfigFactory(webpackEnv);
  return stripFileHashes(config);
};

require('react-scripts/scripts/build');

