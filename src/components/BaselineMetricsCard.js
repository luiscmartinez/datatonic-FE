import React from 'react'

export const BaselineMetricsCard = props => {
  return (
    <>
      <div className='action'>{props.children}</div>
      <div className='divider'></div>
    </>
  )
}
