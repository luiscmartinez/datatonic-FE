import React from 'react'
import ContentLoader from 'react-content-loader'

export const BaselineMetricLoader = () => {
  return (
    <ContentLoader
      speed={2}
      viewBox='0 0 400 460'
      backgroundColor="#f3f3f3"
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='60' rx='2' ry='2' width='100%' height='100%' />
    </ContentLoader>
  )
}
