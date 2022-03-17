import React from 'react'
import NavBar from '../nav/NavBar'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='flex font-inter'>
      <NavBar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
