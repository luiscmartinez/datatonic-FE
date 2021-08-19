import React, { useState, useEffect } from 'react'
import axios from 'api'
import { Notifications } from './Notifications'
import { BarGraph, handleVerticalBarChartOpts } from './verticalBarChart'
import { Graphs } from './Graphs'
import { GraphCard } from './GraphCard'
import { Overview } from './Overview'
import { BarChartLoader } from './BarChartLoader'

export const Dashboard = () => {
  const [dataTonicJSON, setDataTonic] = useState({})
  const [isNotificationsLoading, setIsNotificationsLoading] = useState(true)
  const [isBarChartLoading, setBarChartLoading] = useState(true)
  useEffect(() => {
    axios
      .get('/')
      .then(res => {
        if (typeof res.data !== "object") {
          setDataTonic('whoops')
          return
        }
        setDataTonic(res.data)
        setIsNotificationsLoading(false)
        setBarChartLoading(false)

      })
      .catch(err => setDataTonic('whoops'))
  }, [])

  if (dataTonicJSON === 'whoops') {
    return <div>{'WHOOPS SOMETHING WENT WRONG 😷'}</div>
  }
  return (
    <div className='dashboard'>
      <Overview overview={dataTonicJSON.overview} isLoading={isNotificationsLoading} />
      <div className='secondRow'>
        <GraphCard
          title='Sensitive Data Distribution by Data Sources'
          subInfo='(Sensitive Info Type)'
          classes='dashboardCard-extend'
          isLoading={isBarChartLoading}
          graph={
            <BarGraph
              data={dataTonicJSON?.graphs?.sensitiveDataDistributionByDataSource}
              title='Sensitive Data Distribution by Data Sources'
              options={handleVerticalBarChartOpts('(Total Records)')}
            />
          }
          loader={
            <BarChartLoader />
          }
        />
        <Notifications notifications={dataTonicJSON.notifications} isNotificationsLoading={isNotificationsLoading}/>
      </div>
      <Graphs isLoading={isNotificationsLoading}/>
    </div>
  )
}
