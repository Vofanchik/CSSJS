const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const buildMode = 'production';
const common = require('./webpack.common')(buildMode);

module.exports = merge(common, {
  mode: buildMode,
  optimization: {
    minimizer: [new TerserPlugin({})],
  },
});
