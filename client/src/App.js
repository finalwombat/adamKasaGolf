import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Background from './components/Background'
import Menu from './Menu'
import Routes from './Routes'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
          <Menu />
          <Routes />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App
