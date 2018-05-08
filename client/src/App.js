import React, { Component } from 'react'
import Menu from './components/Menu.js'
import MenuMobile from './components/MenuMobile'
import { Route } from 'react-router-dom'
import Media from 'react-media'

import HomePage from './pages/HomePage'
import SchedulePage from './pages/AchievementsPage'
import PartnersPage from './pages/PartnersPage'
import AboutPage from './pages/AboutPage'
import PageShell from './components/PageShell'
import './App.css'
import AchievementsPage from './pages/AchievementsPage.js';

class App extends Component {
  render() {
    return (
        <div className="app">
          <Media query="(max-width: 599px)">
            {matches => 
              matches ? (
                <MenuMobile />
              ): (
                <Menu />
              )}
          </Media>
          <Route path="/" exact component={PageShell(HomePage)}></Route>
          <Route path="/achievements" exact component={PageShell(AchievementsPage)}></Route>
          <Route path="/partners" exact component={PageShell(PartnersPage)}></Route>
          <Route path="/about" exact component={PageShell(AboutPage)}></Route>
        </div>
    );
  }
}

export default App
