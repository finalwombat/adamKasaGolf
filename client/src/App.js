import React, { Component } from 'react'
import Menu from './components/Menu.js'
import { Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SchedulePage from './pages/SchedulePage'
import PartnersPage from './pages/PartnersPage'
import AboutPage from './pages/AboutPage'
import PageShell from './components/PageShell'
import './App.css'

class App extends Component {
  render() {
    return (
        <div className="app">
          <Menu />
          <Route path="/" exact component={PageShell(HomePage)}></Route>
          <Route path="/schedule" exact component={PageShell(SchedulePage)}></Route>
          <Route path="/partners" exact component={PageShell(PartnersPage)}></Route>
          <Route path="/about" exact component={PageShell(AboutPage)}></Route>
        </div>
    );
  }
}

export default App
