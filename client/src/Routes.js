import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import About from './pages/About'

const Routes = (props) => {
  return (
    <div className='main'>
      <Route exact path="/" render={Home} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/about" component={About} />
    </div>
  )
}

export default Routes
