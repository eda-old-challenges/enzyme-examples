import React from 'react'

export default function ({ moreWombatInfo, things }) {
  return (
    <div>
      {things.map((thing, i) => (
        <li key={i} onClick={moreWombatInfo}>{thing}</li>
      ))}
    </div>
  )
}
