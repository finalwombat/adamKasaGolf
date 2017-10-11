import React from 'react'
import { Route } from 'react-router-dom'
import Home from '/Home.js'
import Schedule from '/Schedule.js'
import About from '/About.js'

const Routes = (props) => {
  return (
    <div className='main'>
      <Route path="/" render={Home}/>
      <Route path="/schedule" render={Schedule}/>
      <Route path="/about" render={About}/>
    </div>
  )
}
