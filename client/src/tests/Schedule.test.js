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

  const wrapper = shallow(<ScheduleEvent date='12th sep' name='Gold Coast Open' result=''/>)
  console.log(wrapper.html())
  expect(wrapper.html()).toEqual('<div><p>12th sep</p><p>Gold Coast Open</p><p></p></div>')


})
