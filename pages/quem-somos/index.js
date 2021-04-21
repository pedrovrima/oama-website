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
              src="/quem_somow2.png"
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
          <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
            Quem Somos{" "}
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div class="container text-center text-2xl max-w-4xl mx-auto mb-12">
            <p class="text-gray-800 px-8 md:px-0 ">
              O OAMa é movido por uma pequena equipe de trabalho e uma grande
              rede de apoio.
            </p>
          </div>
        </div>
        <div class="container mb-12 max-w-4xl mx-auto ">
          <div className="mb-24">
            <p className="text-4xl text-center font-bold text-gray-800">
              Equipe
            </p>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <p class="text-gray-600 px-8 text-center md:px-0 mb-2 text-xl">
              {" "}
              Nossa equipe de trabalho, que coordena e executa as atividades
              continuamente
            </p>

            <div class="flex md:flex-row-reverse mb-8  justify-around items-center   flex-wrap">
              <div class="w-3/5  sm:w-1/4 p-2 sm:p-6">
                <div>
                  <Image
                    className="rounded-full border-gray-200 border-8"
                    src="/AffonsoSouza2.png"
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
                  Biólogo com mestrado em ecologia. Trabalha com aves desde
                  2012, com especial interesse em manejo de fauna e ecologia
                  aplicada.
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

            <div class="flex md:flex-row mb-1 justify-center items-center   flex-wrap">
              <div class="w-3/5  sm:w-1/4 p-2 sm:p-6">
                <div>
                  <Image
                    className="rounded-full"
                    layout="responsive"
                    src="/LuizaFigueira.jpg"
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
                  Coordenadora geral{" "}
                </h4>

                <p class="text-gray-600">
                  Bióloga com mestrado em ecologia, trabalha com aves desde 2012
                  e tem maior interesse em biologia da conservação e restauração
                  ecológica.
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
                    src="/PedroMartins2.png"
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
          </div>
          <div class="container  max-w-4xl mx-auto mb-24 ">
            <p className="text-4xl text-center font-bold text-gray-800">
              Colaboradores
            </p>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <p class="text-gray-600 px-8 md:px-0 mb-8  text-xl">
              {" "}
              Nossos membros colaboradores, que contribuem com suas
              especialidades voluntariamente quando precisamos.
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3">
              <CollaboratorCard
                name="Dirlene Martins"
                postion="Revisora do texto em português"
                image="/DirleneRibeiro.jpg"
                site="https://alemdasletrasdrm.wordpress.com"
              ></CollaboratorCard>
              <CollaboratorCard
                name="Ellen Campbell"
                postion="Revisora do texto em inglês"
                image="/Ellen.jpeg"
              ></CollaboratorCard>
              <CollaboratorCard
                name="Renata Miwa"
                postion="Designer"
                image="/RenataMiwa.jpg"
              ></CollaboratorCard>
            </div>
          </div>
          <div class="container  max-w-4xl mx-auto mb-12">
            <p className="text-4xl text-center font-bold text-gray-800">
              Voluntários
            </p>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div >
            <div className="text-gray-600 px-8 md:px-0  text-xl mb-8">
            <p className="mb-2">
              {" "}
              Pessoas que dedicam algum tempo
              para trabalhar junto ao OAMa no nosso programa de
              voluntariado ou em atividades pontuais.
              </p>

               <p>

               O
              voluntariado é planejado para que seja bom para todos,
              tanto para a organização como para os voluntários.
            </p>
            </div>
            <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-3">
              <CollaboratorCard
                name="Gabriel Magalhães"
                postion="Monitoramento da Avifauna"
                image="/Gabriel Magalhães.jpg"
              ></CollaboratorCard>
              <CollaboratorCard
                name="Gabriela Inhesta"
                postion="Divulgação Científica"
                image="/GabrielaInhesta.jpeg"
              ></CollaboratorCard>
              <CollaboratorCard
                name="Karine Resende"
                postion="Educação Ambiental"
                image="/KarineResende.jpeg"
              ></CollaboratorCard>
              <CollaboratorCard
                name="Larissa Diniz"
                postion="Educação Ambiental"
                image="/LarissaDiniz2.png"
              ></CollaboratorCard>
              <CollaboratorCard
                name="Otávio Rocha"
                postion="Divulgação Científica"
                image="/OtávioRocha.png"
              ></CollaboratorCard>
            </div>
          </div>
          <div class="container  max-w-4xl mx-auto mb-12 ">
            <p className="text-4xl text-center font-bold text-gray-800">
              Parcerias
            </p>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <p class="text-gray-600 px-8 md:px-0 mb-2  text-xl">
              {" "}
              Organizações, instituições, grupos de pesquisa, iniciativas
              privadas e pessoas físicas com quem mantemos uma relação de
              parceria em atividades específicas ou num contexto geral.
            </p>
            <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-3">
              <CollaboratorCard
                name="Klamath Bird Observatory"
                image="/kbo.png"
                site="http://www.klamathbird.org"
                border
              ></CollaboratorCard>
              <CollaboratorCard
                name="Simone Coimbra"
                image="/SiCoimbra.png"
              ></CollaboratorCard>
              <CollaboratorCard
                name="ColaboraNóbrega"
                image="/colabora.png"
                border
              ></CollaboratorCard>

              <CollaboratorCard
                name="BirdsAtlantic"
                image="/birds atlantic.png"
                border
              ></CollaboratorCard>
              {/* <CollaboratorCard
                name="RPPN Fazenda Boa Vista - MG"
                image="/LarissaDiniz.jpg"
              ></CollaboratorCard> */}
              <CollaboratorCard
                name="Observatório de Aves - Instituto Butantan"
                image="/Butanta.jpeg"
                border
              ></CollaboratorCard>
              {/* <CollaboratorCard
                name="Observatório de Aves do Pampa"
                image="/OtávioRocha.jpeg"
              ></CollaboratorCard> */}
              <CollaboratorCard
                name="PAN Aves da Mata Atlântica"
                image="/PAN_MA.png"
                border
              ></CollaboratorCard>
              {/* <CollaboratorCard
                name="Aves Noronha"
                image="/PAN_MA.png"
              ></CollaboratorCard> */}
            </div>
          </div>
          <div class="container  max-w-4xl mx-auto ">
            <p className="text-4xl text-center font-bold text-gray-800">
              Institucional
            </p>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <p class="text-gray-600 px-8 md:px-0 mb-2 text-center text-xl">
              {" "}
              O OAMa é uma ONG composta por associados e diretoria. Os
              associados são responsáveis por definir os rumos da organização,
              enquanto a diretoria é o núcleo que representa o OAMa
              burocraticamente.{" "}
            </p>
            <div className="p-6">
              <p className="text-gray-800 mb-2 text-center font-bold text-xl">
                Diretoria
              </p>
              <ul className="text-center text-gray-700">
                <li>
                  <strong>Presidente:</strong> Luiza Figueira
                </li>
                <li>
                  <strong>Secretário:</strong> Pedro Martins
                </li>
                <li>
                  <strong>Tesoureiro:</strong> Affonso Souza
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center p-6">
              <p className="text-gray-800 text-center mb-2 font-bold text-xl">
                Associados
              </p>
              <ul className="text-gray-700">
                <li>Affonso Henrique de Souza, biólogo</li>
                <li>Felipe Cotrim, jornalista</li>
                <li>Joaquim Mendonça, engenheiro florestal</li>
                <li>Julia Rodrigues, fotógrafa</li>
                <li>Lino Matheus de Sá Pereira, ambientalista</li>
                <li>Luiza Figueira, bióloga</li>
                <li>Nívea Leite, artista plástica</li>
                <li>Pedro Martins, biólogo</li>
                <li>Raquel Justo, bióloga</li>
                <li>Renata Miwa, artista plástica e designer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CollaboratorCard = (props) => {
  const { name, postion, image, site, border } = props;

  return (
    <div className=" flex p-2 sm:flex-col justify-start  items-center">
      <div
        className={`w-1/4 sm:w-1/2 rounded-full ${border ? " shadow-lg " : ""}`}
      >
        <Image
          className="rounded-full "
          src={image}
          layout="responsive"
          width={100}
          objectFit="cover"
          height={100}
        ></Image>
      </div>

      <div class="sm:w-full flex flex-col w-2/3 p-2">
        <h3 class="text-lg text-center text-gray-800 font-bold leading-none mb-1">
          {name}
        </h3>
        <h4 class="text-md text-center text-gray-800 font-bold leading-none mb-3">
          {postion}{" "}
        </h4>
        {site ? (
          <a
            href={site}
            target="_blank"
            class="text-sm text-center underline text-gray-800 leading-none mb-3"
          >
            Site
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
