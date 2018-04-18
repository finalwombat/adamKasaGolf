import React from 'react'
import Background from '../components/Background'
import backgroundImage from '../img/clubs.jpg'
import tga from '../img/thegolfathlete.jpg'
import vp from '../img/vicpark.jpg'

const PartnersPage = () => {
    return (
      <div className="partners">
          <img src={vp} />
          <img src={tga} />
      </div>
    );
  }

export default PartnersPage
