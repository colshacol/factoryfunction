import * as React from 'react'

import './IconLogo.css'
import Logo from './Logo64.png'

const sizes = {
  xs: '32px',
  sm: '64px',
  md: '128px',
  lg: '256px',
  xl: '512px'
}

const IconLogo = (props) => {
  const size = sizes[props.size]

  return (
    <div styleName="IconLogo" style={{ zIndex: 10 }}>
      <img style={{ maxWidth: '100%' }} src="./logo-64.png" />
    </div>
  )
}

IconLogo.defaultProps = {
  size: 'sm'
}

export default IconLogo
