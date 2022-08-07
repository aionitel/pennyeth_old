import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/utils/Layout'
import { MoralisProvider } from 'react-moralis'
import { RecoilRoot } from 'recoil'
import { ToastProvider } from 'react-toast-notifications'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MoralisProvider serverUrl={process.env.NEXT_PUBLIC_DAPP_URL as string} appId={process.env.NEXT_PUBLIC_APP_ID as string}>
      <RecoilRoot>
        <ToastProvider>
          <Layout>
            <Component {...pageProps} /> 
          </Layout>
        </ToastProvider>
      </RecoilRoot>
    </MoralisProvider>
  )
}

export default MyApp
