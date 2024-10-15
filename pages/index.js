import Nav from '@includes/nav';
import Image from "next/legacy/image";
import Hero from '../components/hero';
import Actions from '../components/actions';
import About from '../components/about';
import Head from 'next/head';
import Footer from '@includes/footer';
import { FPCarousel } from 'components/fp-carousel';

export default function IndexPage() {
  return (
    <>
      <Nav />
      <Hero></Hero>
      <About></About>
      <div className='container max-w-4xl mx-auto mb-12 '>
        <FPCarousel></FPCarousel>
      </div>
      <Actions></Actions>
      <Footer></Footer>
    </>
  );
}
