import React from 'react'
import MobileNavBar from '../nav/MobileNavBar'
import NavBar from '../nav/NavBar'
import Header from './Header'

const Layout: React.FC = ({ children }: any) => {
  return (
    <div className='flex'>
      <NavBar />
      <main className='w-screen'>
        <MobileNavBar />
        <Header />
        {children}
      </main>
    </div>   
  )
}

export default Layout
