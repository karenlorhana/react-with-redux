import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
  summer: {
    text: 'lets hit the beach!',
    iconName: '☀',
  },
  winter: {
    text: 'bur, its cold',
    iconName: '❄',
  },
}

const getSeason = (lat, month) => {
  if (month > 1 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <span className={'icon-left'}>{iconName}</span>
      <h1>{text}</h1>
      <span className={'icon-right'}>{iconName}</span>
    </div>
  )
}

export default SeasonDisplay
