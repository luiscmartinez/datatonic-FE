import React, { useState, useRef } from 'react'
import { GiExpand } from 'react-icons/gi'
import { BsQuestionCircleFill } from 'react-icons/bs'
import useOnClickOutside from 'use-onclickoutside'
import ReactTooltip from 'react-tooltip'

import { Modal } from './Modal'

export const GraphCard = ({ title, filteredBy, graph, subInfo, classes, isLoading, loader }) => {
  const [state, setState] = useState({ expand: false })
  const handleClick = () => setState({ expand: !state.expand })
  const modalRef = useRef(null)
  useOnClickOutside(modalRef, e => {
    if (e.target.classList[0] === 'modalCard') return
    handleClick()
  })
  if (isLoading) {
    return (
      <div className={`dashboardCard ${classes}`}>
        {loader}
      </div>
    )
  }
  return (
    <div className={`dashboardCard ${classes}`}>
      <div className='graphCardHeader'>
        <div>
          <div className='cardTitle'>{title}</div>
          {filteredBy && (
            <div>{`(${filteredBy})`}</div>
          )}
        </div>
        <div className='tooltips'>
          <GiExpand onClick={handleClick} />
          <div className='tooltipDivder'></div>
          <BsQuestionCircleFill data-tip='questionIcon' />
          <ReactTooltip data-tip='questionIcon'>
            <div>boudin prosciutto ham hock bacon ipsum </div>
          </ReactTooltip>
        </div>
      </div>
      {graph}
      {subInfo && <div className='subInfo'>{subInfo}</div>}
      {state.expand && (
        <Modal>
          <div className='modalCard'>
            <div className='dashboardCard-extend' ref={modalRef}>
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
