import * as React from 'react'

import './Navigation.css'

const sections = [
  {
    title: 'History',
    links: []
  },
  {
    title: 'Experience',
    links: []
  },
  {
    title: 'Projects',
    links: [
      {
        title: 'remmy',
        href: '#remmy'
      },
      {
        title: 'abt',
        href: '#abt'
      },
      {
        title: 'bytesized',
        href: '#bytesized'
      }
    ]
  }
]

const NavigationSectionInnerLink = (props) => {
  return <h4 styleName="NavigationSectionInnerLink">{props.title}</h4>
}

const NavigationSectionLink = (props) => {
  return <h3 styleName="NavigationSectionLink">{props.title}</h3>
}

const NavigationSection = (props) => {
  return (
    <span styleName="NavigationSection">
      <NavigationSectionLink title={props.title} />
      <If condition={props.links.length}>
        <For each="link" of={props.links}>
          <NavigationSectionInnerLink key={link.title} {...link} />
        </For>
      </If>
    </span>
  )
}

class Navigation extends React.Component {
  render() {
    return (
      <div styleName="Navigation">
        <For each="section" of={sections}>
          <NavigationSection key={section.title} {...section} />
        </For>
      </div>
    )
  }
}

export default Navigation
