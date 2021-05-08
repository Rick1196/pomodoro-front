const webpack = require('webpack');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');

const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

module.exports = {

  devtool: 'source-map',

  output: {
    path: helpers.root('dist/pomodoro-front'),
    publicPath: '',
    filename: '[name].[contenthash].min.js',
    chunkFilename: '[id].[contenthash].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.css'],
    // mainFields: ['es2015', 'browser', 'module', 'main'],
  },

  module: {
    rules: []
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['es']
    })
  ],

 

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    inline: false,
    contentBase: "./dist",
  }
};
