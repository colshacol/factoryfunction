import webpack from 'webpack'

import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
import NpmInstallPlugin from 'webpack-plugin-install-deps'
import WriteFilePlugin from 'write-file-webpack-plugin'
import WebpackNotifierPlugin from 'webpack-notifier'
import HtmlPlugin from 'html-webpack-plugin'
import path from 'path'

import * as loaders from './loaders'

import { fromRoot, fromSrc } from './utilities'

module.exports = (() => {
  return {
    mode: 'production',
    devtool: 'source-map',
    context: fromRoot('./src'),

    entry: ['./index.js'],

    output: {
      filename: `bundle-${process.env.APP_NAME}-[hash].js`,
      path: fromRoot(`./public`)
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules'],
      alias: {
        views: path.resolve(__dirname, '../src/views'),
        utils: path.resolve(__dirname, '../src/utils'),
        components: path.resolve(__dirname, '../src/components')
      }
    },

    serve: {
      content: fromRoot(`./public`),
      historyApiFallback: true,
      disableHostCheck: true,
      port: 3000,
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
      new NpmInstallPlugin({
        dev: false,
        peerDependencies: true,
        quiet: false,
        npm: 'npm'
      }),

      new WebpackNotifierPlugin(),

      new webpack.EnvironmentPlugin({
        APP_NAME: process.env.APP_NAME,
        CONFIG_FILENAME: 'opsportal-coa-test',
        NODE_ENV: 'production',
        BABEL_ENV: 'production',
        ENABLE_REACTOPT: false,
        STACK: 'c'
      }),

      new HtmlPlugin({
        publicPath: '/',
        template: fromSrc('./index.html'),
        alwaysWriteToDisk: false,
        title: 'Ops Portal'
      }),

      new WriteFilePlugin({
        test: /\.html$/,
        useHashIndex: false
      }),

      new HtmlWebpackHarddiskPlugin()
    ]
  }
})()
