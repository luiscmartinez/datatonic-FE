import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export const BaselineMetricsBar = ({ numerator, denominator }) => {
  const handleFill = () => {
    const percentage = (Number(numerator) * 100) / Number(denominator)
    return parseFloat(percentage).toPrecision(1)
  }
  return <ProgressBar now={handleFill()} />
}
