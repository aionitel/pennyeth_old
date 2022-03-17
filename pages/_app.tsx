import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/utils/Layout'
import { MoralisProvider } from 'react-moralis'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MoralisProvider serverUrl={process.env.SERVER_URL as string} appId={process.env.APP_ID as string}>
      <Layout>
        <Component {...pageProps} /> 
      </Layout>
    </MoralisProvider>
  )
}

export default MyApp
