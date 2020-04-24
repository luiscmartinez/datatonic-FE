import React from 'react'
import { HorizontalBar as HorizontalBarChart } from 'react-chartjs-2'

export const HorizontalBar = ({
  data,
  colors,
  options,
  handleData,
  height,
}) => {
  return (
    <div>
      <HorizontalBarChart
        data={handleData(data, colors)}
        options={options}
        height={height}
      />
    </div>
  )
}
