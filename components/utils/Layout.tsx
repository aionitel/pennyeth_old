import React from 'react'
import MobileNavBar from '../nav/mobile/MobileNavBar'
import NavBar from '../nav/NavBar'
import Header from '../header/Header'
import MobileHeader from '../header/MobileHeader'

const Layout: React.FC = ({ children }: any) => {
  return (
    <div className='flex font-inter'>
      <NavBar />
      <main className='w-screen'>
        <MobileNavBar />
        <MobileHeader />
        <Header />
        {children}
      </main>
    </div>   
  )
}

export default Layout
