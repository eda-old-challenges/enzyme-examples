import test from 'tape'
import React from 'react'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'

import List from '../client/components/List'

test('<List /> creates one item for each wombat', t => {
  // Arrange
  const wombats = ['herschel', 'gertrude', 'jemima']
  const expected = 3

  // Act
  const wrapper = shallow(<List things={wombats} />)
  const actual = wrapper.find('li').length

  // Assert
  t.equal(actual, expected)
  t.end()
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
  t.equal(actual, expected)
  t.end()
})
