import React from 'react'
import { useRecoilValue } from 'recoil'
import { motion } from 'framer-motion'

const MobileHeader = () => {
  return (
    <div
      className='
        md:hidden
        flex-row
        bg-black
        text-white
        top-0
        w-screen
        h-20
        justify-center
      '
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >{location.pathname}</motion.h1>
    </div>    
  )
}

export default MobileHeader