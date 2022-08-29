import React, { useEffect } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { allAssetsAtom } from '../../state/atoms'
import ChartCard from '../../components/chart/ChartCard'

const Prices: NextPage = () => {
  const allAssets = useRecoilValue(allAssetsAtom);

  return (
    <>
      <Head>
        <title>PennyETH  •  Prices</title>
      </Head>
      <div className='bg-black h-screen flex flex-wrap'>
        {
          allAssets.map(item => (
            <div key='' className='basis-1/3'>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Prices