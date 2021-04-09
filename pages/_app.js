import '../styles/index.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (<>
  <Head>
  <title>OAMa - Observatório de Aves da Mantiqueira</title>

  </Head>
  <Component {...pageProps} /></>)
}

export default MyApp
  