import React from 'react'
import { currPageAtom } from '../../state/atoms'
import { useRecoilValue } from 'recoil'
import { motion } from 'framer-motion'

const MobileHeader = () => {
  const currPage = useRecoilValue(currPageAtom)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='
        md:hidden
        flex-row
        bg-black
        text-white
        top-0
        w-screen
        h-20
        border-b
        border-blue
        justify-center
      '
    >
      <h1>{currPage}</h1>
    </motion.div>    
  )
}

export default MobileHeader