export const handleVerticalBarChartOpts = label => {
  const options = {
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
      title: {
        display: true,
        text: label,
        position: 'left',
        font: { weight: 'normal' },
        align: 'center',
      },
    },
    maintainAspectRatio: false,
  }
  return options
}
