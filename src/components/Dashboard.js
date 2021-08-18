import React, { useState, useEffect } from 'react'
import axios from 'api'
import { Notifications } from './Notifications'
import { BarGraph } from './BarGraph'
import { Graphs } from './Graphs'
import { GraphCard } from './GraphCard'
import { handleOptions2 } from 'graphHelpers'
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
        setTimeout(function() {
          setIsNotificationsLoading(false)
        }, 1500);

        setTimeout(function() {
          setBarChartLoading(false)
        }, 2500);
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
          title='Sensitive Info By Catagory'
          filteredBy='Count of Data Sources'
          subInfo='(Sensitive Info Type)'
          classes='dashboardCard-extend'
          isLoading={isBarChartLoading}
          graph={
            <BarGraph
              data={dataTonicJSON?.graphs?.sensitiveDataDistributionByDataSource}
              title='Sensitive Data Distribution by Data Sources'
              options={handleOptions2('Total Info Type')}
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
