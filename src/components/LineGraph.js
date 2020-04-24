import React from 'react'
import { Line } from 'react-chartjs-2'

export const LineGraph = () => {
  return (
    <div>
      <Line
        data={data}
        width={150}
        height={30}
        options={{
          legend: {
            display: false,
            labels: {
              display: false,
            },
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  )
}

const data = {
  labels: ['', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      backgroundColor: '#37acde',
      borderColor: '#37acde',
      data: [0, 10, 5, 2, 20, 30, 20],
      pointRadius: [0, 0, 0, 0, 0, 0, 5],
    },
  ],
}
