import React from 'react'
import Background from '../components/Background'
import backgroundImage from '../img/clubs.jpg'

const AboutPage = () => {
    return (
      <div className="about">
        <Background img={backgroundImage}></Background>
      </div>
    );
  }

export default AboutPage
