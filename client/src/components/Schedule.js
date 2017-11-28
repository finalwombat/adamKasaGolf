import React from 'react'

export const Schedule = (props) => {
  return (
    <div className='scheduel'>
      <div className='titles'>
        <h2>Date</h2>
        <h2>Event</h2>
        <h2>Result</h2>
      </div>
      <div className='events'>
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
