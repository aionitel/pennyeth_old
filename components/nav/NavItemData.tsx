import { BiNews } from 'react-icons/bi'
import { RiHandCoinLine as HandIcon } from 'react-icons/ri'
import { MdOutlineMarkunreadMailbox } from 'react-icons/md'
import { IconType } from 'react-icons'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { GiTwoCoins } from 'react-icons/gi' 
import { SiHomeadvisor } from 'react-icons/si'
import { CgSmileMouthOpen } from 'react-icons/cg'

// universal navbar items (assets, about, etc...) to be used for both desktop and mobile navbars, and better modularity

interface NavBarItemsType{
  title: string,
  path: string,
  icon: IconType
}

// data for each clickable item in navbar, need different navName because of actual page names and endpoints: /transfer vs send / receive

const NavBarItemsData: NavBarItemsType[] = [
  {
    title: 'Home',
    path: '/',
    icon: SiHomeadvisor
  },
  {
    title: 'Assets',
    path: '/assets',
    icon: HandIcon
  },
  {
    title: 'Prices',
    path: '/prices',
    icon: AiOutlineAreaChart
  },
  {
    title: 'Transfer',
    path: '/transfer',
    icon: MdOutlineMarkunreadMailbox
  },
  {
    title: 'News',
    path: '/news',
    icon: BiNews
  },
  {
    title: 'NFTs',
    path: '/nft',
    icon: CgSmileMouthOpen
  },
  {
    title: 'About',
    path: '/about',
    icon: GiTwoCoins
  }
]

export default NavBarItemsData