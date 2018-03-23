import React from 'react'
import './Schedule.css'
const scheduleStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '80vw',
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'relative'
}

const titlesStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  color: '#F9D41B',
  fontSize: '28px'
}

const eventsStyle = {
  display: 'flex',
  border: '1px solid red'
}

const scheduleEventStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '24'
}

const ulStyle = {
  listStyle: 'none'
}


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
    // <div className='scheduel' style={scheduleStyle}>
    //   <div className='titles' style={titlesStyle}>
    //     <h2>Date</h2>
    //     <h2>Event</h2>
    //     <h2>Result</h2>
    //   </div>
    //   <div className='events' style={eventsStyle}>
    //     <ul style={ulStyle}>
    //     {events}
    //     </ul>
    //   </div>
    // </div>

  )
}

export const ScheduleEvent = (props) => {
  return (
    <div className="scheduleEvent" style={scheduleEventStyle}>
      <p>{props.date}</p>
      <p>{props.name}</p>
      <p>{props.result}</p>
    </div>
  )
}
