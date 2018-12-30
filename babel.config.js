const __DEV__ = process.env.NODE_ENV === 'development'
const __PROD__ = process.env.NODE_ENV === 'production'

module.exports = (api) => {
  api.cache(false)

  return {
    env: {
      production: {
        presets: ['babel-preset-minify']
      }
    },
    presets: [
      ['@babel/preset-stage-0', { decoratorsLegacy: true }],
      '@babel/preset-env',
      '@babel/preset-flow',
      [
        '@babel/preset-react',
        {
          development: __DEV__
        }
      ]
    ],
    plugins: [
      // Gets ignored in production.
      'react-hot-loader/babel',
      'babel-plugin-dev-expression',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      'babel-plugin-jsx-control-statements',
      '@babel/plugin-transform-runtime',
      [
        'babel-plugin-react-css-modules',
        {
          generateScopedName: '[path]-[name]-[local]',
          handleMissingStyleName: 'warn',
          webpackHotModuleReloading: true,
          context: './src',
          exclude: 'node_modules'
        }
      ],
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src'],
          alias: {
            '#components': './src/components',
            '#views': './src/views',
            '#styles': './src/styles'
          }
        }
      ]
    ]
  }
}
