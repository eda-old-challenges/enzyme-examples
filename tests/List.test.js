import React from 'react'
import {mount, shallow, render} from 'enzyme'

import List from '../client/components/List'

test('<List /> creates one item for each wombat', () => {
  // Arrange
  const wombats = ['herschel', 'gertrude', 'jemima']
  const expected = 3

  // Act
  const wrapper = shallow(<List things={wombats} />)
  const actual = wrapper.find('li').length

  // Assert
  expect(actual).toBe(expected)
})

test('<List /> calls moreWombatInfo when item clicked', () => {
  // Arrange
  const spy = jest.fn()
  const wombats = ['herschel']
  const expected = 1

  // Act
  const wrapper = mount(<List things={wombats} moreWombatInfo={spy} />)
  const li = wrapper.find('li').first()
  li.simulate('click')
  const actual = spy.mock.calls.length

  // Assert
  expect(actual).toBe(expected)
})

test('<List /> includes a <Notes /> component', () => {
  // Arrange
  const wombats = ['herschel']
  const expected = true

  // Act
  const wrapper = render(<List things={wombats} />)
  const actual = wrapper.find('div.notes').length > 0

  // Assert
  expect(actual).toBe(expected)
})
