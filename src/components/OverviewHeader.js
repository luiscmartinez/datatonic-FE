import React from 'react'

export const OverviewHeader = () => {
  return (
    <div className='overview-header-container'>
      <h2>OVERVIEW</h2>
      <div className='last_reported'>
        <p>
          {' '}
          {'Last scan '}
          <strong>{' 4 hours ago'}</strong>
        </p>
      </div>
    </div>
  )
}
