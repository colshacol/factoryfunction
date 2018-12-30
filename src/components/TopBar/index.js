import * as React from 'react'

import TextLogo from '../TextLogo'
import IconLogo from '../IconLogo'
import './TopBar.css'

const TopBar = (props) => {
  return (
    <div styleName="TopBar">
      <IconLogo size="sm" />
      <div styleName="white">
        <TextLogo />
      </div>
    </div>
  )
}

export default TopBar
