import React from 'react'
import Background from '../components/Background'
import backgroundImage from '../img/golfshot.jpg'
import FacebookFeed from '../components/FacebookFeed'
import Social from '../components/Social'

const homeStyle = {
}

const contentStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}

const HomePage = () => {
    return (
      <div className="home" style={homeStyle}>
        <Background img={backgroundImage}></Background>
        <div className='content' style={contentStyle}>
          <FacebookFeed />
          <Social />
        </div>
      </div>
    );
  }

export default HomePage
