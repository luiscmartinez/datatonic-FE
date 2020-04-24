import React from 'react'
import { GrClock } from 'react-icons/gr'
import { FaInfoCircle } from 'react-icons/fa'
import { BsBellFill } from 'react-icons/bs'
import { IoMdAlert } from 'react-icons/io'

export const Notification = ({ notification }) => {
  const { title, created_at, info, type } = notification
  const handleType = () => {
    switch (type) {
      case 1:
        return (
          <div style={{ color: 'red' }}>
            <IoMdAlert />
          </div>
        )
        break
      case 2:
        return <BsBellFill />
      default:
        return (
          <div style={{ color: '#5ab6e5' }}>
            <FaInfoCircle />
          </div>
        )
        break
    }
  }
  return (
    <li>
      <div className='icon'>{handleType()}</div>
      <label>
        <div className='notificationTitle'>{title}</div>
        <div className='time'>
          <div className='clock'>
            <GrClock />
          </div>
          {created_at}
        </div>
        <div className='notificationContent'>{info}</div>
      </label>
    </li>
  )
}
