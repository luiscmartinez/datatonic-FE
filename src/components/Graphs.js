import React from 'react'
import { DonutGraph } from './DonutGraph'
import { GraphCard } from './GraphCard'
import { dataTonicJSON } from 'dataTonic.js'
import { Notifications } from './Notifications'
import { BaselineMetrics } from './BaselineMetrics'
import { BarGraph } from './BarGraph'
import { HorizontalBar } from './HorizontalBar'
import {
  colors,
  colors2,
  colors3,
  doughnutOptions,
  handleDataForColorStacks,
  handleData,
} from 'graphHelpers'

export const Graphs = () => {
  return (
    <>
      <div className='thirdRow'>
        <GraphCard
          title='Sensitive Info By Catagory'
          filteredBy='Count of Data Sources'
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
          filteredBy='Count of Data Sources'
          graph={
            <DonutGraph
              data={dataTonicJSON.graphs.sensitiveInfoByCatagory}
              colors={colors2}
              options={doughnutOptions}
            />
          }
        />
        <GraphCard
          title='inspectionCoveragePercentages'
          filteredBy='By Data Sources'
          subInfo='( Inspection coverage (%))'
          graph={
            <HorizontalBar
              data={dataTonicJSON.graphs.inspectionCoveragePercentages}
              colors={colors3}
              handleData={handleData}
              options={{
                legend: {
                  display: false,
                },
              }}
            />
          }
        />
      </div>
      <div className='thirdRow'>
        <GraphCard
          title='countOfSensitiveInfoType'
          filteredBy='By Data Sources'
          subInfo='(Count of Unique Sensitive Info Types)'
          graph={
            <HorizontalBar
              data={dataTonicJSON.graphs.countOfSensitiveInfoType}
              colors={colors3}
              handleData={handleData}
              options={{
                legend: {
                  display: false,
                },
              }}
            />
          }
        />
        <GraphCard
          title='countOfSensitiveInfoCategory'
          filteredBy='By Data Sources'
          subInfo='(Count of Unique Sensitive Info Type Catagories)'
          graph={
            <HorizontalBar
              data={dataTonicJSON.graphs.countOfSensitiveInfoCategory}
              colors={colors3}
              handleData={handleData}
              options={{
                legend: {
                  display: false,
                },
              }}
            />
          }
        />
        <GraphCard
          title='sensitiveDataRecordCount'
          filteredBy='By Data Sources'
          subInfo='(Count - Records/Rows Containing Sensitve Info)'
          graph={
            <HorizontalBar
              data={dataTonicJSON.graphs.sensitiveDataRecordCount}
              colors={colors3}
              handleData={handleDataForColorStacks}
              options={{
                legend: {
                  display: false,
                },
              }}
            />
          }
        />
      </div>
    </>
  )
}
