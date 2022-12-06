import Nav from "@includes/nav";
import Image from "next/image";
import Hero from "../components/hero";
import Actions from "../components/actions";
import About from "../components/about";
import Head from "next/head";
import Footer from "@includes/footer";
import { EPCarousel } from "components/fp-carousel";

export default function IndexPage() {
  return (
    <>
      <Nav />
      <Hero></Hero>
      <About></About>
      <EPCarousel></EPCarousel>
      <Actions></Actions>
      <Footer></Footer>
    </>
  );
}
