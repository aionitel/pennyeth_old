import { NextPage } from "next";
import Head from "next/head";
import Result from "../../components/explorer/Result";
import fetchAddr from "../../data/explorer/fetchAddr";
import fetchBlock from "../../data/explorer/fetchBlock";
import fetchTx from "../../data/explorer/fetchTx";

const Query: NextPage = ({ data }: any) => {
  return (
    <div className='text-white'>
      <Head>
        <title>PennyETH • Results</title>
      </Head>
      <div>
        {
          data.map(item => (
            <div key=''>
              <Result data={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const btc_block = await fetchBlock("btc", context.params.query).catch(e => { return "Error" })
  const eth_block = await fetchBlock("eth", context.params.query).catch(e => { return "Error" })

  const btc_address = await fetchAddr("btc", context.params.query).catch(e => { return "Error" })
  const eth_address = await fetchAddr("eth", context.params.query).catch(e => { return "Error" })

  const btc_tx = await fetchTx("btc", context.params.query).catch(e => { return "Error" })
  const eth_tx = await fetchTx("eth", context.params.query).catch(e => { return "Error" })

  const unfiltered = [
    btc_block,
    eth_block,
    btc_address,
    eth_address,
    btc_tx,
    eth_tx 
  ]

  const data = unfiltered.filter(item => item !== 'Error')

  return {
    props: {
      data
    }
  }
}

export default Query;