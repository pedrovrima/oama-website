import '../styles/index.css'
import Head from 'next/head'
import GoogleTag from '@components/analytics/google-tag'
import PagesRouteTracker from '@components/analytics/pages-route-tracker'
import AnalyticsClickTracker from '@components/analytics/click-tracker'

function MyApp({ Component, pageProps }) {
  return (<>
  <Head>
  <title>OAMa - Observatório de Aves da Mantiqueira</title>
   <link rel="shortcut icon" type="image" href="logo.ico"></link> 
  </Head>
  <GoogleTag />
  <PagesRouteTracker />
  <AnalyticsClickTracker />
  <Component {...pageProps} /></>)
}

export default MyApp
  
