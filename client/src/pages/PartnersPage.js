import React from 'react'
import Background from '../components/Background'
import backgroundImage from '../img/clubs.jpg'
import tga from '../img/thegolfathlete.jpg'
import vp from '../img/vicpark.jpg'
import golfinfo from '../img/golfinfonetwork.png'

import './pages.css'

const PartnersPage = () => {
    return (
      <div className="partners">
        <div className='container'>
          <img className="image" src={vp} />
          <a href="https://victoriapark.com.au/">
            <div className='overlay'>
              <div className="text">Victoria Park Golf Complex</div>
            </div>
          </a>
        </div>
        <div className='container'>
        <a href="http://www.thegolfathlete.com/">
          <img className="image" src={tga} />
            <div className='overlay'>
              <div className="text">The Golf Athlete</div>
            </div>
          </a>
        </div>
        <div className='container'>
        <a href="http://www.golfinfonetwork.com/">
          <img className="image" src={golfinfo} />
            <div className='overlay'>
              <div className="text">Golf Info Network</div>
            </div>
         </a>
        </div>
          
          
          
      </div>
    );
  }

export default PartnersPage
