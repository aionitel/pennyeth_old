import { NextPage } from 'next'
import React, { useEffect} from 'react'
import { currPageAtom } from '../../state/atoms'
import { useRecoilState } from 'recoil'

const News: NextPage = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => setCurrPage('News'), [])

  return (
    <div className='h-screen bg-black'>
      <h1 className='text-white'>News page</h1>
    </div>
  )
}

export default News
