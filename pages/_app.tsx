import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps: {
  session,
  ...pageProps
} }: AppProps) {
  return (
    <>
    <Head>
      <link rel="icon" href="/images/netflix.svg" />
      <title>Netflix</title>
    </Head>
    <SessionProvider session={session} >
      <Component {...pageProps} />
    </SessionProvider>
    </>
  )
}

export default MyApp
