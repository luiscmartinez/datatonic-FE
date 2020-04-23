import React, { useState } from 'react'
import { GiExpand } from 'react-icons/gi'
import { BsQuestionCircleFill } from 'react-icons/bs'
import { Modal } from './Modal'
export const GraphCard = ({ title, subTitle, graph }) => {
  const [state, setState] = useState({ expand: false })
  const handleClick = () => setState({ expand: !state.expand })
  return (
    <div className='dashboardCard'>
      <div className='graphCardHeader'>
        <div>
          <h2>{title}</h2>
          <div>{`(${subTitle})`}</div>
        </div>
        <div>
          <GiExpand onClick={handleClick} />
          <BsQuestionCircleFill />
        </div>
      </div>
      {graph}
      {state.expand && (
        <Modal>
          <div className='modalCard'>
            <div className='dashboardCard'>
              <div className='graphCardHeader'>
                <div>
                  <h2>{title}</h2>
                  <div>{`(${subTitle})`}</div>
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
