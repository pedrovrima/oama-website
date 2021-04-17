import Nav from "../../components/nav";
import { useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Image from "next/image";

export default function QuemSomos() {
  return (
    <div className="pb-32">
      <Nav />
      <div className=" relative hero-small md:hero min-h-1/2">
        <div className="pt-32 lg:pb-16 md:pb-16 h-full  justify-items-center items-center">
          <div className="absolute top-0 h-full w-full">
            <Image
              // className="h-32"
              src="/_FR_7083.jpg"
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
          Quem Somos{" "}
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="container max-w-4xl mx-auto ">
          <p class="text-gray-600 px-8 md:px-0 mb-2">
            O OAMa é movido por uma pequena equipe de trabalho e uma grande rede
            de apoio.
          </p>

          <p className="text-2xl">Equipe</p>
          <p>
            {" "}
            Nossa equipe de trabalho, que coordena e executa as atividades
            continuamente
          </p>

          <div class="flex md:flex-row-reverse mb-8  justify-around items-center   flex-wrap">
            <div class="w-3/5  sm:w-1/4 p-2 sm:p-6">
              <div>
                <Image
                  className="rounded-full border-gray-200 border-8"
                  src="/AffonsoSouza.jpeg"
                  layout="responsive"
                  width={50}
                  objectFit="cover"
                  height={50}
                ></Image>
              </div>
            </div>

            <div class="w-full sm:w-2/3 p-6">
              <h3 class="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-1">
                Affonso Souza{" "}
              </h3>
              <h4 class="text-xl text-justify-center text-gray-800 font-bold leading-none mb-3">
                Coordenador de monitoramento e pesquisa{" "}
              </h4>

              <p class="text-gray-600 ">
                Biólogo com mestrado em ecologia. Trabalha com aves desde 2012,
                com especial interesse em manejo de fauna e ecologia aplicada.
              </p>
              <a
                className="underline"
                target="_blank"
                href="http://lattes.cnpq.br/6486611783204721"
              >
                Lattes
              </a>
              <a
                className="underline ml-1"
                target="_blank"
                href="mailto:asouza@oama.eco.br
"
              >
                E-mail
              </a>
            </div>
          </div>


          <div class="flex md:flex-row mb-8 justify-center items-center   flex-wrap">
          <div class="w-3/5  sm:w-1/4 p-2 sm:p-6">
            <div>
              <Image
                className="rounded-full"
                layout="responsive"
                src="/Mantiqueira.jpg"
                width={200}
                objectFit="cover"
                height={200}
              ></Image>
            </div>
          </div>

          <div class="w-full sm:w-2/3 p-6">
              <h3 class="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-1">
                Luiza Figueira{" "}
              </h3>
              <h4 class="text-xl text-justify-center text-gray-800 font-bold leading-none mb-3">
                Coordenadora Geral{" "}
              </h4>

            <p class="text-gray-600 mb-8">
            Bióloga com mestrado em ecologia, trabalha com aves desde 2012 e tem maior interesse em biologia da conservação e restauração ecológica.
            </p>
            <a
                className="underline"
                target="_blank"
                href="http://lattes.cnpq.br/6486611783204721"
              >
                Lattes
              </a>
              <a
                className="underline ml-1"
                target="_blank"
                href="mailto:asouza@oama.eco.br
"
              >
                E-mail
              </a>
          </div>
        </div>


          <div class="flex md:flex-row-reverse mb-8  justify-around items-center   flex-wrap">
            <div class="w-3/5  sm:w-1/4 p-2 sm:p-6">
              <div>
                <Image
                  className="rounded-full border-gray-200 border-8"
                  src="/PedroMartins.jpg"
                  layout="responsive"
                  width={50}
                  objectFit="cover"
                  height={50}
                ></Image>
              </div>
            </div>

            <div class="w-full sm:w-2/3 p-6">
              <h3 class="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-1">
                Pedro Martins{" "}
              </h3>
              <h4 class="text-xl text-justify-center text-gray-800 font-bold leading-none mb-3">
                Coordenador de dados{" "}
              </h4>

              <p class="text-gray-600 ">
                Biólogo com mestrado em ecologia e programador. Trabalha com
                aves desde 2010 e tem maior interesse na coleta, manejo e
                análise de dados ornitológicos.
              </p>
              <a
                className="underline"
                target="_blank"
                href="http://lattes.cnpq.br/1082589394374306
"
              >
                Lattes
              </a>
              <a
                className="underline ml-1"
                target="_blank"
                href="mailto:pmartins@oama.eco.br

"
              >
                E-mail
              </a>
            </div>
          </div>

          <p class="text-gray-600 px-8 md:px-0 mb-2">
            {" "}
            Toda doação feita para o OAMa é direcionada para a realização de
            nossos projetos de pesquisa e de educação. Tornando-se um filiado ou
            fazendo uma doação para o OAMa você está apoiando a conservação de
            aves e habitats brasileiros com base em pesquisas científicas. Sua
            participação será extremamente apreciada pelo OAMa, e nós nos
            comprometemos em transformar a sua colaboração em pesquisa,
            conhecimento e conservação!
          </p>

          <p class="text-gray-600 px-8 md:px-0 mb-8">
            {" "}
            As doações são processadas pelo PayPal. Utilize o botão abaixo para
            abrir a plataforma de doação. Caso queira se tornar um{" "}
            <strong>filiado</strong>, marque a opção{" "}
            <strong>"Fazer desta uma doação mensal"</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
