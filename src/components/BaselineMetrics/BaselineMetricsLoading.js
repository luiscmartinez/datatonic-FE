import React from 'react'

import { BaselineMetricsCard } from '../BaselineMetricsCard'
import {BaselineMetricLoader} from './BaselineMetricLoader'

export const BaselineMetricsLoading = () => {
  return (
    <div className='baselineMetricWrapper'>
      <BaselineMetricsCard>
        <div className='baselineMetricTitle'>Security Issues Resolved</div>
        <BaselineMetricLoader/>
      </BaselineMetricsCard>
      <BaselineMetricsCard>
        <div className='baselineMetricTitle'>Inspection Coverage</div>
        <BaselineMetricLoader/>
      </BaselineMetricsCard>
      <BaselineMetricsCard>
        <div className='baselineMetricTitle'>Sensitive Data Locations</div>
        <BaselineMetricLoader/>
      </BaselineMetricsCard>
    </div>
  )
}
