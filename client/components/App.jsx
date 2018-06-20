import React from 'react'

import List from './List'

const wombats = ['herschel', 'gertrude', 'jemima']

const getMoreInfo = () => {
  // eslint-disable-next-line no-console
  console.log('Getting more info ...')
}

export default function App () {
  return (
    <div>
      <h1>React development has begun!</h1>
      <List things={wombats} moreWombatInfo={getMoreInfo} />
    </div>
  )
}
