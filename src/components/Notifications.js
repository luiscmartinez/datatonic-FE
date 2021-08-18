import React, { useState } from 'react'
import { Notification } from './Notification'
import { NotificationLoader } from './NotificationLoader'

export const Notifications = ({ notifications, isNotificationsLoading }) => {
  const getUnread = () => {
    return notifications.reduce(
      (counter, notification) =>
        notification.unread ? (counter += 1) : counter,
      0
    )
  }

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

  const filterNotifications = () => {
    if (state.active === 'All') {
      return notifications
    }
    return notifications.filter(notification => {
      if (mappingStatues[state.active] === notification.type) {
        return notification
      }
      return false
    })
  }

  return (
    <div className='notifications'>
      <div className='notificationHeader'>
        <div>Notifications</div>
        <div className='unread'>{isNotificationsLoading ? 0 : getUnread()}</div>
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
      <ul>
        {isNotificationsLoading ? (
          <NotificationLoader />
        ) : (
          filterNotifications().map((notification, i) => {
            return <Notification key={i} notification={notification} />
          })
        )}
      </ul>
    </div>
  )
}
