import Nav from "@includes/nav";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Footer from "@includes/footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function QuemSomos() {
  return (
    <>
      <div className="pb-32">
        <Head>
          <title>Hospedagem com anilhamento demonstrativo</title>
        </Head>

        <Nav />
        <div className=" relative hero-small md:hero min-h-1/2">
          <div className="pt-32 lg:pb-16 md:pb-16 h-full  justify-items-center items-center">
            <div className="absolute top-0 h-full w-full">
              <Image
                // className="h-32"
                src="/heros/ani_demo.jpg"
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
              Hospedagem com anilhamento demonstrativo{" "}
            </h1>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
          </div>
        </div>
        <div className="container mb-12 max-w-4xl mx-auto ">
          <div className="w-full p-6">
            <h3 className="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              Visite uma estação de pesquisa, conheça o trabalho de ornitólogos
              em campo e apoie a conservação com ciência!{" "}
            </h3>
            <p className="text-gray-600 ">
              O OAMa abre as portas de sua estação de pesquisa para amantes da
              natureza e das aves conhecerem o trabalho de campo em nosso
              monitoramento de longo-prazo da avifauna na Serra da Mantiqueira.
            </p>
            <AniCarousel/>
          </div>
          <div className="w-full p-6">
            <h3 className="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              Quando{" "}
            </h3>
            <p className="text-gray-600 mb-4 ">
              Todo último final de semana do mês, de sexta-feira à domingo.
              Próximos eventos:
              <ul>
                <li className="text-gray-600">17/06/2022 - 19/06/2022</li>
                <li className="text-gray-600">29/07/2022 - 31/07/2022</li>
                <li className="text-gray-600">26/08/2022 - 28/08/2022</li>
              </ul>
            </p>
          </div>
          <div className="w-full p-6">
            <h3 className="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              Onde{" "}
            </h3>
            <p className="text-gray-600 mb-4 ">
              Estação de Pesquisa OAMa na Fazenda Boa Vista, Vale das Flores,
              Bocaina de Minas, MG.{" "}
              <a className="underline text-yellow-600 cursor-pointer">
                <Link href="estacao-de-pesquisa" target="_blank">
                  Para mais informaçãoes, clique aqui
                </Link>
              </a>
              .
            </p>
          </div>
          <EPCarousel />{" "}
          <div className="w-full p-6">
            <h3 className="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              O que inclui{" "}
            </h3>
            <ul className="text-gray-600 mb-4 ">
              <li className="text-gray-600">Duas noites de hospedagem</li>
              <li className="text-gray-600">alimentação completa</li>
              <li className="text-gray-600">
                1 noite de apresentação sobre o OAMa
              </li>
              <li className="text-gray-600">
                {" "}
                1 manhã de visita guiada a uma estação de anilhamento de aves
              </li>
              <li className="text-gray-600">
                {" "}
                1 manhã de passarinhada na RPPN da Fazenda Boa Vista
              </li>
            </ul>
          </div>
          <div className="w-full p-6">
            <h3 className="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              Programação{" "}
            </h3>
            <h4 className="text-xl text-justify-center text-gray-800 font-bold leading-none mb-1">
              Sexta-Feira{" "}
            </h4>
            <ul className="text-gray-600 mb-4 ">
              <li className="text-gray-600">14:00-17:00 - Check-in </li>
              <li className="text-gray-600">
                18:00 - Apresentação sobre o OAMa
              </li>
              <li className="text-gray-600">19:00 - Jantar</li>
            </ul>

            <h4 className="text-xl text-justify-center text-gray-800 font-bold leading-none mb-1">
              Sábado{" "}
            </h4>
            <ul className="text-gray-600 mb-4 ">
              <li className="text-gray-600">
                7:00-10:00 -{" "}
                <strong className="text-gray-800">
                  Café-da-manhã com ciência!
                </strong>{" "}
                O café da manhã será servido na área externa, junto da estação
                de anilhamento BOA1. Nesse longo café da manhã, o visitante
                poderá acompanhar o trabalho de pesquisa da equipe de campo do
                OAMa. Para oferecer o máximo desta experiência, um membro da
                equipe OAMa estará exclusivamente dedicado a acompanhar o grupo
                de visitantes, comunicando sobre o trabalho em ação, as aves
                observadas e o ambiente.
              </li>
              <li className="text-gray-600">10:00-12:00 - Livre</li>
              <li className="text-gray-600">12:00 - Almoço</li>
              <li className="text-gray-600">14:00-19:00 - Livre</li>
              <li className="text-gray-600">19:00 - Jantar</li>
            </ul>

            <h4 className="text-xl text-justify-center text-gray-800 font-bold leading-none mb-1">
              Domingo{" "}
            </h4>
            <ul className="text-gray-600 mb-4 ">
              <li className="text-gray-600">
                6:00-10:00 -{" "}
                <strong className="text-gray-800">Passarinhada!</strong> No dia
                da passarinhada o café da manhã é pra viagem. Cada um prepara
                seu lanche, pois o passeio começa cedo. Um membro da equipe OAMa
                vai guiar o grupo numa passarinhada pelas trilhas da RPPN. Ao
                longo da manhã o grupo terá oportunidades de parar para
                descanso, picnic e até um mergulho na piscina natural.
              </li>
              <li className="text-gray-600">10:00-12:00 - Check-out</li>
            </ul>
          </div>
          <div className="w-full p-6">
            <h3 className="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              Valores{" "}
            </h3>
            <ul className="text-gray-600 mb-4 ">
              <li className="text-gray-600">
                <strong className="text-gray-800">
                  Quarto para uma pessoa:
                </strong>
                R$ 900,00
              </li>
              <li className="text-gray-600">
                <strong className="text-gray-800">
                  Quarto para duas pessoas:
                </strong>
                R$ 1.260,00
              </li>
            </ul>
          </div>
          <p className="w-full p-6 text-gray-600">
            Para agendar sua visita ou saber mais detalhes, escreva para
            contato@oama.eco.br com o assunto "hospedagem - conservação com
            ciência" ou entre em contato pelo <a className="text-yellow-600"><Link href="/whatsapp">WhatsApp</Link></a>
          </p>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

const EPCarousel = (props) => {
  const fotos = [
    {
      pic: "/ani_demo/ep2.jpg",
      legend: "Chegada na EP",
    },
    {
      pic: "/fotos_ep/ep1.jpg",
      legend: "Vista da EP.",
    },
    { pic: "/fotos_ep/aerea.jpeg", legend: "Foto aérea da EP." },
    { pic: "/fotos_ep/frontal.jpg", legend: "Foto frontal da EP." },
    { pic: "/fotos_ep/lateral.jpg", legend: "Vista lateral da EP." },
    { pic: "/fotos_ep/piscina.jpg", legend: "Piscina Natural." },

    { pic: "/fotos_ep/acesso.jpg", legend: "Trilha de acesso à EP." },
    {
      pic: "/fotos_ep/noite.jpg",
      legend: "Vista noturna da EP, com Pedra Selada ao fundo.",
    },
  ];

  return (
    <div className="flex group h-100 justify-center items-center sm:px-8">
      <Carousel
        showArrows={true}
        showStatus
        autoPlay
        swipeable
        emulateTouch
        infiniteLoop
        className="mt-2 bg-gray-700 mb-8 sm:mb-4  h-72 w-full sm:h-96 my-auto"
      >
        {fotos.map((img) => (
          <div className="h-72 w-full sm:h-96  relative">
            <Image
              alt={img.legend}
              layout="fill"
              objectFit="contain"
              src={img.pic}
            ></Image>
            <div className="w-full flex absolute bottom-12 justify-center">
              <p className="w-1/3 opacity-80 sm:opacity-5 text-white bg-gray-700 rounded-md p-2 group-hover:opacity-80 ">
                {img.legend}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};


const AniCarousel = (props) => {
  const fotos = [
    {
      pic: "/ani_demo/an3.jpg",
      legend: "Anilhamento de uma saíra-lagarta",
    },
    {
      pic: "/ani_demo/an1.jpg",
      legend: "Pesquisador analisa plumagem de ave durante anilhamento.",
    },
    { pic: "/ani_demo/an2.jpg", legend: "Asa aberta de uma saíra-lagarta." },
    { pic: "/ani_demo/an4.jpg", legend: "Pesquisadora aplica anilha em um sabiá-de-coleira." },
    { pic: "/ani_demo/an5.jpg", legend: "Pesquisador fazendo extração de ave da rede de neblina - foto Jorge Lucas (Birds Atlantic)." },
    { pic: "/ani_demo/an6.jpg", legend: "Pesquisadora fotografando um trinca-ferro durante o anilhamento - foto Jorge Lucas (Birds Atlantic)." },

    { pic: "/ani_demo/an7.jpg", legend: "Pesquisador liberando tiê-de-coroa após anilhamento - foto Jorge Lucas (Birds Atlantic)." },
    
  ];

  return (
    <div className="flex group h-100 justify-center items-center sm:px-8">
      <Carousel
        showArrows={true}
        showStatus
        autoPlay
        swipeable
        emulateTouch
        infiniteLoop
        className="mt-2 bg-gray-700 mb-8 sm:mb-4  h-72 w-full sm:h-96 my-auto"
      >
        {fotos.map((img) => (
          <div className="h-72 w-full sm:h-96  relative">
            <Image
              alt={img.legend}
              layout="fill"
              objectFit="contain"
              src={img.pic}
            ></Image>
            <div className="w-full flex absolute bottom-12 justify-center">
              <p className="w-1/3 opacity-80 sm:opacity-5 text-white bg-gray-700 rounded-md p-2 group-hover:opacity-80 ">
                {img.legend}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
