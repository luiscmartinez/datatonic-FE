import React, { useState, useEffect } from 'react'
import { OverviewHeader } from './OverviewHeader'
import { BaselineMetrics } from './BaselineMetrics'

export const Overview = ({ overview }) => {
  return (
    <div className='overview'>
      <OverviewHeader />
      <BaselineMetrics baselineMetrics={overview} />
    </div>
  )
}
