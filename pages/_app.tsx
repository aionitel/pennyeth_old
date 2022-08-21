import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/utils/Layout'
import { MoralisProvider } from 'react-moralis'
import { RecoilRoot } from 'recoil'
import { ToastProvider } from 'react-toast-notifications'
import NextNProgress from "nextjs-progressbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MoralisProvider serverUrl={process.env.NEXT_PUBLIC_DAPP_URL as string} appId={process.env.NEXT_PUBLIC_APP_ID as string}>
      <RecoilRoot>
        <ToastProvider>
          <Layout>
            <NextNProgress color='#1552F0' />
            <Component {...pageProps} /> 
          </Layout>
        </ToastProvider>
      </RecoilRoot>
    </MoralisProvider>
  )
}

export default MyApp
