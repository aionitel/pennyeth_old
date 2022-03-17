import React from 'react'
import NavBar from '../nav/NavBar'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='flex'>
      <NavBar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
