import React from 'react'
import Background from '../components/Background'
import backgroundImage from '../img/481.jpg'
import { Schedule } from '../components/Schedule'
import scheduleData from '../events.json'

const SchedulePage = () => {
    return (
      <div className="schedulePage">
        <Background img={backgroundImage}></Background>
        <div className="content">
            <Schedule events={scheduleData.events}/>
        </div>
      </div>
    );
  }

export default SchedulePage
