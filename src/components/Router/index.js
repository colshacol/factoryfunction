import * as React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import withRouter from 'react-router-dom/withRouter'
import BrowserRouter from 'react-router-dom/BrowserRouter'

import ProjectGrid from '../ProjectGrid'
import TopBar from '../TopBar'
import TextLogo from '../TextLogo'
import SideBar from '../SideBar'
import './Router.css'

class Router extends React.Component {
  container = React.createRef()

  state = {
    gotRef: false
  }

  componentDidMount() {
    this.setState({ gotRef: true })
  }

  getContainerWidth = () => {
    return this.container.current.clientWidth
  }

  render() {
    return (
      <div styleName="Router" ref={this.container}>
        <Switch>
          <Route path="/">
            {() =>
              this.container.current && (
                <ProjectGrid getContainerWidth={this.getContainerWidth} />
              )
            }
          </Route>
        </Switch>
        <div styleName="footbar">
          <TextLogo />
        </div>
      </div>
    )
  }
}

export default Router
