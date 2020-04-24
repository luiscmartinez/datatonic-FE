import React from 'react'
import { dataTonicJSON } from 'dataTonic.js'
import { Notifications } from './Notifications'
import { BaselineMetrics } from './BaselineMetrics'
import { BarGraph } from './BarGraph'
import { DonutGraph } from './DonutGraph'
import { Graphs } from './Graphs'
import { GraphCard } from './GraphCard'
import { HorizontalBar } from './HorizontalBar'

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='overview'>
        <h2>OVERVIEW</h2>
        <div className='last_reported'>Last scan 4 hours ago</div>
      </div>
      <BaselineMetrics baselineMetrics={dataTonicJSON.overview} />
      <div className='secondRow'>
        <GraphCard
          title='Sensitive Info By Catagory'
          filteredBy='Count of Data Sources'
          subInfo='Sensitive Info Type'
          classes='dashboardCard-extend'
          graph={
            <div className='dashboardCard-extend'>
              <BarGraph
                data={
                  dataTonicJSON.graphs.sensitiveDataDistributionByDataSource
                }
                title='Sensitive Data Distribution by Data Sources'
              />
            </div>
          }
        />
        <Notifications notifications={dataTonicJSON.notifications} />
      </div>
      <Graphs />
    </div>
  )
}
