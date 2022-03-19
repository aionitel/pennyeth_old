import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/utils/Layout'
import { MoralisProvider } from 'react-moralis'
import { RecoilRoot } from 'recoil'

const serverUrl = process.env.SERVER_URL as string
const appId = process.env.APP_ID as string

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MoralisProvider serverUrl='https://uub9lwbbgued.usemoralis.com:2053/server' appId='KJIRkUopo2HKK65pCzrRWTKHNCz5ZEyRU6jgKF1U'>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} /> 
        </Layout>
      </RecoilRoot>
    </MoralisProvider>
  )
}

export default MyApp
