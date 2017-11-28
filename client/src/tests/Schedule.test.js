import React from 'react'
import {Schedule, ScheduleEvent} from '../components/Schedule'
import {shallow, mount} from 'enzyme'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Schedule events={events}></Schedule>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('returns div with three event divs', () => {
  const wrapper = shallow(<Schedule events={events} />)
  expect((wrapper.find('ul').children()).length).toEqual(events.length)


})

// ScheduleEvent
it('returns div with event details', () => {

  const wrapper = shallow(<ScheduleEvent date='12th sep' name='Gold Coast Open' result=''/>)
  expect(wrapper.html()).toEqual('<div><p>12th sep</p><p>Gold Coast Open</p><p></p></div>')

})



  const events = [
    {
      date: '12th sep',
      name: 'Gold Coast Open',
      result: '5th'
    },
    {
      date: '16th oct',
      name: 'Masters',
      result: '1st'
    },
    {
      date: '20th dec',
      name: 'Christmass challenge',
      result: '25th'
    }
  ]
