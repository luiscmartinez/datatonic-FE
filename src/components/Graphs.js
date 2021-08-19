import React from 'react'
import { DonutGraph } from './DonutGraph'
import { GraphCard } from './GraphCard'
import { dataTonicJSON } from 'dataTonic.js'
import { HorizontalBar } from './HorizontalBar'
import {
  colors,
  colors2,
  colors3,
  doughnutOptions,
  handleDataForColorStacks,
  handleData,
} from 'graphHelpers'
import { handleOptions2 } from 'graphHelpers'
import { handleOptions } from 'graphHelpers/dataHelpers'
import { PieChart } from './PieChartLoader'
import { HorizontalBarChartLoader } from './HorizontalBarChartLoader'

export const Graphs = ({isLoading}) => {
  return (
    <>
      <div className='thirdRow'>
        <GraphCard
          title='Sensitive Info By Category'
          filteredBy='Count of Data Sources'
          graph={
            <DonutGraph
              data={dataTonicJSON.graphs.sensitiveInfoByType}
              colors={colors}
              options={doughnutOptions}
            />
          }
          isLoading={isLoading}
          loader={
            <PieChart/>
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
          isLoading={isLoading}
          loader={
            <PieChart/>
          }
        />
        <GraphCard
          title='inspectionCoveragePercentages'
          filteredBy='By Data Sources'
          graph={
            <HorizontalBar
              data={dataTonicJSON.graphs.inspectionCoveragePercentages}
              colors={colors3}
              handleData={handleData}
              options={handleOptions('(Inspection coverage (%))')}
            />
          }
          isLoading={isLoading}
          loader={
            <HorizontalBarChartLoader />
          }
        />
      </div>
      <div className='thirdRow'>
        <GraphCard
          title='countOfSensitiveInfoType'
          filteredBy='By Data Sources'
          graph={
            <HorizontalBar
              data={dataTonicJSON.graphs.countOfSensitiveInfoType}
              colors={colors3}
              handleData={handleData}
              options={handleOptions('(Count of Unique Sensitive Info Types)')}
            />
          }
          isLoading={isLoading}
          loader={
            <HorizontalBarChartLoader />
          }
        />
        <GraphCard
          title='countOfSensitiveInfoCategory'
          filteredBy='By Data Sources'
          graph={
            <HorizontalBar
              data={dataTonicJSON.graphs.countOfSensitiveInfoCategory}
              colors={colors3}
              handleData={handleData}
              options={handleOptions(
                '(Count of Unique Sensitive Info Type Catagories)'
              )}
            />
          }
          isLoading={isLoading}
          loader={
            <HorizontalBarChartLoader />
          }
        />
        <GraphCard
          title='sensitiveDataRecordCount'
          filteredBy='By Data Sources'
          graph={
            <HorizontalBar
              data={dataTonicJSON.graphs.sensitiveDataRecordCount}
              colors={colors3}
              handleData={handleDataForColorStacks}
              options={handleOptions2(
                'Data Sources',
                '(Count - Records/Rows Containing Sensitive Info)'
              )}
              height={220}
            />
          }
          isLoading={isLoading}
          loader={
            <HorizontalBarChartLoader />
          }
        />
      </div>
    </>
  )
}
