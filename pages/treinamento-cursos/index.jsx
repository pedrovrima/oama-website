import Nav from "@includes/nav";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Footer from "@includes/footer";

export default function Treinamento() {
  return (
    <>
      <div className="pb-32">
        <Head>
          <title>Treinamento e Cursos</title>
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
              />
            </div>
          </div>
        </div>
        <div className="w-3/4 sm:max-w-6xl mx-auto">
          <div className="mt-16">
            <div className="mb-24">
              <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
                Cursos e Treinamento{" "}
              </h1>

              <div class="w-full mb-">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
              </div>
              <p className="p-12 text-lg text-gray-600">
                A capacitação e o treinamento de profissionais para o emprego de
                técnicas de estudo e pesquisa em Ornitologia são essenciais para
                a qualidade dos trabalhos desenvolvidos e dos dados coletados,
                como também para o bem-estar dos animais estudados. Para nós,
                promover oportunidades de capacitação técnica é uma forma de
                contribuir para o desenvolvimento de ciência de qualidade no
                Brasil. Por isso, elaboramos e oferecemos cursos em nossas áreas
                de especialidade técnica.  Promovemos, através de parcerias,
                cursos também em áreas relacionadas à ornitologia, conservação e
                observação de aves.  Além de cursos, oferecemos oportunidade de
                treinamento de longo-prazo e intensivo em técnicas de
                monitoramento de avifauna através de nosso programa de
                voluntariado de treinamento.  Saiba mais sobre os cursos e sobre
                nosso programa de treinamento aqui. 
              </p>
            </div>
          </div>

          <div className="">
            <h2 className="w-full mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
              Programa de Treinamento em Monitoramento da Avifauna
            </h2>
            <div className="flex flex-col sm:flex-row">
              <div class="w-full my-auto sm:w-1/3 sm:px-6">
                <div>
                  <Image
                    alt="Serra da Mantiqueira"
                    layout="responsive"
                    src="/treinamento-cursos/treinamento.jpg"
                    width={600}
                    objectFit="cover"
                    height={400}
                  />
                </div>
              </div>
              <div className="w-full my-auto sm:w-2/3">
                <p className="text-gray-600 ">
                  O programa de treinamento em Monitoramento de Avifauna tem
                  como objetivo promover capacitação técnica de excelência na
                  área de ornitologia de campo e viabilizar a expansão da coleta
                  de dados no OAMa com a participação de voluntários em
                  treinamento. O currículo do programa inclui aulas teóricas e
                  muita atividade prática focadas nas técnicas de
                  captura-marcação-recaptura com redes de neblina e anilhamento
                  de aves e de census com pontos fixos. O treinamento acontece
                  presencialmente e requer{" "}
                  <span className="font-bold">
                    dedicação exclusiva e residência
                  </span>{" "}
                  na Estação de Pesquisa do OAMa, localizada na Reserva
                  Particular do Patrimônio Natural (RPPN) Fazenda Boa Vista, em
                  Bocaina de Minas/MG, Serra da Mantiqueira.{" "}
                </p>
                <p className="text-gray-600 ">
                  A{" "}
                  <span className="font-bold">
                    data de início e duração total
                  </span>{" "}
                  (respeitando o mínimo de 3 meses) do treinamento para cada um
                  vai depender da disponibilidade de vaga e da possibilidade do
                  aplicante, e será definida conjuntamente com a coordenação do
                  OAMa após a seleção. As inscrições são de fluxo contínuo, de
                  forma que interessados em participar podem aplicar a qualquer
                  momento.
                </p>
                <p className="text-gray-600 ">
                  Para baixar a chamada para o programa com mais detalhes,{" "}
                  <a
                    href="/treinamento-cursos/files/OAMa - Edital Programa Treinamento Monitoramento Avifauna 2022.pdf"
                    target="_blank"
                    className="underline text-yellow-600 cursor-pointer"
                  >
                    clique aqui
                  </a>
                  . Para se inscrever, preencha o{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdE4vT0vfkcmenB-sN5NQKZ1cvNZYOkRfOGLNhqXfvh8CLVBA/viewform"
                    target="_blank"
                    className="underline text-yellow-600 cursor-pointer"
                  >
                    formulário de inscrição
                  </a>
                  .
                </p>
              </div>
            </div>
            <h2 className="w-full mt-12 mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
              Cursos
            </h2>
             {/* <div className="flex mb-8 flex-col sm:flex-row ">
              <div class="w-full sm:w-1/3 p-2 sm:py-0 sm:px-6  my-auto">
                <div>
                  <Image
                    alt="Serra da Mantiqueira"
                    layout="responsive"
                    src="/treinamento-cursos/curso_muda.png"
                    width={400}
                    objectFit="cover"
                    height={400}
                  />
                </div>
              </div>
              <div className="w-full  my-auto sm:w-2/3">
                <p className="text-gray-600 text-lg font-bold">
                  Curso Online Análise de Mudas e Classificação de idade em Aves
                </p>
                <p className="text-gray-500 text-md font-bold">
                  Adiado para 5 e 6 de março 2022
                </p>
                <p className="text-gray-500 text-md font-bold">Online</p>
                <p className="text-gray-600 ">
                  O curso teórico de Análise de Muda e Classificação de Idade em
                  Aves (CAMCI) acontecerá de forma remota, totalmente online.
                  Nosso objetivo é introduzir o conhecimento básico sobre as
                  estratégias e padrões de muda de penas nas aves e como usar o
                  método WRP para classificação de idade (ou “molt based ageing
                  system”). Visamos também promover a padronização no uso de
                  terminologias e nomenclaturas para mudas e plumagens em aves,
                  e expandir a prática de classificação de idade de aves com
                  base na análise de mudas e plumagem entre os ornitólogos do
                  Brasil. O tema e o nível do curso pode interessar desde
                  estudantes de graduação até pesquisadores e professores que
                  tenham interesse no estudo de muda das aves e suas aplicações
                  para classificação de idade. Quem não é acadêmico mas é muito
                  curioso e gosta de observar aves e suas plumagens também está
                  convidado a participar. O curso será ministrado por Luiza
                  Figueira e Pedro Martins.{" "}

                  <a
                    href="https://www.sympla.com.br/curso-de-analise-de-mudas-e-classificacao-de-idade-em-aves__1452863"
                    target="_blank"
                    className="underline text-yellow-600 cursor-pointer"
                  >
                    Para inscrição e mais informações, acesse a plataforma do
                    curso
                  </a>
                  .
                </p>
              </div>
            </div>  */}
            <div className="flex flex-col sm:flex-row ">
              <div class="w-full sm:w-1/3 p-2 sm:py-0 sm:px-6  my-auto">
                <div>
                  <Image
                    alt="Serra da Mantiqueira"
                    layout="responsive"
                    src="/treinamento-cursos/curso-foto.jpg"
                    width={400}
                    objectFit="cover"
                    height={400}
                  />
                </div>
              </div>
              <div className="w-full sm:w-2/3  my-auto">
                <p className="text-gray-600 text-lg font-bold">
                  Curso de fotografia de aves com Birds Atlantic
                </p>
                <p className="text-gray-500 text-md font-bold">
                  21 a 24 de abril 2022
                </p>
                <p className="text-gray-500 text-md font-bold">
                  Estação de Pesquisa OAMa
                </p>
                <p className="text-gray-600 ">
                  <span className="font-bold">
                    Vagas para estadia esgotadas. Para possibilidade de
                    participar do curso sem estadia,  
                    <span className="underline  text-yellow-600 cursor-pointer"><Link  href="/whatsapp"> clique aqui. </Link></span>{" "}
                  </span>
                  Esta atividade é voltada para fotógrafos e observadores de
                  aves que buscam aprimorar ou iniciar seus registros
                  fotográficos de natureza, inclusive as aves. O objetivo deste
                  curso é que o participante domine os conceitos da fotografia
                  com qualquer marca de equipamento, através de conhecimentos
                  teóricos e práticos. Na parte prática o instrutor orienta de
                  forma individual, respeitando a peculiaridade de cada
                  equipamento/participante. Também iremos à campo e comedouro
                  para treinar o que foi ensinado. No decorrer do workshop os
                  alunos poderão tirar suas dúvidas particulares e aprender mais
                  sobre sua câmera individualmente. Na parte teórica serão
                  trabalhados os pilares da fotografia, e técnicas que facilitam
                  na agilidade da configuração do equipamento. Além de
                  composição e comportamento do fotógrafo.O workshop será
                  ministrado por{" "}
                  <strong className="font-bold">
                    Jorge Lucas Moreira e Karoline Zamluti, sócios da Birds
                    Atlantic.
                  </strong>{" "}
                  <a className="underline text-yellow-600 cursor-pointer">
                    <Link href="treinamento-cursos/curso-foto" target="_blank">
                      Para mais informaçãoes, clique aqui
                    </Link>
                  </a>
                  .
                </p>
              </div>
            </div>

            <h2 className="w-full mt-12 mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
              Em Breve
            </h2>
            <ul className="text-lg p-12">
              <li className="list-disc">
                Curso prático de anilhamento - foco em Passeriformes
              </li>
              <li className="list-disc">
                Curso prático de análise de muda e classificação de idade em
                aves
              </li>
            </ul>
            <h2 className="w-full mt-12 mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
              Cursos Concluídos
            </h2>
            <ul className="text-lg p-12">
              <li className="list-disc">
                Curso Análise de Muda e Classificação de Idade em Aves 2019 -
                presencial
              </li>
              <li className="list-disc">
                Curso teórico Básico de Anilhamento 2021 - Online 
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
