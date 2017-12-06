import React from 'react'
import facebookImg from '../img/facebook.png'
import instagramImg from '../img/instagram.png'
import twitterImg from '../img/twitter.png'
import Banner from './Banner'

const socialimagesStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  position: 'relative',
  width: '250px'
}

const Social = () => {
  return (
      <div className="social">
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
