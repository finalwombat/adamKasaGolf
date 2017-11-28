import React from 'react'

export const Schedule = (props) => {

  const events = props.events.map(event => {
    return <li><ScheduleEvent date={event.date} name={event.name} result={event.result} /></li>
  })
  return (
    <div className='scheduel'>
      <div className='titles'>
        <h2>Date</h2>
        <h2>Event</h2>
        <h2>Result</h2>
      </div>
      <div className='events'>
        <ul>
        {events}
        </ul>
      </div>
    </div>

  )
}

export const ScheduleEvent = (props) => {
  return (
    <div>
      <p>{props.date}</p>
      <p>{props.name}</p>
      <p>{props.result}</p>
    </div>
  )
}
