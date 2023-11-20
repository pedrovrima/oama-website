import Nav from '@includes/nav';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '@includes/footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Treinamento() {
  return (
    <>
      <div className='pb-32'>
        <Head>
          <title>Treinamento e Cursos</title>
        </Head>

        <Nav />
        <div className='hero-small md:hero relative min-h-1/2'>
          <div className='h-full items-center justify-items-center pt-32 md:pb-16 lg:pb-16'>
            <div className='absolute top-0 h-full w-full'>
              <Image
                // className="h-32"
                src='/heros/quem_somos.jpg'
                layout='fill'
                //   width={"2000"}
                //   height={"1000"}
                objectFit='cover'
                objectPosition='center'
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className='mx-auto w-3/4 sm:max-w-6xl'>
          <div className='mt-16'>
            <div className='mb-24'>
              <h1 class='w-full text-center text-5xl font-bold leading-tight text-gray-800'>
                Cursos e Treinamento{' '}
              </h1>

              <div class='mb- w-full'>
                <div class='gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25' />
              </div>
              <p className='text-md text-gray-600 sm:p-12 sm:text-lg'>
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

          <div className=''>
            <div className='relative hidden w-full sm:block sm:h-medium'>
              <Image
                objectFit='contain'
                // width={100}
                // height={100}
                src='/treinamento-cursos/1.png'
                layout='fill'
              />
            </div>
            <div className='relative h-medium w-full sm:hidden'>
              <Image
                objectFit='contain'
                // width={100}
                // height={100}
                src='/treinamento-cursos/1-mobile.png'
                layout='fill'
              />
            </div>
            <h2 className='mb-6 w-full text-center text-3xl font-bold leading-tight text-gray-800'>
              INSCRIÇÕES ABERTAS para a 2º edição do PROGRAMA DE TREINAMENTO EM
              MONITORAMENTO DE AVIFAUNA do OAMa!
            </h2>
            {/* <div className="flex flex-col sm:flex-row"> */}
            <div className='my-auto w-full'>
              <p className='mb-4 text-gray-600'>
                Em 2022, demos início ao nosso programa de treinamento em
                monitoramento de avifauna. Nosso programa é voltado para
                capacitar e formar ornitólogos na coleta de dados de campo com
                qualidade técnica e ética profissional. O objetivo deste
                programa é criar oportunidades de treinamento intensivo, de
                imersão e de longo-prazo para ornitólogos de campo.
              </p>
              <p className='mb-4 text-gray-600'>
                O nosso treinamento foi estruturado com base no programa do
                Klamath Bird Observatory, adaptado para a nossa realidade local
                e segue as diretrizes do @icmbio.cemave e a legislação ambiental
                brasileira. O currículo do programa inclui aulas teóricas e
                muita atividade prática focadas nas técnicas de
                captura-marcação-recaptura com redes de neblina e anilhamento de
                aves silvestres e de census com pontos fixos. O treinamento
                acontece presencialmente e requer dedicação exclusiva e
                residência na Estação de Pesquisa do OAMa, localizada na Reserva
                Particular do Patrimônio Natural (RPPN) Fazenda Boa Vista, em
                Bocaina de Minas/MG, Serra da Mantiqueira.
              </p>
              <p className='mb-4 text-gray-600 '>
                O ano de 2022 foi nosso primeiro ano de treinamento e aprendemos
                muito sobre toda a logística e rotina das atividades. Com base
                nisso, ajustamos o programa para melhorar a experiência de cada
                trainee em 2023.
              </p>
              <TrainingCarousel></TrainingCarousel>
              <p className='mb-4 text-gray-600'>
                Este ano teremos diferentes modalidades de treinamento.
                Modalidade 6 meses (1 vaga) e modalidade 3 meses (4 vagas).
                Devido a inexistência de financiamento externo e para viabilizar
                a continuidade do programa, este ano haverá um custo de
                mensalidade para participação no programa de treinamento. A
                mensalidade inclui a hospedagem na estação de pesquisa,
                deslocamento para as atividades internas do programa, materiais
                usados durante o treinamento e todas as aulas, materiais de
                estudo e assistências necessárias para a formação do trainee.
                Oferecemos até duas bolsas integrais e uma bolsa parcial para as
                quais todos podem se candidatar.
              </p>
              <div className='relative hidden w-full sm:block sm:h-medium'>
                <Image
                  objectFit='contain'
                  // width={100}
                  // height={100}
                  src='/treinamento-cursos/2.png'
                  layout='fill'
                />
              </div>
              <div className='relative h-medium w-full sm:hidden'>
                <Image
                  objectFit='contain'
                  // width={100}
                  // height={100}
                  src='/treinamento-cursos/2-mobile.png'
                  layout='fill'
                />
              </div>

              {/* <p className="mb-4 text-gray-600">
                O treinamento é intenso, com muitas horas de campo e de estudo
                semanais. As inscrições permanecerão abertas até 20 de janeiro
                de 2023. Para baixar a chamada para o programa com mais
                detalhes,{" "}
                <a
                  className="text-yellow-600 underline"
                  href="/treinamento-cursos/files/Programa-Treinamento-OAMa2023.pdf"
                  target={"_blank"}
                >
                  clique aqui
                </a>
                . Para se inscrever, preencha o{" "}
                <a
                  className="text-yellow-600 underline"
                  target={"_blank"}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdE4vT0vfkcmenB-sN5NQKZ1cvNZYOkRfOGLNhqXfvh8CLVBA/viewform"
                >
                  formulário de inscrição
                </a>
                . */}
              {/* </p> */}
              <HallOfFame />
              {/* </div> */}
            </div>
            <h2 className='mb-6 mt-12 w-full text-center text-3xl font-bold leading-tight text-gray-800'>
              Cursos
            </h2>
            {/* <div className="flex flex-col mb-8 sm:flex-row ">
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
              <div className="w-full my-auto sm:w-2/3">
                <p className="text-lg font-bold text-gray-600">
                  Curso Online Análise de Mudas e Classificação de idade em Aves
                </p>
                <p className="font-bold text-gray-500 text-md">
                  Adiado para 5 e 6 de março 2022
                </p>
                <p className="font-bold text-gray-500 text-md">Online</p>
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
                    className="text-yellow-600 underline cursor-pointer"
                  >
                    Para inscrição e mais informações, acesse a plataforma do
                    curso
                  </a>
                  .
                </p>
              </div>
            </div>  */}
            {/* <div className="flex flex-col mb-8 sm:flex-row ">
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
              <div className="w-full my-auto sm:w-2/3">
                <p className="text-lg font-bold text-gray-600">
                  II Curso Teórico de Análise de Mudas e Classificação de idade
                  em Aves
                </p>
                <p className="font-bold text-gray-500 text-md">
                  25 e 26 de junho de 2022
                </p>
                <p className="font-bold text-gray-500 text-md">Online</p>
                <p className="text-gray-600 ">
                  <span className="font-bold">
                    Inscrições e mais informações
                    <span className="text-yellow-600 underline cursor-pointer">
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

            <div className="flex flex-col mb-8 sm:flex-row">
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
              <div className="w-full my-auto sm:w-2/3">
                <p className="text-lg font-bold text-gray-600">
                  II Curso Teórico Básico de Anilhamento - OAMa + Aves de Noronha
                </p>
                <p className="font-bold text-gray-500 text-md">
                  09 e 10 de julho de 2022
                </p>
                <p className="font-bold text-gray-500 text-md">Online</p>
                <p className="text-gray-600 ">
                  <span className="font-bold">
                    Inscrições e mais informações
                    <span className="text-yellow-600 underline cursor-pointer">
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
            </div> */}

            <div className='mb-8 flex flex-col sm:flex-row'>
              <div class='my-auto w-full p-2 sm:w-1/3 sm:px-6  sm:py-0'>
                <div>
                  <Image
                    alt='Serra da Mantiqueira'
                    layout='responsive'
                    src='/treinamento-cursos/anilhamento_ii.png'
                    width={400}
                    objectFit='cover'
                    height={400}
                  />
                </div>
              </div>
              <div className='my-auto w-full sm:w-2/3'>
                <p className='text-lg font-bold text-gray-600'>
                  II Curso Prático Básico de Anilhamento
                </p>
                <p className='text-md font-bold text-gray-500'>
                  Data a definir{' '}
                </p>
                <p className='text-md font-bold text-gray-500'>
                  Estação de Pesquisa OAMa
                </p>
                <p className='text-gray-600 '>
                  {/* <span className="font-bold">
                    Inscrições e mais informações
                    <span className="text-yellow-600 underline cursor-pointer">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqP_kWyAk16zeBcMPHRbvSMw76nP82fxOHEs5G4IRNf0z95w/viewform">
                        {" "}
                        aqui.{" "}
                      </a>
                    </span>{" "}
                    <br />
                  </span> */}
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
                  <span className='font-bold'>
                    {' '}
                    portanto é pré-requisito indispensável ter realizado o
                    Módulo Teórico!
                  </span>{' '}
                  Ressaltamos que, pela curta duração, este curso, por si só,
                  não habilita ninguém a se tornar um anilhador, nem garante um
                  registro de anilhador sênior com o CEMAVE.
                  <br />
                  <span className='font-bold'>
                    Não é necessária experiência prática prévia.
                  </span>{' '}
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
                  <br />O curso será ministrado por Luiza Figueira, Pedro
                  Martins e Affonso Souza.
                </p>
              </div>
            </div>

            <div className='mb-8 flex flex-col sm:flex-row'>
              <div class='my-auto w-full p-2 sm:w-1/3 sm:px-6  sm:py-0'>
                <div>
                  <Image
                    alt='Serra da Mantiqueira'
                    layout='responsive'
                    src='/treinamento-cursos/muda_iii.png'
                    width={400}
                    objectFit='cover'
                    height={400}
                  />
                </div>
              </div>
              <div className='my-auto w-full sm:w-2/3'>
                <p className='text-lg font-bold text-gray-600'>
                  III Curso Prático de Análise de Mudas e Classificação de idade
                  em Aves
                </p>
                <p className='text-md font-bold text-gray-500'>
                  {/* 19 a 22 de fevereiro de 2023 */} Data a definir.
                </p>
                <p className='text-md font-bold text-gray-500'>
                  Estação de Pesquisa OAMa
                </p>
                <p className='text-gray-600 '>
                  {/* <span className="font-bold">
                    Inscrições e mais informações
                    <span className="text-yellow-600 underline cursor-pointer">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqP_kWyAk16zeBcMPHRbvSMw76nP82fxOHEs5G4IRNf0z95w/viewform">
                        {" "}
                        aqui.{" "}
                      </a>
                    </span>{" "}
                    <br />
                  </span> */}
                  Neste curso, vamos ter a oportunidade de colocar em prática o
                  conteúdo que foi apresentado durante{' '}
                  <span className='font-bold'>
                    Módulo Teórico, que é pré-requisito indispensável para a
                    participação!
                  </span>{' '}
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
                  <br />O curso será ministrado por Luiza Figueira, Pedro
                  Martins e Affonso Souza.
                </p>
              </div>
            </div>

            {/* <h2 className="w-full mt-12 mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
              Em Breve
            </h2>
            <ul className="p-12 text-lg">
              <li className="list-disc">
                Curso prático de anilhamento - foco em Passeriformes
              </li>
              <li className="list-disc">
                Curso prático de análise de muda e classificação de idade em
                aves
              </li>
            </ul> */}
            <h2 className='mb-6 mt-12 w-full text-center text-3xl font-bold leading-tight text-gray-800'>
              Cursos Concluídos
            </h2>
            <ul className='p-12 text-lg'>
              <li className='list-disc'>
                II Curso Prático de Análise de Mudas e Classificação de idade em
                Aves - 2022 - Presencial
              </li>
              <li className='list-disc'>
                I Curso Prático Básico de Anilhamento - 2022 - Presencial
              </li>
              <li className='list-disc'>
                II Curso Teórico Básico de Anilhamento com Aves de Noronha -
                2022 - Online
              </li>
              <li className='list-disc'>
                II Curso Teórico de Análise de Mudas e Classificação de idade em
                Aves - 2022 - Online
              </li>
              <li className='list-disc'>
                Curso de Fotografia de Aves com Birds Atlantic - 2022 -
                Presencial
              </li>
              <li className='list-disc'>
                I Curso Teórico Básico de Anilhamento com Aves de Noronha - 2021
                - Online{' '}
              </li>
              <li className='list-disc'>
                I Curso Análise de Muda e Classificação de Idade em Aves - 2019
                - Presencial
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const TrainingCarousel = () => (
  <div className='h-100 group flex cursor-pointer items-center justify-center sm:px-8'>
    <Carousel
      showArrows={true}
      showStatus={false}
      autoPlay
      swipeable
      emulateTouch
      infiniteLoop
      // showThumbs={false}
      stopOnHover
      transitionTime={600}
      className='mb-8 mt-2 h-96 w-full bg-gray-300 sm:mb-4'
    >
      {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => {
        return (
          <div className='relative h-96 w-full sm:h-96'>
            <Image
              layout='fill'
              objectFit='cover'
              src={`/treinamento-cursos/carousel/${num}.jpg`}
            ></Image>
          </div>
        );
      })}
    </Carousel>
  </div>
);

const HallOfFame = () => {
  return (
    <>
      <h2 className='mb-8 mt-16 text-center text-4xl font-bold'>
        Trainees 2022
      </h2>

      {trainees.map((trainee, i) => {
        return (
          <div
            class={`flex md:${
              i % 2 ? 'flex-row-reverse' : 'flex-row'
            } relative  mb-8 items-center   justify-around`}
          >
            <div class='m-2 w-3/5 rounded-full  shadow-lg sm:w-1/6 '>
              <div>
                <Image
                  className='rounded-full border-8 border-gray-200'
                  src={`/treinamento-cursos/trainees/${trainee.img}.jpg`}
                  layout='responsive'
                  width={20}
                  objectFit='cover'
                  height={20}
                ></Image>
              </div>
            </div>

            <div class='w-full p-2 sm:w-4/6'>
              <h3 class='text-justify-center mb-1 text-3xl font-bold leading-none text-gray-800'>
                {trainee.name}
              </h3>
              <h4 class='text-justify-center mb-3 text-xl font-bold leading-none text-gray-800'>
                {trainee.basic_info}
                <br />
                {trainee.time}
                <br />
                {trainee.birds}
              </h4>

              <p class='text-gray-600 '>{trainee.quote}</p>
              <a className='underline' target='_blank' href={trainee.reel}>
                Como foi
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

const trainees = [
  {
    name: 'Otávio Rocha',
    basic_info: 'Biólogo, 25 anos, Fortaleza (CE)',
    time: 'Estadia de fevereiro a maio',
    birds: '90 aves processadas',
    quote:
      '“É inevitável não se apaixonar pela Mantiqueira, pelas aves e pelo trabalho de campo. Essa imersão transformou minha visão sobre esses animais e as possibilidades de pesquisa que podemos desenvolver.”',
    reel: 'https://www.instagram.com/reel/CeMkv6QFYJM/?utm_source=ig_web_copy_link',
    img: 'trainee otávio',
  },
  {
    name: 'André Menini',
    basic_info: 'Biólogo, 25 anos, Caieiras (SP)',
    time: 'Estadia de fevereiro a maio',
    birds: '104 aves processadas',
    quote:
      '“O programa fez total diferença na minha formação, afinal de contas, não são muitas as oportunidades para aprender sobre a técnica de anilhamento da forma correta no Brasil e tenho a certeza que tive os melhores professores. Ser trainee no OAMa abriu minha cabeça para diversas possibilidades na ornitologia.”',
    reel: 'https://www.instagram.com/reel/CeMkv6QFYJM/?utm_source=ig_web_copy_link',
    img: 'trainee andré',
  },
  {
    name: 'Danielle Santos',
    basic_info: 'Bióloga, 23 anos, Palmas (TO)',
    time: 'Estadia de março a julho',
    birds: '165 aves processadas',
    quote:
      '“O treinamento sem dúvidas foi uma oportunidade de iniciar na ornitologia com um preparo de altíssima qualidade. Cheguei no OAMa sem saber segurar uma ave com as mãos, e hoje, com as ótimas instruções que tive, sou capaz de capturar as aves e coletar os dados com segurança, agilidade e eficiência.”',
    reel: 'https://www.instagram.com/reel/CgnKTKTlKnP/?utm_source=ig_web_copy_link',
    img: 'trainee danielle',
  },
  {
    name: 'João Victor Ferrari',
    basic_info: 'Biólogo, 24 anos, São Borja (RS)',
    time: 'Estadia de maio a julho',
    birds: '127 aves processadas',
    quote:
      '“Essa experiência agregou significativamente na minha formação, possibilitando adquirir novas habilidades e amadurecer as minhas decisões. Foi uma satisfação participar do programa de treinamento em monitoramento de avifauna do OAMa.”',
    reel: 'https://www.instagram.com/reel/CkMTadOP-y0/?utm_source=ig_web_copy_link',
    img: 'trainee joão',
  },
  {
    name: 'Gabriela Inhesta',
    basic_info: 'Bióloga, 24 anos, Curitiba (PR)',
    time: 'Estadia de julho a setembro',
    birds: '41 aves processadas',
    quote:
      '“Estar imersa na natureza e no trabalho de campo com as aves é a realização de um grande sonho e essa foi com certeza a experiência mais bonita e enriquecedora que eu já vivi até então. Eu finalizo muito realizada e me sentindo de fato capacitada para exercer um trabalho de qualidade. “',
    reel: 'https://www.instagram.com/reel/CkMVkpSvzbi/?utm_source=ig_web_copy_link',
    img: 'trainee gabriela',
  },
  {
    name: 'Luiz Felipe Gonzaga',
    basic_info: 'Biólogo, 22 anos, Foz do Iguaçu (PR)',
    time: 'Estadia de agosto a novembro',
    birds: '136 aves processadas',
    quote:
      '“Aprendi muito sobre a fauna local e novas metodologias, pretendo usar todo o conhecimento adquirido para novos projetos e consultoria. A estação de pesquisa é maravilhosa e me sinto muito feliz fazendo parte desta excelente equipe.”',
    reel: 'https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link',
    img: 'trainee luiz',
  },
];
