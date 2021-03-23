import { AnimateSharedLayout } from 'framer-motion'
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }, [])

  return (
    <>
      <Head>
        <title>FacIn Sales</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Portal de vendas FacIN Sales" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </ThemeProvider>
    </>
  )
}

export default App
