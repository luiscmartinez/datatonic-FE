import React from 'react'
import { NavLink } from 'react-router-dom'
import { DataTonicLogoSvg, UpsideDownTriangleSvg } from 'svgs'

export const Navbar = () => {
  return (
    <div className='navWrapper'>
      <nav className='navbar'>
        <div className='leftNav'>
          <NavLink to='dashboard' className='companyLogo'>
            <DataTonicLogoSvg />
          </NavLink>
          <NavLink
            to='dashboard'
            className='navbarLink'
            activeClassName='activeNavLink'
          >
            Dashboard
          </NavLink>
          <NavLink
            to='sources'
            className='navbarLink'
            activeClassName='activeNavLink'
          >
            Sources
          </NavLink>
          <NavLink
            to='inspector'
            className='navbarLink'
            activeClassName='activeNavLink'
          >
            Inspector
          </NavLink>
          <NavLink
            to='ingestions'
            className='navbarLink'
            activeClassName='activeNavLink'
          >
            Ingestions
          </NavLink>
        </div>
        <div className='avatarDropDown'>
          <span>User007</span>
          <UpsideDownTriangleSvg />
        </div>
      </nav>
    </div>
  )
}
