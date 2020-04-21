import React from 'react'

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='overview'>
        <h1>OVERVIEW</h1>
        <div className='last_reported'>Last scan 4 hours ago</div>
      </div>
      <ul className='parent'>
        <li>
          <div>
            <section>Security Issues Resolved</section>
          </div>
        </li>
        <li>
          <div>
            <section>Inspection Coverage</section>
          </div>
        </li>
        <li>
          <div>
            <section>Sensitive Data Locations</section>
          </div>
        </li>
      </ul>
    </div>
  )
}
