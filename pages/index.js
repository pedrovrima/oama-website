<<<<<<< HEAD
import { useRouter } from "next/router";
import PtIndex from "./locales/pt-BR"
import EnIndex from "./locales/en-US"

export default function Index(){
    const router = useRouter();
    return(<>
        {router.locale==="pt-BR"?<PtIndex></PtIndex>:<EnIndex></EnIndex>}
</>
        
    )
}
=======
import Nav from "../components/nav";
import Image from "next/image";
import Hero from "../components/hero";
import Actions from "../components/actions";
import About from "../components/about";
import Head from 'next/head';


export default function IndexPage() {
  return (
    <>
      <Nav />
      <Hero></Hero>
      <About></About>
      <Actions></Actions>
    </>
  );
}
>>>>>>> form
