import React, { useEffect } from 'react'
import { currPageAtom } from '../../state/atoms'
import { useRecoilState } from 'recoil'
import Head from 'next/head'

const About = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => setCurrPage('About'))

  return (
    <>
      <Head>
        <title>PennyETH  •  About</title>
      </Head>
      <div>
        About Page
      </div>
    </>
  )
}

export default About