import React from 'react'
import Schedule from '../components/Schedule'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Schedule></Schedule>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
