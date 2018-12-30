import * as React from 'react'
import debounce from 'just-debounce-it'
import { Grid, Cell } from 'styled-css-grid'

import ProjectCell from '../ProjectCell'
import './ProjectGrid.css'

import { GRID_STYLES, PROJECTS } from './consts'

const getWindowWidth = () => {
  return window.innerWidth
}

const getColumnCount = (width) => {
  if (window.innerWidth <= 620) return 1
  return Math.floor((width - 24) / 240)
}

class ProjectGrid extends React.PureComponent {
  state = {
    projects: PROJECTS,
    resizing: false
  }

  componentDidMount() {
    window.addEventListener('resize', this.prepareToAdapt)
    window.addEventListener('resize', this.adaptToResize())
  }

  prepareToAdapt = () => {
    if (!this.state.resizing) {
      this.setState({ resizing: true })
    }
  }

  adaptToResize = () => {
    return debounce(() => {
      this.forceUpdate()
      this.setState({ resizing: false })
    }, 500)
  }

  render() {
    const { props, state } = this
    const columns = getColumnCount(props.getContainerWidth())
    const resizingClassName = state.resizing ? 'resizing' : ''

    return (
      <div styleName={`ProjectGrid ${resizingClassName}`}>
        <Grid
          minRowHeight="220px"
          columns={columns}
          justifyContent="center"
          style={GRID_STYLES}
          gap="24px"
          columnGap="24px"
          flow="row dense"
        >
          <For each="project" of={state.projects}>
            <ProjectCell key={project.title} {...project} />
          </For>
        </Grid>
      </div>
    )
  }
}

export default ProjectGrid
