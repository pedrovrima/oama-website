import Head from "next/head";
import Header from "@includes/header";
import Footer from "@includes/footer";
import Nav from "@includes/nav";
export default function DefaultLayout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Nav />
      {props.children}
      <Footer />
    </main>
  );
}
