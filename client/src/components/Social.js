import React from 'react'
import facebookImg from '../img/facebook.png'
import instagramImg from '../img/instagram.png'
import twitterImg from '../img/twitter.png'
import Banner from './Banner'


const socialStyle = {
  
}

const topTextStyle = {
  color: 'black',
  fontSize: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative'
}


const socialimagesStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  position: 'relative',
  width: '250px'
}

const Social = () => {
  return (
      <div className="social">
        <div className="topText" style={topTextStyle}>
          <h2>Living the dream </h2>
          <h2>with a full-time golfer</h2>
        </div>
        <Banner text="Follow Adam"/>
        <div className="socialimages" style={socialimagesStyle}>
          <img src={facebookImg} alt="facebook" />
          <img src={instagramImg} alt="instagram" />
          <img src={twitterImg} alt="twitter" />
        </div>
      </div>
  )
}

export default Social
