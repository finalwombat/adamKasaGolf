import React from 'react'
import './Schedule.css'

export const Schedule = (props) => {
  const events = props.events.map(event => {
    return <tr>
            <td>{event.date}</td>
            <td>{event.name}</td>
            <td>{event.result}</td>
            <td><ul className="tournRounds">{scorecard(event.score)}</ul></td>
          </tr>
  })
  return (
      <div className="schedule">
        <div className="scheduleHead">
          <h1>Tournament Schedule</h1>
        </div>
        <div className="tableWrapper">
          <table className="scheduleTable">
            <thead><th>Date</th> <th>Event</th> <th>POS</th> <th>Score</th></thead>
            <tbody> { events }</tbody>
          </table>
        </div>
      </div>
  )
}


const scorecard = (score) => {
    const scores = score.split(',')
    return scores.map((score, index) => {
      console.log(index, score)
      return <li className='round'>
              <span className="roundNum">R{index + 1}</span>
              <span className="roundScore">{score}</span>
            </li>
    })
}
