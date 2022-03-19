import { NextPage } from 'next'
import React, { useEffect} from 'react'
import { currPageAtom } from '../../state/atoms'
import { useRecoilState } from 'recoil'

const News: NextPage = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => setCurrPage('News'), [])

  return (
    <div className='h-screen'>
      news page
    </div>
  )
}

export default News
