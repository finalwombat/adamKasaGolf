import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/about">About</Link>
      </div>
    )
  }

export default Menu
