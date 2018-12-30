import * as React from 'react'
import { hot } from 'react-hot-loader'
import BrowserRouter from 'react-router-dom/BrowserRouter'

import TopBar from '../TopBar'
import SideBar from '../SideBar'
import Router from '../Router'

import './Frame.css'

const Frame = (props) => {
  return (
    <BrowserRouter>
      <div styleName="Frame">
        <TopBar />
        <div styleName="body">
          <SideBar />
          <Router />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default hot(module)(Frame)
