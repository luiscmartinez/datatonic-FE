export const handleDataForColorStacks = (datasets, colors) => {
  const labels = []
  const results = {}
  for (const property in datasets) {
    labels.push(property)
    Object.keys(datasets[property]).forEach((entity, i) => {
      if (results[entity] === undefined) {
        results[entity] = {
          stack: 'stack1',
          label: entity,
          data: [datasets[property][entity]],
          backgroundColor: colors[entity],
          barThickness: 10,
        }
      } else {
        results[entity]['data'].push(datasets[property][entity])
      }
    })
  }

  return {
    labels,
    datasets: Object.keys(results).map(set => results[set]),
  }
}

export const handleData = (dataSources, colors) => {
  const labels = []
  const results = { data: [] }

  for (const source in dataSources) {
    labels.push(source)
    results.data.push(dataSources[source])
  }
  return {
    labels,
    datasets: [
      { data: results.data, backgroundColor: '#36acde', barThickness: 10 },
    ],
  }
}

export const handleOptions = (strX, strY = 'Data Source') => {
  return {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: strY,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: strX,
          },
        },
      ],
    },
  }
}

export const handleOptions2 = (strX, strY) => {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          usePointStyle: true,
          padding: 15,
          fontSize: 11,
        },
      },
      title: {
        display: true,
        text: strX,
        position: 'left',
        font: { weight: 'normal' },
        align: 'center',
      },
    },
    maintainAspectRatio: false,
  }
}
