import React from 'react'

import Notes from './Notes'

export default function ({ moreWombatInfo, things }) {
  return (
    <div>
      {things.map((thing, i) => (
        <li key={i} onClick={moreWombatInfo}>{thing}</li>
      ))}
      <Notes text="This list of wombats may not be exhaustive." />
    </div>
  )
}
