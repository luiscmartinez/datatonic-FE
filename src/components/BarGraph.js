import React from 'react'
import { Bar } from 'react-chartjs-2'
const arbitraryStackKey = 'stack1'
const colors = {
  swiftCode: '#58B7E5',
  email: '#E97250',
  usBankAccountNumber: '#49A66B',
  phone: '#228FC2',
  ssn: '#6DC894',
  usPassport: '#ED8061',
  abaRouting: '#2086B6',
  dob: '#47A268',
  creditCard: '#CC502D',
}

const handleData = datasets => {
  const labels = []
  const results = {}
  for (const property in datasets) {
    labels.push(property)
    Object.keys(datasets[property]).forEach((entity, i) => {
      console.log(results)
      if (results[entity] === undefined) {
        results[entity] = {
          stack: arbitraryStackKey,
          label: entity,
          data: [datasets[property][entity]],
          backgroundColor: colors[entity],
        }
      } else {
        results[entity]['data'].push(datasets[property][entity])
      }
    })
  }

  return { labels, datasets: Object.keys(results).map(set => results[set]) }
}
export const BarGraph = props => {
  const { data, title } = props
  handleData(data)
  return (
    <div>
      <h2>{title}</h2>
      <Bar
        data={handleData(props.data)}
        width={400}
        height={200}
        options={{
          maintainAspectRatio: false,
          legend: {
            position: 'bottom',
            align: 'start',
            labels: {
              usePointStyle: true,
            },
          },
        }}
      />
    </div>
  )
}
