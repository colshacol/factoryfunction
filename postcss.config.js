const env = require('postcss-preset-env')
const postcssCustomMedia = require('postcss-custom-media')
const tramix = require('tramix')

const customMediaQueries = () => {
  return postcssCustomMedia({
    importFrom: './src/styles/media.css'
  })
}

const transparentMixins = () => {
  return tramix({
    include: './src/styles/mixins/index.js'
  })
}

module.exports = {
  sourceMap: 'inline',

  plugins: [customMediaQueries(), env({}, transparentMixins())]
}
