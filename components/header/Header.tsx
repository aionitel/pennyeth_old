import { useRecoilValue } from 'recoil'
import { currUserAtom, currPageAtom } from '../../state/atoms'
import LoggedInHeader from './LoggedInHeader'
import ConnectWallet from '../connectWallet/ConnectWallet'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  const currUser = useRecoilValue(currUserAtom) // just to see if user is logged in, wallet address displayed in LoggedIn component
  const currPage = useRecoilValue(currPageAtom) // displaying current page

  return (
    <header className='justify-between bg-black items-center text-white h-20 hidden md:flex border-b border-lightgray'>
      <motion.h1
        className='text-4xl ml-10'
        exit={{ opacity:0 }}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
      >{currPage}</motion.h1>
      {currUser ? <LoggedInHeader /> : <ConnectWallet />}
    </header>
  )
}

export default Header