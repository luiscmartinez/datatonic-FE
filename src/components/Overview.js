import React from 'react'
import { OverviewHeader } from './OverviewHeader'
import { BaselineMetrics } from './BaselineMetrics'

export const Overview = ({ overview, isLoading }) => {
  return (
    <div className='overview'>
      <OverviewHeader />
      <BaselineMetrics baselineMetrics={overview} isLoading={isLoading} />
    </div>
  )
}
