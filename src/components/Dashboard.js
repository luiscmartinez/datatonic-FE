import React from 'react'

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='overview'>
        <h1>OVERVIEW</h1>
        <div className='last_reported'>Last scan 4 hours ago</div>
      </div>
      <div className='firstRowWrapper'>
        <div className='action'>Security</div>
        <div className='divider'></div>
        <div className='action'>Inspect</div>
        <div className='divider'></div>
        <div className='action'>Sensitive</div>
      </div>
    </div>
  )
}
