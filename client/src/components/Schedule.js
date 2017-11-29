import React from 'react'

const scheduleStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '50vw'
}

const titlesStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

const eventsStyle = {
  display: 'flex',
  border: '1px solid red'
}

const scheduleEventStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}


export const Schedule = (props) => {
  const events = props.events.map(event => {
    return <li><ScheduleEvent date={event.date} name={event.name} result={event.result} /></li>
  })
  return (
    <div className='scheduel' style={scheduleStyle}>
      <div className='titles' style={titlesStyle}>
        <h2>Date</h2>
        <h2>Event</h2>
        <h2>Result</h2>
      </div>
      <div className='events' style={eventsStyle}>
        <ul>
        {events}
        </ul>
      </div>
    </div>

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
