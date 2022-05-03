import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/utils/Layout'
import { MoralisProvider } from 'react-moralis'
import { RecoilRoot } from 'recoil'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MoralisProvider serverUrl={'https://unc22vmhpl7v.usemoralis.com:2053/server'} appId={'GWzlHLipAWp0w87Vm0hMCjEv98UOlrMTbn6gkTUC'}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} /> 
        </Layout>
      </RecoilRoot>
    </MoralisProvider>
  )
}

export default MyApp
