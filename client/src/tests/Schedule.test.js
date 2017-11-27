import React from 'react'
import {Schedule, ScheduleEvent} from '../components/Schedule'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Schedule></Schedule>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

// ScheduleEvent
it('returns div with event details', () => {
  const e = {
    'date': '12th sep',
    'event': 'Gold Coast open',
    'Result': ''
  }

  const div = shallow(<ScheduleEvent />)
  console.log(div)

  

})
