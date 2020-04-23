import React from 'react'
import { dataTonicJSON } from 'dataTonic.js'
import { Notifications } from './Notifications'
import { BaselineMetrics } from './BaselineMetrics'
import { BarGraph } from './BarGraph'
import { DonutGraph } from './DonutGraph'
import { Graphs } from './Graphs'
import { GraphCard } from './GraphCard'
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
const colors2 = {
  HIPAA: '#58B7E5',
  FERPA: '#1D749E',
  Class3: '#CC502D',
  Class4: '#49A66B',
  Class5: '#36ACDE',
  Class6: '#6DC894',
  Class7: '#E97250',
  Class8: '#58B7E5',
  PCI: '#49a66b',
  PII: '#E97250',
}
const doughnutOptions = {
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
  plugins: {
    outlabels: {
      backgroundColor: null,
      color: 'black',
      lineColor: 'black',
      text: '%l:%v',
    },
  },
}
export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='overview'>
        <h2>OVERVIEW</h2>
        <div className='last_reported'>Last scan 4 hours ago</div>
      </div>
      <BaselineMetrics baselineMetrics={dataTonicJSON.overview} />
      <div className='secondRow'>
        <div className='dashboardCard'>
          <div className='dashboardHeader'>
            <div>Sensitive Data Distribution by Data Sources</div>
            <div>X</div>
          </div>
          <BarGraph
            data={dataTonicJSON.graphs.sensitiveDataDistributionByDataSource}
            title='Sensitive Data Distribution by Data Sources'
          />
        </div>
        <Notifications notifications={dataTonicJSON.notifications} />
      </div>
      <div className='secondRow'>
        <GraphCard
          title='Sensitive Info By Catagory'
          subTitle='Count of Data Sources'
          graph={
            <DonutGraph
              data={dataTonicJSON.graphs.sensitiveInfoByType}
              colors={colors}
              options={doughnutOptions}
            />
          }
        />
        <GraphCard
          title='Sensitive Info By Type'
          subTitle='Count of Data Sources'
          graph={
            <DonutGraph
              data={dataTonicJSON.graphs.sensitiveInfoByCatagory}
              colors={colors2}
              options={doughnutOptions}
            />
          }
        />
      </div>
    </div>
  )
}
