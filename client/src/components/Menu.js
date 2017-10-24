import React from 'react'
import { withRouter } from 'react-router-dom'
import './Menu.css'



const handleOnClink = (e) => {

  console.log(e.target.parent)
}

const Menu = (props) => {
    return (
      <nav className="slidemenu">
        <input type="radio" name="slideItem" id="slide-item-1" className="slide-toggle"
        onClick={() => {props.history.push('/')}} defaultChecked/>
        <label htmlFor="slide-item-1"><p className="icon">♬</p><span>Home</span></label>
        <input type="radio" name="slideItem" id="slide-item-2" className="slide-toggle"
        onClick={() => {props.history.push('/schedule')}} />
        <label htmlFor="slide-item-2" ><p className="icon">♬</p><span>Schedule</span></label>
        <input type="radio" name="slideItem" id="slide-item-3" className="slide-toggle"
        onClick={() => {props.history.push('/about')}} />
        <label htmlFor="slide-item-3"><p className="icon">♬</p><span>About</span></label>

        <div className="clear"></div>


       <div className="slider">
         <div className="bar"></div>
       </div>
      </nav>
    )
  }

export default withRouter(Menu)
