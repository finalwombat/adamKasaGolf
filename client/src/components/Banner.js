import React from 'react'
import './Banner.css'

const Banner = (props) => {
  return (
    <div className="banner" >
      <h2>{props.text}</h2>
    </div>
  )
}

export default Banner
