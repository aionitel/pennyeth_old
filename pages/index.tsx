import { NextPage } from 'next'
import React from 'react'
import { currPageAtom } from '../state/atoms'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => setCurrPage('Home'))

  return (
    <div>Home</div>
  )
}

export default Home