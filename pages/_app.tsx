import type { AppProps } from 'next/app'
import { DAppProvider, Config } from '@usedapp/core'
import { Mainnet } from '@usedapp/core'
import '../styles/globals.css'
import Layout from '../components/utils/Layout'

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  },
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <DAppProvider config={config}>
      <Layout>
        <Component {...pageProps} /> 
      </Layout>
    </DAppProvider>
  )
}

export default MyApp
