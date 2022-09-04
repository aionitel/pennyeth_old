import { NextPage } from 'next'
import Head from 'next/head';
import React from 'react'

const Block: NextPage = ({data}: any) => {
  console.log(data)
  return (
    <div>
      <Head>
      </Head>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: { data: context.params }
  }
}

export default Block;