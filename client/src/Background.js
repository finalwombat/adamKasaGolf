import React from 'react'


const imgStyle = {
  height: '140vh',
  width: '100vw'
}

const Background = (props) => {
  return (
    <div className="backgroundComponent">
      <img src={props.img} style={imgStyle} alt="background" />
    </div>
  )
}

export default Background
