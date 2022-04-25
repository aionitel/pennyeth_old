import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRecoilState } from 'recoil'
import { currPageAtom } from '../../state/atoms'

const Prices = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => setCurrPage('Prices'))

  return (
    <>
      <Head>
        <title>PennyETH  •  Prices</title>
      </Head>
      <div>Prices Page</div>
    </>
  )
}

export default Prices