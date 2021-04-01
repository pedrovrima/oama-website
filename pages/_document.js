import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    return (
      <Html>
        
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
          {/* <script src="https://www.paypal.com/sdk/js?client-id=Ab2lPDlKKAMdeKZpmz1wFW2_HYyjuhm1rzPjz3nAleWM4PaAEu5U6TNKwBzMee9NJzJHCpq1qA1hr0rx&currency=BRL" /> */}

        </Head>
        <body className="bg-white" style={{fontFamily: 'Source Sans Pro, sans-serif'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument