import React from 'react'
import Background from '../components/Background'
import backgroundImage from '../img/481.jpg'
import Achievements  from '../components/Achievements'
import achievementsData from '../achievements.json'

const SchedulePage = () => {
    return (
      <div className="schedulePage">
        <div className="content">
            <Achievements achievements={achievementsData.achievements}/>
        </div>
      </div>
    );
  }

export default SchedulePage
