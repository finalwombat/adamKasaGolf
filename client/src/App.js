import React, { Component } from 'react'
import Menu from './components/Menu.js'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Schedule from './pages/Schedule'
import About from './pages/About'
import PageShell from './components/PageShell'
import './App.css'

class App extends Component {
  render() {
    return (
        <div className="app">
          <Menu />
          <Route path="/" exact component={PageShell(Home)}></Route>
          <Route path="/schedule" exact component={PageShell(Schedule)}></Route>
          <Route path="/about" exact component={PageShell(About)}></Route>
        </div>
    );
  }
}

export default App
