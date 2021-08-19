import React from 'react'
import { DonutGraph } from './DonutGraph'
import { GraphCard } from './GraphCard'
import { dataTonicJSON } from 'dataTonic.js'
import {
  colors,
  colors2,
  colors3,
  doughnutOptions,
  handleDataForColorStacks,
  handleData,
} from 'graphHelpers'
import {
  handleHorizontalChartOps,
  HorizontalBar,
  HorizontalBarChartLoader,
} from './horizontalChart'
import { handleOptions } from 'graphHelpers/dataHelpers'
import { PieChart } from './PieChartLoader'

export const Graphs = ({ isLoading }) => {
  return (
    <>
      <div className='thirdRow'>
        <GraphCard
          title='Sensitive Info By Type'
          filteredBy='Count of Data Sources'
          graph={
            <DonutGraph
              data={dataTonicJSON.graphs.sensitiveInfoByType}
              colors={colors}
              options={doughnutOptions}
            />
          }
          isLoading={isLoading}
          loader={<PieChart />}
        />
        <GraphCard
          title='Sensitive Info By Category'
          filteredBy='Count of Data Sources'
          graph={
            <DonutGraph
              data={dataTonicJSON.graphs.sensitiveInfoByCategory}
              colors={colors2}
              options={doughnutOptions}
            />
          }
          isLoading={isLoading}
          loader={<PieChart />}
        />
        <GraphCard
          title='Inspection Coverage'
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
          loader={<HorizontalBarChartLoader />}
        />
      </div>
      <div className='thirdRow'>
        <GraphCard
          title='Count of Sensitive Info Type'
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
          loader={<HorizontalBarChartLoader />}
        />
        <GraphCard
          title='Count of Sensitive Info Category'
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
          loader={<HorizontalBarChartLoader />}
        />
        <GraphCard
          title='Sensitive Data Record Count'
          filteredBy='By Data Sources'
          graph={
            <HorizontalBar
              data={dataTonicJSON.graphs.sensitiveDataRecordCount}
              colors={colors3}
              handleData={handleDataForColorStacks}
              options={handleHorizontalChartOps(
                'Data Sources',
                '(Count - Records/Rows Containing Sensitive Info)'
              )}
              height={220}
            />
          }
          isLoading={isLoading}
          loader={<HorizontalBarChartLoader />}
        />
      </div>
    </>
  )
}
