import React, { useState } from 'react'
import { Notification } from './Notification'
export const Notifications = ({ notifications }) => {
  const unread = notifications.reduce(
    (counter, notification) => (notification.unread ? (counter += 1) : counter),
    0
  )
  const [state, setState] = useState({
    active: 'All',
  })

  const handleClassName = (btn, currentlyActive) =>
    btn !== currentlyActive ? 'navbarLink' : 'navbarLink activeNavLink'

  const handleClick = btn => setState({ active: btn })

  const mappingStatues = {
    Critical: 1,
    Warn: 2,
    Info: 3,
  }

  const filteredNotifications = notifications.filter(notification => {
    if (state.active === 'All') {
      return <Notification notification={notification} />
    }
    if (mappingStatues[state.active] === notification.type) {
      return <Notification notification={notification} />
    }
    return
  })
  console.log(filteredNotifications)
  return (
    <div className='notifications'>
      <div className='lol'>
        <div className='notificationHeader'>
          <div>Notifications</div>
          <div className='unread'>{unread}</div>
        </div>
        <div className='tabs'>
          <div
            className={handleClassName('All', state.active)}
            onClick={() => handleClick('All')}
          >
            All
          </div>
          <div
            className={handleClassName('Critical', state.active)}
            onClick={() => handleClick('Critical')}
          >
            Critical
          </div>
          <div
            className={handleClassName('Warn', state.active)}
            onClick={() => handleClick('Warn')}
          >
            Warn
          </div>
          <div
            className={handleClassName('Info', state.active)}
            onClick={() => handleClick('Info')}
          >
            Info
          </div>
        </div>
      </div>
      <ul>
        {filteredNotifications.map(notification => {
          return <Notification notification={notification} />
        })}
      </ul>
    </div>
  )
}
