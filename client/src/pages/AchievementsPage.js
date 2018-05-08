import React from 'react'
import Background from '../components/Background'
import backgroundImage from '../img/481.jpg'
import Achievements  from '../components/Achievements'
import achievementsData from '../achievements.json'

const AchievementsPage = () => {
    return (
      <div className="achievementsPage">
        <div className="content">
            <Achievements achievements={achievementsData.achievements}/>
        </div>
      </div>
    );
  }

export default AchievementsPage
