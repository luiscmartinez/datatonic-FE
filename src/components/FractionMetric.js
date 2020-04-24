import React from 'react'

export const FractionMetric = ({ numerator, denominator }) => {
  return (
    <div className='num'>
      {numerator}/ <span>{denominator}</span>
    </div>
  )
}
