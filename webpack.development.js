const path = require('path');
const webpack = require('webpack');
const Clean = require('clean-webpack-plugin');
const StatusPlugin = require('./node_lib/webpack-status-plugin');

const paths = {
  src: path.join(__dirname, 'app/assets/javascripts'),
  dest: path.join(__dirname, 'public', 'assets'),
};

module.exports = {
  context: paths.src,
  entry: {
    application: './application.js',
  },
  output: {
    path: paths.dest,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].js.map',
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        enforce: 'pre',
        loader: 'json',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modules: [paths.src, 'node_modules'],
  },
  devtool: 'source-map',
  cache: true,
  plugins: [
    new Clean(paths.dest),
    StatusPlugin,
  ],
  watch: true,
  watchOptions: {
    poll: true,
  },
};
