import React, { useState } from 'react'
import { GiExpand } from 'react-icons/gi'
import { BsQuestionCircleFill } from 'react-icons/bs'
import { Modal } from './Modal'

export const GraphCard = ({ title, filteredBy, graph, subInfo, classes }) => {
  const [state, setState] = useState({ expand: false })
  const handleClick = () => setState({ expand: !state.expand })
  return (
    <div className={`dashboardCard ${classes}`}>
      <div className='graphCardHeader'>
        <div>
          <div className='cardTitle'>{title}</div>
          <div>{`(${filteredBy})`}</div>
        </div>
        <div className='tooltips'>
          <GiExpand onClick={handleClick} />
          <div className='tooltipDivder'></div>
          <BsQuestionCircleFill />
        </div>
      </div>
      {graph}
      {subInfo && <div className='subInfo'>{subInfo}</div>}
      {state.expand && (
        <Modal>
          <div className='modalCard'>
            <div className='dashboardCard-extend'>
              <div className='graphCardHeader'>
                <div>
                  <h2>{title}</h2>
                  <div>{`(${filteredBy})`}</div>
                </div>
                <div>
                  <GiExpand onClick={handleClick} />
                  <BsQuestionCircleFill />
                </div>
              </div>
              {graph}
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
