import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Schedule from './Schedule'
import About from './About'

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
