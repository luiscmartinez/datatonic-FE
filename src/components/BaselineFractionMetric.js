import React from 'react'
import { FractionMetric } from './FractionMetric'
import { BaselineMetricsBar } from './BaselineMetricBar'
export const BaselineFractionMetric = ({ metric }) => {
  const { coverage, entity } = metric
  const split = coverage.split('/')
  const numerator = split[0]
  const denominator = split[1]
  return (
    <div>
      <FractionMetric numerator={numerator} denominator={denominator} />
      <BaselineMetricsBar numerator={numerator} denominator={denominator} />
      <div className='label'>{entity}</div>
    </div>
  )
}
