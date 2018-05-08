import React from 'react'
import styled from 'styled-components'
import tamworthWin from '../img/tamworthWin.jpg'

const AchievementDiv = styled.div`
                      width: 90vw;
                      height: 90vh;
                      display: flex;
                      color: white;


                      & img {
  
                      }
                      
                      & div {
                        width: 30%;
                        margin: 60px;
                        align-self: center;
                      }

                      & a {
                        text-decoration: none;
                        background: #4286f4;
                        padding: 3px 8px 3px 8px;
                        color: black;
                        font-size: 1.3em;
                        transition: .5s ease;
                      }

                      & a:hover {
                        background: #2763c4;
                      }
`


const Achievements = (props) => {
  const Achievements = props.achievements.map( achievement => {
    return (
      <AchievementDiv>
        <div>
          <h2>{achievement.date}</h2>
          <h1>{achievement.title}</h1>
          <a href={achievement.link}>View</a>
        </div>
        <img src={tamworthWin} style={{height: '80%', width: '40%'}}/>
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