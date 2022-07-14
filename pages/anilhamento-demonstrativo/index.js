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
          <div className="mb-12">
            <h1 className="w-full text-5xl font-bold leading-tight text-center text-gray-800">
              Anilhamento demonstrativo{" "}
            </h1>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
          </div>
        </div>
        <div className="container mb-12 max-w-4xl mx-auto ">
          <div className="w-full p-6">
            <h3 className="text-2xl text-justify-center text-gray-700 font-bold leading-none mb-12">
              Você tem curiosidade de ver como é o trabalho dos biólogos que
              estudam as aves? Ou o interesse de acompanhá-los na floresta
              durante seu trabalho de campo? O anilhamento demonstrativo de aves
              do OAMa é uma oportunidade única de viver a natureza e ver as aves
              com um olhar científico!
            </h3>
            <p className="text-gray-600 mb-4 ">
              Abrimos as portas da Estação de Pesquisa para uma manhã de campo
              com o anilhamento demonstrativo e muita conversa sobre aves,
              ciência e conservação. Nessa experiência você tem a chance de ver
              de perto e fotografar algumas das mais de 100 espécies que
              estudamos, e se encantar com a soltura dos animais após a coleta
              de dados para estudo e monitoramento da avifauna local. E ainda
              tem o prazer de acompanhar tudo isso ao longo de um café da manhã
              bem da roça e ao ar livre.{" "}
            </p>
            <AniCarousel className="mb-4" />
          </div>
          <p className="text-gray-600 mb-4">
            O anilhamento de aves é uma técnica de marcação desses animais pela
            aplicação de anilhas de alumínio em suas patas. Cada uma possui um
            código único, o que nos permite recapturar e acompanhar a mesma ave
            por muitos anos. Assim, podemos conhecer mais sobre as espécies,
            seus habitats e contribuir para sua conservação! Os anilhamentos
            demonstrativos são momentos únicos de nosso monitoramento, nos quais
            nos dedicamos a aproximar as pessoas da pesquisa científica através
            da experiência em campo. Visamos proporcionar um contato mais
            próximo com a beleza, delicadeza e importância das aves da Mata
            Atlântica.
          </p>
          <div className="w-full p-6">
            <h3 className="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              Quando{" "}
            </h3>
            <p className="text-gray-600 mb-4 ">
              Todo último sábado do mês, de sexta-feira à domingo. Próximos
              eventos:
              <ul>
                <li className="text-gray-600">27/08/2022</li>
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
            <h3 className="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-8">
              Pacotes{" "}
            </h3>

            <div className="mb-12">
              <h4 className="text-xl text-justify-center text-gray-800 font-bold leading-none mb-3">
                Café da manhã com as aves
              </h4>

              <ul className="text-gray-600 mb-2 ">
                <li className="text-gray-600">
                  Café da manhã ao ar livre durante toda manhã
                </li>
                <li className="text-gray-600">
                  Acompanhamento do anilhamento demonstrativo
                </li>
                <li className="text-gray-600">
                  Uso recreativo das trilhas e espaços da reserva
                </li>
              </ul>
              <p>
                <span className="font-bold">Quando?</span> Aos sábados (veja
                datas acima) das 7:00 às 11:00
              </p>
              <p>
                <span className="font-bold">Quanto?</span> R$ 50,00 por adulto e
                R$ 25,00 por criança/adolescente
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-xl text-justify-center text-gray-800 font-bold leading-none mb-3">
                Hospedagem com ciência
              </h4>

              <ul className="text-gray-600 mb-4 ">
                <li>Inclui duas diárias e alimentação completa</li>
                <li>Palestra de apresentação do OAMa</li>
                <li className="text-gray-600">
                  Passarinhada pelas trilhas da reserva{" "}
                </li>
                <li className="text-gray-600">
                  Acompanhamento do anilhamento demonstrativo
                </li>
                <li className="text-gray-600">
                  Uso recreativo das trilhas e espaços da reserva
                </li>
              </ul>
              <p>
                <span className="font-bold">Quando?</span> De sexta-feita (14h)
                a domingo (10h) - veja datas acima
              </p>
              <p>
                <span className="font-bold">Quanto?</span> R$ 900,00 o quarto
                individual e R$ 1260 quarto para duas pessoas
              </p>
            </div>
          </div>
          <div className="w-full p-6">
            <p className="mb-4 text-gray-600">
              {" "}
             O <strong className="text-gray-800">
                Café-da-manhã com ciência
              </strong>{" "}
              será servido na área externa, junto da estação de
              anilhamento BOA1. Nesse longo café da manhã, o visitante poderá
              acompanhar o trabalho de pesquisa da equipe de campo do OAMa. Para
              oferecer o máximo desta experiência, um membro da equipe OAMa
              estará exclusivamente dedicado a acompanhar o grupo de visitantes,
              comunicando sobre o trabalho em ação, as aves observadas e o
              ambiente.
            </p>
            <p className="text-gray-600">
              No dia da <strong className="text-gray-800">Passarinhada</strong> o café da manhã é pra viagem. Cada um prepara seu
              lanche, pois o passeio começa cedo. Um membro da equipe OAMa vai
              guiar o grupo numa passarinhada pelas trilhas da RPPN. Ao longo da
              manhã o grupo terá oportunidades de parar para descanso, picnic e
              até um mergulho na piscina natural.
            </p>
          </div>
          <p className="w-full p-6 text-gray-600">
            Agende sua visita preenchendo <a className="text-yellow-600" href="https://docs.google.com/forms/d/e/1FAIpQLScjoSjHExbUrShU2K21bgnahhyKUJ5RhX4NrfP4QzFjDeBxhA/viewform" target="_blank">este formulário</a>. Qualque dúvida, escreva para
            contato@oama.eco.br ou entre em contato pelo{" "}
            <a className="text-yellow-600">
              <Link href="/whatsapp">WhatsApp</Link>.
            </a>
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
    {
      pic: "/ani_demo/an4.jpg",
      legend: "Pesquisadora aplica anilha em um sabiá-de-coleira.",
    },
    {
      pic: "/ani_demo/an5.jpg",
      legend:
        "Pesquisador fazendo extração de ave da rede de neblina - foto Jorge Lucas (Birds Atlantic).",
    },
    {
      pic: "/ani_demo/an6.jpg",
      legend:
        "Pesquisadora fotografando um trinca-ferro durante o anilhamento - foto Jorge Lucas (Birds Atlantic).",
    },

    {
      pic: "/ani_demo/an7.jpg",
      legend:
        "Pesquisador liberando tiê-de-coroa após anilhamento - foto Jorge Lucas (Birds Atlantic).",
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
