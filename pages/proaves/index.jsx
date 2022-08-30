import Image from "next/image";
import Head from "next/head";


import Footer from "@includes/footer";
import Nav from "@includes/nav"

import Intro from "../../components/pro-aves/intro"


export default function ProAves() {
    return (
        <>
            <div className="pb-32">
                <Head>
                    <title>Ações Pró-Aves</title>
                </Head>

                <Nav />
                <div className=" relative hero-small md:hero min-h-1/2">
                    <div className="pt-32 lg:pb-16 md:pb-16 h-full  justify-items-center items-center">
                        <div className="absolute top-0 h-full w-full">
                            <Image
                                // className="h-32"
                                src="/heros/quem_somos.jpg"
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

                <div className="mt-16">
                    <div className="mb-24">
                        <h1 className="w-full text-5xl font-bold leading-tight text-center text-gray-800">
                           Ações Pró-Aves{" "}
                        </h1>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                    </div>
                </div>
                <div className="container max-w-4xl mx-auto mb-12">
                <Intro></Intro>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}