import React from 'react'
import './Schedule.css'

export const Schedule = (props) => {
  const events = props.events.map(event => {
    return <tr><td>{event.date}</td> <td>{event.name}</td>  <td>{event.result}</td> <td>{event.score}</td></tr>
  })
  return (
      <div className="schedule">
        <table className="scheduleTable">
          <thead><th>Date</th> <th>Event</th> <th>POS</th> <th>Score</th></thead>
          <tbody> { events }</tbody>
        </table>
      </div>
  )
}
