import Image from "next/legacy/image";
import Link from "next/link";

export default function Hero() {
  return (
    //   Hero
    <div className=" relative hero-small md:hero">
      <div className="pt-32 lg:pb-16 md:pb-16 h-full flex justify-items-center items-center">
        <div className="container px-3 mx-auto h-full flex flex-wrap flex-col z-30 md:flex-row  ">
          {/* Left Col */}
          <div className="flex flex-col text-yellow-100 w-full md:w-1/3 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">
              Observatório de Aves da Mantiqueira
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Conservação com Ciência
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Gerando dados e engajamento para a conservação das aves da Mata
              Atlântica
            </p>
            <div className="w-full flex flex-col   sm:justify-start sm:flex-row ">
              <Link href="/apoie" legacyBehavior>
                <button className="mx-auto sm:mr-4 sm:ml-0 hover:underline bg-yellow-500 text-gray-900 font-bold rounded-full mt-6 mb-2 sm:my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ">
                  Apoie
                </button>
              </Link>
              <Link href="/newsletter" legacyBehavior>
                <button className="mx-auto sm:mx-0 hover:underline bg-gray-800 text-gray-100 font-bold rounded-full sm:my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ">
                  Assine a Newsletter
                </button>
              </Link>
            </div>
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-3/5 py-6 text-center">
            {/* <img className="w-full md:w-4/5 z-50" src="hero.png" /> */}
          </div>
        </div>
      </div>
      <div className="absolute top-0 h-full w-full">
        <Image
          // className="h-32"
          src="/heros/landing.jpg"
          layout="fill"
          //   width={"2000"}
          //   height={"1000"}
          objectFit="cover"
          objectPosition="center"
          priority={true}
        ></Image>
      </div>
    </div>
  );
}
