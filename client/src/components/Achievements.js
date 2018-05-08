import React from 'react'
import styled from 'styled-components'
import tamworthWin from '../img/tamworthWin.jpg'

const AchievementDiv = styled.div`
                      width: 80vw;
                      height: 90vh;
                      display: flex;
                      color: white;

                      & img {
                        position: relative;
                      }
                      
                      & div {
                        width: 30%;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        margin: 30px;
                      }
`


const Achievements = (props) => {
  const Achievements = props.achievements.map( achievement => {
    return (
      <AchievementDiv>
        <img src={tamworthWin} style={{height: '100%', width: '60%'}}/>
        <div>
          <h2>{achievement.date}</h2>
          <h1>{achievement.title}</h1>
          <a href={achievement.link}>Read</a>
        </div>
        
      </AchievementDiv>
    )
  })
  return (
      <div className="achievements">
        {Achievements}
      </div>
  )
}

export default Achievements