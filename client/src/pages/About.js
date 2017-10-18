import React, { Component } from 'react'
import Background from './Background'
import backgroundImage from './img/clubs.jpg'

const About = () => {
    return (
      <div className="about">
        <Background img={backgroundImage}></Background>
      </div>
    );
  }

export default About
