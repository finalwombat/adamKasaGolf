import React from 'react'
import { withRouter } from 'react-router-dom'
import './Menu.css'
import logo from '../img/logo.jpg'

const menuStyle = {
  display: "flex"
}

const logoStyle = {
  "margin-top": "auto",
  "margin-bottom": "auto",
  "margin-left": "2vw"
}
const logoImgStyle = {
  width: "20vw"
}

const Menu = (props) => {
    return (
      <div className="menu" style={menuStyle}>
        <div className="logo" style={logoStyle}>
          <img src={logo} style={logoImgStyle}/>
        </div>
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
      </div>

    )
  }

export default withRouter(Menu)
