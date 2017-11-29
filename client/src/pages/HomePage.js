import React from 'react'
import Background from '../components/Background'
import backgroundImage from '../img/golfshot.jpg'
import FacebookFeed from '../components/FacebookFeed'
import Social from '../components/Social'

const HomePage = () => {
    return (
      <div className="home">
        <Background img={backgroundImage}></Background>
        <FacebookFeed />
        <Social />
      </div>
    );
  }

export default HomePage
