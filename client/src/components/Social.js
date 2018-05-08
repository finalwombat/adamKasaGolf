import React from 'react'
import facebookImg from '../img/facebook.png'
import instagramImg from '../img/instagram.png'
import twitterImg from '../img/twitter.png'
import Banner from './Banner'
import './Social.css'

const Social = () => {
  return (
      <div className="social">
        <div className="topText">
          <h2>Living the dream </h2>
          <h2>with a full-time golfer</h2>
        </div>
        <Banner text="Follow Adam"/>
        <div className="socialimages">
          <a href="https://www.facebook.com/adamkasagolf/"><img src={facebookImg} alt="facebook" /></a>
          <a href="https://www.instagram.com/adamkgolfer/"><img src={instagramImg} alt="instagram" /></a>
          <a href="https://twitter.com/AdamKGolfer"><img src={twitterImg} alt="twitter" /></a>
        </div>
      </div>
  )
}

export default Social
