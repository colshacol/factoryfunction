export const getDimensions = (props) => {
  if (window.innerWidth <= 620) {
    return {
      width: 2,
      height: 1
    }
  }

  if (props.displaySize === 'lg') {
    return {
      width: 2,
      height: 1
    }
  }

  if (props.displaySize === 'md') {
    return {
      width: 1,
      height: 2
    }
  }

  return {
    width: 1,
    height: 1
  }
}
