import { currPageAtom } from '../../state/atoms'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

const NFT = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom) 

  useEffect(() => setCurrPage('NFTs'))

  return (
    <div>NFT Page</div>
  )
}

export default NFT