import '../styles/index.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (<>
  <Head>
  <title>Deu certo????</title>
   <link rel="shortcut icon" type="image" href="logo.ico"></link> 
  </Head>
  <Component {...pageProps} /></>)
}

export default MyApp
  