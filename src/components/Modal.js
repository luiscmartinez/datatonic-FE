import React from 'react'
import ReactDOM from 'react-dom'
import { usePortal } from 'hooks'

export const Modal = ({ children }) => {
  const destination = usePortal()
  return ReactDOM.createPortal(
    <div className='virtualPortal'>{children}</div>,
    destination
  )
}
