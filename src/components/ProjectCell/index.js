import * as React from 'react'
import { Cell } from 'styled-css-grid'

import { getDimensions } from './utilities'
import './ProjectCell.css'

const ProjectCell = (props) => {
  const dimensions = getDimensions(props)
  const tag = props.types[0]

  return (
    <Cell {...dimensions} key={props.title} styleName="ProjectCell">
      <div styleName={`typeTag ${tag}Type`}>
        <small>{tag}</small>
      </div>
      <div styleName="title">
        <h2>{props.title}</h2>
      </div>
      <div styleName="body">
        <div styleName="description">
          <p>{props.description}</p>
        </div>
        <div styleName="external">
          <small>Github:</small>
          <a href={`https://github.com/${props.github}`} styleName="link">
            {props.github}
          </a>
        </div>
      </div>
    </Cell>
  )
}

ProjectCell.defaultProps = {
  displaySize: 'sm',
  types: []
}

export default ProjectCell
