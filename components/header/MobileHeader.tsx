import React from 'react'
import { currPageAtom } from '../../state/atoms'
import { useRecoilValue } from 'recoil'
import { motion } from 'framer-motion'

const MobileHeader = () => {
  const currPage = useRecoilValue(currPageAtom)
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
      >{currPage}</motion.h1>
    </div>    
  )
}

export default MobileHeader