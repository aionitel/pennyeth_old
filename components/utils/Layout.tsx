import React from 'react'
import NavBar from '../nav/NavBar'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='flex font-inter'>
      <NavBar />
      <main>
        <Header />
        {children}
      </main>
    </div>
  )
}

export default Layout
