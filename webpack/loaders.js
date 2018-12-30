export const javaScriptLoader = {
  test: /\.(js|jsx)$/,
  exclude: /(node_modules)/,
  use: [
    {
      loader: 'babel-loader'
    }
  ]
}

export const sourcemapLoader = {
  test: /\.(js)$/,
  enforce: 'pre',
  exclude: /mui-row-select-table/,
  use: [
    {
      loader: 'source-map-loader'
    }
  ]
}

export const cssLoader = {
  test: /\.(css|scss)$/,
  use: [
    {
      loader: 'style-loader',
      options: {}
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[path]-[name]-[local]'
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        plugins: [
          require('tramix')({
            include: './src/styles/mixins/index.js'
          })
        ]
      }
    }
  ]
}

export const fontLoader = {
  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  exclude: /node_modules/,
  loader: 'url-loader?limit=10000&mimetype=application/font-woff'
}

export const fileLoader = {
  exclude: /node_modules/,
  test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'file-loader'
}

export const svgLoader = {
  test: /\.svg$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader'
    },
    {
      loader: 'react-svg-loader',
      options: {
        jsx: true
      }
    }
  ]
}

export const urlLoader = {
  test: /\.png/,
  loader: 'url-loader'
}
