import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Link to='/'>Home</Link>
        <Link to='/schedule'>Schedule</Link>
        <Link to='/about'>About</Link>
      </div>
    );
  }
}

export default Menu
