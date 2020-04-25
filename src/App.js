import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Navbar, Dashboard, NoMatch, InvisibleFooter } from 'components'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='routerContainer'>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/dashboard' />
          </Route>
          <Route path='/dashboard' component={Dashboard} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      <InvisibleFooter />
    </div>
  )
}

export default App
