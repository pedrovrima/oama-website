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
