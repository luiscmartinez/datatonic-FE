import React from 'react'

export const BaselineMetric = ({ metric }) => {
  const { amount, entity } = metric
  return (
    <div>
      <div className='num'>{amount}</div>
      <div>{entity}</div>
    </div>
  )
}
