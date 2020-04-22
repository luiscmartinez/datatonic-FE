import React from 'react'
import { BaselineMetricsCard } from './BaselineMetricsCard'
import { FractionMetric } from './FractionMetric'
import { BaselineMetricsBar } from './BaselineMetricBar'
import { BaselineFractionMetric } from './BaselineFractionMetric'
import { BaselineMetric } from './BaselineMetric'

export const BaselineMetrics = ({ baselineMetrics }) => {
  const {
    sensitiveDataLocations,
    inspectionCoverage,
    securityIssuesResolved,
  } = baselineMetrics
  return (
    <div className='baselineMetricWrapper'>
      <BaselineMetricsCard>
        <div className='baselineMetricTitle'>Security Issues Resolved</div>
        <div className='num'>{securityIssuesResolved}</div>
      </BaselineMetricsCard>
      <BaselineMetricsCard>
        <div className='baselineMetricTitle'>Inspection Coverage</div>
        <div className='centerContent'>
          {inspectionCoverage.map((metric, i) => (
            <BaselineFractionMetric key={i} metric={metric} />
          ))}
        </div>
      </BaselineMetricsCard>
      <BaselineMetricsCard>
        <div className='baselineMetricTitle'>Sensitive Data Locations</div>
        <div className='centerContent'>
          {sensitiveDataLocations.map((metric, i) => (
            <BaselineMetric key={i} metric={metric} />
          ))}
        </div>
      </BaselineMetricsCard>
    </div>
  )
}
