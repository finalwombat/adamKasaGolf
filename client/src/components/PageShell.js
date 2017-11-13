import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PageShellCss from './PageShell.css'

const PageShell = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={1600}
        transitionName='SlideIn'
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>
}

export default PageShell
