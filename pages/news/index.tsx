import { NextPage } from 'next'
import React, { useEffect} from 'react'
import { currPageAtom } from '../../state/atoms'
import { useRecoilState } from 'recoil'
import Head from 'next/head'

const News: NextPage = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => setCurrPage('news'))

  return (
    <>
      <Head>
        <title>PennyETH  •  News</title>
      </Head>
      <div className='bg-black'>
        <h1 className='text-white'>News page</h1>
      </div>
    </>
  )
}

export default News
