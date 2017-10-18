import React, { Component } from 'react'
import Background from '../components/Background'
import backgroundImage from '../img/golfshot.jpg'

const Home = () => {
    return (
      <div className="home">
        <Background img={backgroundImage}></Background>
      </div>
    );
  }

export default Home
