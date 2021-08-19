export const handleHorizontalChartOps = (strX, strY) => {
  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          usePointStyle: true,
          font: {
            size: 11,
          },
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          text: strY,
          display: true,
        },
      },
      y: {
        title: {
          text: strX,
          display: true,
        },
      },
    },
  }

  return options
}
