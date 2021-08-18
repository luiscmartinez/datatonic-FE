import React from 'react'
import ContentLoader from 'react-content-loader'

export const BarChartLoader = props => {
  return (
    <ContentLoader
      viewBox='0 0 300 200'
      style={{ border: '2px solid red' }}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect x="8" y="18" rx="2" ry="2" width="140" height="10" /> 
      <rect x="8" y="34" rx="2" ry="2" width="140" height="10" /> 
      <rect x='0' y='160' rx='0' ry='0' width='25' height='40' />
      <rect x='30' y='145' rx='0' ry='0' width='25' height='55' />
      <rect x='60' y='126' rx='0' ry='0' width='25' height='74' />
      <rect x='90' y='80' rx='0' ry='0' width='25' height='120' />
      <rect x='120' y='142' rx='0' ry='0' width='25' height='58' />
      <rect x='150' y='142' rx='0' ry='0' width='25' height='78' />
      <rect x='190' y='132' rx='0' ry='0' width='25' height='78' />
      <rect x='230' y='132' rx='0' ry='0' width='25' height='78' />
      <rect x='260' y='132' rx='0' ry='0' width='25' height='78' />
    </ContentLoader>
  )
}
