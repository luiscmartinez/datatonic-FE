import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import outlabeledPiev from 'chartjs-plugin-piechart-outlabels'

const handleData = (dataSources, colors) => {
  const labels = []
  const results = { data: [], backgroundColor: [] }

  for (const source in dataSources) {
    labels.push(source)
    results.data.push(dataSources[source])
    results.backgroundColor.push(colors[source])
  }
  return { labels, datasets: [results] }
}
export const DonutGraph = ({ data, colors, options }) => {
  return (
    <div className='donutWrapper'>
      <Doughnut
        data={handleData(data, colors)}
        options={options}
        cutoutPercentage={20}
      />
    </div>
  )
}
