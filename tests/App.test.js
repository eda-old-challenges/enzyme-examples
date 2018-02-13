/* global test expect */
import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import './setup-env'
import App from '../client/components/App'

configure({adapter: new Adapter()})

test('<App />', () => {
  const expected = 'React development has begun!'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})
