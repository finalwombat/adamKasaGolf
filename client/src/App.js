import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Background from './components/Background'
import Menu from './Menu.js'
import Routes from './Routes'
import './App.css'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <Menu />
            <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
              <Routes />
            </ReactCSSTransitionGroup>
          </div>
        </Router>

    );
  }
}

export default App
