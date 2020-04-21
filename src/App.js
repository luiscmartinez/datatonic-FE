import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Navbar, Dashboard, NoMatch } from 'components'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='routerContainer'>
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  )
}

export default App
