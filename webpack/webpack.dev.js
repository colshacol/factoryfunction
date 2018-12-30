import webpack from 'webpack'

import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
import NpmInstallPlugin from 'webpack-plugin-install-deps'
import WriteFilePlugin from 'write-file-webpack-plugin'
import WebpackNotifierPlugin from 'webpack-notifier'
import HtmlPlugin from 'html-webpack-plugin'
import path from 'path'

import * as loaders from './loaders'
import pkg from '../package.json'

import { fromRoot, fromSrc } from './utilities'

module.exports = (() => {
  return {
    mode: 'development',
    devtool: 'source-map',
    context: fromRoot('./src'),

    entry: ['./index.js'],

    output: {
      filename: `./bundle.js`,
      path: fromRoot(`./public`)
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules']
    },

    serve: {
      content: fromRoot(`./public`),
      historyApiFallback: true,
      disableHostCheck: true,
      port: 5000,
      hot: {
        hrm: true
      },
      dev: {
        publicPath: '/'
      }
    },

    module: {
      rules: [
        loaders.javaScriptLoader,
        loaders.sourcemapLoader,
        loaders.cssLoader,
        loaders.fontLoader,
        loaders.fileLoader,
        loaders.svgLoader,
        loaders.urlLoader
      ]
    },

    plugins: [
      new WebpackNotifierPlugin(),

      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
        BABEL_ENV: 'development'
      }),

      new HtmlPlugin({
        publicPath: './',
        template: fromSrc('./index.html'),
        alwaysWriteToDisk: false,
        title: 'factoryFunction'
      }),

      new WriteFilePlugin({
        test: /\.html$/,
        useHashIndex: false
      }),

      new HtmlWebpackHarddiskPlugin()
    ]
  }
})()
