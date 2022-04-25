import { useRecoilValue } from 'recoil'
import { currUserAtom, currPageAtom } from '../../state/atoms'
import LoggedInHeader from '../user/LoggedInHeader'
import LoggedOutHeader from '../user/LoggedOutHeader'

const Header = () => {
  const currUser = useRecoilValue(currUserAtom) // just to see if user is logged in, wallet address displayed in LoggedIn component
  const currPage = useRecoilValue(currPageAtom) // displaying current page

  return (
    <header className='justify-between bg-black items-center text-white h-20 hidden md:flex border-b border-lightgray'>
      <h1 className='text-4xl ml-10'>{currPage}</h1>
      {currUser ? <LoggedInHeader /> : <LoggedOutHeader />}
    </header>
  )
}

export default Header