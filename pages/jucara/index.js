import Nav from "@includes/nav";
import { useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Image from "next/image";
import Head from "next/head";
export default function Apoie() {
  return (
    <div className="pb-32">
      <Head>
        <title>Juçara - Conservação e Consumo</title>
      </Head>

      <Nav />
      <div className=" relative hero-small md:hero min-h-1/2">
        <div className="pt-32 lg:pb-16 md:pb-16 h-full  justify-items-center items-center">
          <div className="absolute top-0 h-full w-full">
            <Image
              // className="h-32"
              src="/heros/apoie.jpg"
              layout="fill"
              //   width={"2000"}
              //   height={"1000"}
              objectFit="cover"
              objectPosition="center"
              priority={true}
            ></Image>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FtL8dOPeu6U" title="YouTube video player" frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
}
