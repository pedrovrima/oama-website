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
            <div className="flex flex-col mb-8 sm:flex-row ">
              <div class="w-full sm:w-1/3 p-2 sm:py-0 sm:px-6  my-auto">
                <div>
                  <Image
                    alt="Serra da Mantiqueira"
                    layout="responsive"
                    src="/treinamento-cursos/muda_teorico.jpg"
                    width={400}
                    objectFit="cover"
                    height={400}
                  />
                </div>
              </div>
              <div className="w-full sm:w-2/3  my-auto">
                <p className="text-gray-600 text-lg font-bold">
                  II Curso Teórico de Análise de Mudas e Classificação de idade
                  em Aves
                </p>
                <p className="text-gray-500 text-md font-bold">
                  25 e 26 de junho de 2022
                </p>
                <p className="text-gray-500 text-md font-bold">Online</p>
                <p className="text-gray-600 ">
                  <span className="font-bold">
                    Inscrições e mais informações
                    <span className="underline  text-yellow-600 cursor-pointer">
                      <a href="https://www.sympla.com.br/ii-curso-de-analise-de-muda-e-classificacao-de-idade-em-aves__1587958">
                        {" "}
                        aqui.{" "}
                      </a>
                    </span>{" "}
                    <br />
                  </span>
                  Nosso objetivo com o CAMCI é introduzir o conhecimento básico
                  (e super importante!) sobre as estratégias e padrões de muda
                  de penas nas aves e como usar o método WRP para classificação
                  de idade (ou “molt based ageing system”). Visamos também
                  promover a padronização no uso de terminologias e
                  nomenclaturas para mudas e plumagens em aves, e expandir a
                  prática de classificação de idade de aves com base na análise
                  de mudas e plumagem entre os ornitólogos do Brasil.
                  <br /> Luiza Figueira e Pedro Martins, Co-Fundadores do
                  Observatório de Aves da Mantiqueira, tem treinamento pelo Bird
                  Banding and Molt Analysis Workshop e há quase 10 anos vêm
                  aplicando a prática de análise de muda e classificação de
                  idade em diversos projetos e, atualmente, na Serra da
                  Mantiqueira. Se você é da Ornitologia e se interessa pelo
                  ciclo de vida, história natural, demografia, fisiologia ou
                  evolução das aves, esse curso é para você. O tema e o nível do
                  curso pode interessar desde estudantes de graduação até
                  pesquisadores e professores que tenham interesse no estudo de
                  muda das aves e suas aplicações para classificação de idade.
                  Quem não é acadêmico, mas é muito curioso e gosta de observar
                  aves e suas plumagens também está convidado a participar!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mb-8">
              <div class="w-full sm:w-1/3 p-2 sm:py-0 sm:px-6  my-auto">
                <div>
                  <Image
                    alt="Serra da Mantiqueira"
                    layout="responsive"
                    src="/treinamento-cursos/anilhamento_teorico.jpg"
                    width={400}
                    objectFit="cover"
                    height={400}
                  />
                </div>
              </div>
              <div className="w-full sm:w-2/3  my-auto">
                <p className="text-gray-600 text-lg font-bold">
                  II Curso Teórico Básico de Anilhamento
                </p>
                <p className="text-gray-500 text-md font-bold">
                  09 e 10 de julho de 2022
                </p>
                <p className="text-gray-500 text-md font-bold">Online</p>
                <p className="text-gray-600 ">
                  <span className="font-bold">
                    Inscrições e mais informações
                    <span className="underline  text-yellow-600 cursor-pointer">
                      <a href="https://www.sympla.com.br/ii-curso-de-anilhamento-teorico__1588058">
                        {" "}
                        aqui.{" "}
                      </a>
                    </span>{" "}
                    <br />
                  </span>
                  Quer aprender sobre anilhamento ou se atualizar no assunto?
                  Neste curso exclusivamente teórico, abordaremos desde uma
                  introdução até uma revisão aprofundada sobre as aves com
                  pulseiras. Fundamental no monitoramento da avifauna e em
                  pesquisas com identificação do indivíduo, o anilhamento é um
                  método de estudo de grande importância para a conservação das
                  espécies. Por ser um método com manipulação das aves, sempre
                  existe um risco, e por isso a capacitação técnica e
                  aperfeiçoamento constante são indispensáveis para a segurança
                  das aves e qualidade dos dados!
                  <br />
                  Neste curso, Luiza Figueira e Cecília Licarião vão dialogar
                  sobre aplicações do anilhamento na pesquisa e conservação,
                  segurança e cuidados com as aves, técnicas de captura das
                  aves, qualidade e interpretação dos dados coletados e
                  oportunidades de treinamento. Essas duas já voaram longas
                  distâncias e tem muito o que compartilhar. Vem com a gente?
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mb-8">
              <div class="w-full sm:w-1/3 p-2 sm:py-0 sm:px-6  my-auto">
                <div>
                  <Image
                    alt="Serra da Mantiqueira"
                    layout="responsive"
                    src="/treinamento-cursos/anilhamento_pratico.jpg"
                    width={400}
                    objectFit="cover"
                    height={400}
                  />
                </div>
              </div>
              <div className="w-full sm:w-2/3  my-auto">
                <p className="text-gray-600 text-lg font-bold">
                  I Curso Prático Básico de Anilhamento
                </p>
                <p className="text-gray-500 text-md font-bold">
                  18 a 21 de agosto de 2022
                </p>
                <p className="text-gray-500 text-md font-bold">
                  Estação de Pesquisa OAMa
                </p>
                <p className="text-gray-600 ">
                  <span className="font-bold">
                    Inscrições e mais informações
                    <span className="underline  text-yellow-600 cursor-pointer">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqP_kWyAk16zeBcMPHRbvSMw76nP82fxOHEs5G4IRNf0z95w/viewform">
                        {" "}
                        aqui.{" "}
                      </a>
                    </span>{" "}
                    <br />
                  </span>
                  O curso tem como objetivo apresentar, na prática e experiência
                  em campo, técnicas seguras e apropriadas para 1. a manipulação
                  adequada das aves durante a extração das redes de neblina e
                  coleta de dados; 2. o manejo de uma estação de anilhamento
                  visando a prevenção de injúrias e estresse das aves; 3. a
                  aplicação e ajustes de anilhas; 4. a familiarização com os
                  tipos de dados coletados e como coletá-los, dentre outros
                  temas pertinentes. Focamos nos passeriformes e nas redes de
                  neblina como método de captura. Sendo esse um curso
                  condensado, não será apresentada a parte teórica completa,
                  <span className="font-bold">
                    {" "}
                    portanto é pré-requisito indispensável ter realizado o
                    Módulo Teórico!
                  </span>{" "}
                  Ressaltamos que, pela curta duração, este curso, por si só,
                  não habilita ninguém a se tornar um anilhador, nem garante um
                  registro de anilhador sênior com o CEMAVE.
                  <br />
                  <span className="font-bold">
                    Não é necessária experiência prática prévia.
                  </span>{" "}
                  Todos os alunos receberão instruções, acompanhamento
                  individual, comentários construtivos e terão oportunidades de
                  extrair aves da rede, de anilhar e de coletar dados. No
                  entanto, a quantidade de prática que cada aluno será capaz de
                  fazer depende da taxa de captura das aves durante os dias de
                  campo. A prática de cada aluno também é dependente da
                  segurança das aves. Nenhuma ave será colocada em risco para
                  priorizar a experiência prática dos alunos. Dessa forma, caso
                  haja a necessidade, os instrutores do curso poderão intervir a
                  qualquer momento para garantir o bem estar dos animais.
                  Seguimos o código de ética e recomendações de práticas pelo
                  NABC e CEMAVE.
                  <br />O curso será ministrado por Luiza Figueira e Affonso
                  Souza.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mb-8">
              <div class="w-full sm:w-1/3 p-2 sm:py-0 sm:px-6  my-auto">
                <div>
                  <Image
                    alt="Serra da Mantiqueira"
                    layout="responsive"
                    src="/treinamento-cursos/muda_pratico.jpg"
                    width={400}
                    objectFit="cover"
                    height={400}
                  />
                </div>
              </div>
              <div className="w-full sm:w-2/3  my-auto">
                <p className="text-gray-600 text-lg font-bold">
                II Curso Prático de Análise de Mudas e Classificação de idade em Aves
                </p>
                <p className="text-gray-500 text-md font-bold">
                21 a 24 de agosto de 2022
                </p>
                <p className="text-gray-500 text-md font-bold">
                  Estação de Pesquisa OAMa
                </p>
                <p className="text-gray-600 ">
                  <span className="font-bold">
                    Inscrições e mais informações
                    <span className="underline  text-yellow-600 cursor-pointer">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqP_kWyAk16zeBcMPHRbvSMw76nP82fxOHEs5G4IRNf0z95w/viewform">
                        {" "}
                        aqui.{" "}
                      </a>
                    </span>{" "}
                    <br />
                  </span>
                  Neste curso, vamos ter a oportunidade de colocar em prática o
                  conteúdo que foi apresentado durante{" "}
                  <span className="font-bold">
                    Módulo Teórico, que é pré-requisito indispensável para a
                    participação!
                  </span>{" "}
                  Pela curta duração, focaremos o máximo na prática, de forma
                  que cada aluno deverá chegar já com o conhecimento teórico
                  básico sobre o tema. Trabalharemos em campo a análise de muda
                  e características de penas, reconhecimento de grupos de penas,
                  identificação e registro de penas em muda, análise de
                  plumagens, reconhecimento e descrição de limite de muda,
                  coleta de dados complementares para determinação de idade e
                  aplicação de códigos WRP.
                  <br />
                  Não trabalharemos técnicas de extração de aves das redes,
                  contenção e manipulação de aves, aplicação de anilhas e outras
                  práticas básicas do anilhamento de aves. As extrações das aves
                  das redes e aplicações de anilhas serão feitas exclusivamente
                  pela equipe interna do curso (instrutores e assistentes).
                  Assim, otimizamos o tempo dedicado à análise de muda, plumagem
                  e dados complementares, e damos maior foco à classificação de
                  idade das aves. Nenhuma ave será colocada em risco para
                  priorizar a experiência prática dos alunos. Dessa forma, caso
                  haja a necessidade, os instrutores do curso poderão intervir a
                  qualquer momento para garantir o bem estar da ave. Seguimos o
                  código de ética e recomendações de práticas pelo NABC e
                  CEMAVE.
                  <br />O curso será ministrado por Luiza Figueira e Pedro
                  Martins.
                </p>
              </div>
            </div>

            {/* <h2 className="w-full mt-12 mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
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
            </ul> */}
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
              <li className="list-disc">
                Curso Teórico de Análise de Mudas e Classificação de idade em
                Aves 2022 - Online 
              </li>
              <li className="list-disc">
                Curso de Fotografia de Aves com Birds Atlantic 2022 - Presencial
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
