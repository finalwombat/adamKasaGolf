import React from 'react'

const imgStyle = {
  height: '100vh',
  width: '100vw',
  position: 'absolute'
}

const Background = (props) => {

  return (
    <div className="backgroundComponent">
      <img src={props.img} style={imgStyle} alt="background" /> 
    </div>
  )
}

export default Background
