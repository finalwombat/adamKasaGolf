import React from 'react'
import facebookImg from '../img/facebook.png'
import instagramImg from '../img/instagram.png'
import twitterImg from '../img/twitter.png'

const Social = () => {
  return (
      <div className="social">
        <img src={facebookImg} alt="facebook" />
        <img src={instagramImg} alt="instagram" />
        <img src={twitterImg} alt="twitter" />
      </div>
  )
}

export default Social
