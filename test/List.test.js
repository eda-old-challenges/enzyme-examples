import test from 'ava'
import React from 'react'
import sinon from 'sinon'
import { mount, shallow, render } from 'enzyme'

import List from '../client/components/List'

test('<List /> creates one item for each wombat', t => {
  // Arrange
  const wombats = ['herschel', 'gertrude', 'jemima']
  const expected = 3

  // Act
  const wrapper = shallow(<List things={wombats} />)
  const actual = wrapper.find('li').length

  // Assert
  t.is(actual, expected)
})

test('<List /> calls moreWombatInfo when item clicked', t => {
  // Arrange
  const spy = sinon.spy()
  const wombats = ['herschel']
  const expected = 1

  // Act
  const wrapper = mount(<List things={wombats} moreWombatInfo={spy} />)
  const li = wrapper.find('li').first()
  li.simulate('click')
  const actual = spy.callCount

  // Assert
  t.is(actual, expected)
})

test('<List /> includes a <Notes /> component', t => {
  // Arrange
  const wombats = ['herschel']
  const expected = true

  // Act
  const wrapper = render(<List things={wombats} />)
  const actual = wrapper.find('div.notes').length > 0

  // Assert
  t.is(actual, expected)
})
