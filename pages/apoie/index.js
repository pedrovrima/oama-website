import Nav from "@includes/nav";
import { useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Image from "next/image";
import Head from "next/head";
import Footer from "@includes/footer";

export default function Apoie() {
  return (
    <>
      <div className="pb-32">
        <Head>
          <title>Apoie</title>
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

        <div className="mt-16">
          <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
            Apoie{" "}
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div class="container max-w-4xl mx-auto ">
            <p class="text-gray-600 px-8 md:px-0 mb-2">
              O Observatório de Aves da Mantiqueira (OAMa) é uma iniciativa sem
              fins lucrativos e independente, que só é viável graças à energia,
              dedicação e colaboração de pessoas que acreditam que, juntos,
              podemos fazer a diferença na Mata Atlântica.
            </p>
            <p class="text-gray-600 px-8 md:px-0 mb-2">
              {" "}
              Toda doação feita para o OAMa é direcionada para a realização de
              nossos projetos de pesquisa e de educação. Tornando-se um filiado
              ou fazendo uma doação para o OAMa, você apoia a conservação de
              aves e habitats brasileiros com base em pesquisas científicas. Sua
              participação será extremamente apreciada pelo OAMa, e nós nos
              comprometemos em transformar a sua colaboração em pesquisa,
              conhecimento e conservação!
            </p>

            <p className="text-gray-600 px-8 md:px-0 mb-8">
              {" "}
              Para compor nossa rede de colaboração, acesse a{" "}
              <a
                className="text-yellow-400 font-bold"
                target="_blank"
                href="https://www.catarse.me/filiadosoama"
              >
                Campanha de Filiação no Catarse
              </a>{" "}
              e escolha a categoria que mais se encaixa com você. Temos
              diferentes <strong>opções de contribuição e recompensas</strong>
              elaboradas com todo carinho e dedicação.
            </p>

            <p className="text-gray-600 px-8 md:px-0 mb-8">
              Doações avulsas podem ser feitas pelo{" "}
              <a
                className="text-yellow-400 font-bold"
                target="_blank"
                href="https://www.paypal.com/donate?token=l86wJN0mbBBDMB6thbmpbdZjQrzSzgOafhXX9CK5jDGpBRy9ChezEm3y99DuXoDx0657XKpmibie7fc9"
              >
                PayPal
              </a>{" "}
              ou por{" "}
              <strong>
                transferência/ depósito diretamente em nossa conta no Banco do
                Brasil
              </strong>
              . Também oferecemos a comodidade de se tornar um filiado pela
              opção "Fazer desta uma doação mensal" no PayPal ou por depósitos
              mensais em nossa conta no Banco do Brasil.
            </p>

            <p className="text-gray-600 px-8 md:px-0 mb-8">
              Doações por depósito na Conta Corrente: <br />
              <strong>Banco do Brasil</strong> - 001 <br />
              <strong>Agência</strong> 0131-7 <br />
              <strong>Conta corrente</strong> 81487-3 <br />
              <strong>CNPJ</strong> 35.713.512/0001-80 <br />
            </p>

     
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
