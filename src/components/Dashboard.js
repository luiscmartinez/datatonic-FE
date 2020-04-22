import React from 'react'
import { dataTonicJSON } from 'dataTonic.js'
import { Notifications } from './Notifications'
import { BaselineMetrics } from './BaselineMetrics'

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='overview'>
        <h2>OVERVIEW</h2>
        <div className='last_reported'>Last scan 4 hours ago</div>
      </div>
      <BaselineMetrics baselineMetrics={dataTonicJSON.overview} />
      <div className='secondRow'>
        <div className='dashboardCard'>
          <div className='dashboardHeader'>
            <div>Sensitive Data Distribution by Data Sources</div>
            <div>X</div>
          </div>
          <div className='cta'>CONTENT</div>
        </div>
        <Notifications notifications={dataTonicJSON.notifications} />
      </div>
    </div>
  )
}
