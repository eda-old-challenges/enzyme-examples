import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'

test('<App />', t => {
  const expected = 'React development has begun!'
  const wrapper = shallow(<App />)
  t.is(wrapper.text(), expected)
})
