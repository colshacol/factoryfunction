const gradients = {
  blue: 'linear-gradient(-179deg, #3b90f4 0%, #524df8 100%)',
  red: 'linear-gradient(-179deg, #ec733b 0%, #e71158 100%)',
  green: 'linear-gradient(-179deg, #1de79b 0%, #25b862 100%)',
  white: 'linear-gradient(-190deg, rgba(0, 0, 0, 0), rgba(255, 255, 255, 1))'
}

exports.gradiented = (value) => {
  console.log({ value }, gradients[value])
  return {
    background: gradients[value],
    boxShadow: '0 2px 16px -6px rgba(0,0,0,0.56)',
    borderRadius: '2px',
    color: '#fff'
  }
}
