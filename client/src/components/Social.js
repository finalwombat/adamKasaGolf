import React from 'react'
import facebookImg from '../img/facebook.png'
import instagramImg from '../img/instagram.png'
import twitterImg from '../img/twitter.png'
import Banner from './Banner'

const Social = () => {
  return (
      <div className="social">
        <Banner text="Follow Adam"/>
        <img src={facebookImg} alt="facebook" />
        <img src={instagramImg} alt="instagram" />
        <img src={twitterImg} alt="twitter" />
      </div>
  )
}

export default Social
