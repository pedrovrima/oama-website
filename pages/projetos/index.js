import Nav from '@includes/nav';
import { useEffect, useRef } from 'react';

import Image from 'next/image';
import Head from 'next/head';
import Footer from '@includes/footer';
import Link from 'next/link';
export default function QuemSomos() {
  return (
    <>
      <div className='pb-32'>
        <Head>
          <title>Projetos</title>
        </Head>

        <Nav />
        <div className=' hero-small md:hero relative min-h-1/2'>
          <div className='h-full items-center justify-items-center pt-32  md:pb-16 lg:pb-16'>
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
              ></Image>
            </div>
          </div>
        </div>

        <div className='mt-16'>
          <div className='mb-24'>
            <h1 className='w-full text-center text-5xl font-bold leading-tight text-gray-800'>
              Projetos{' '}
            </h1>
            <div className='mb-4 w-full'>
              <div className='gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25'></div>
            </div>
          </div>
        </div>
        <div className='container mx-auto mb-12 max-w-4xl '>
          <div className='mb-8 flex flex-wrap  items-center justify-center   md:flex-row-reverse'>
            <div className='w-3/5  p-2 sm:w-1/3 sm:p-6'>
              <div>
                <Image
                  className='rounded-full border-8 border-gray-200'
                  alt='Anilhamento em ação'
                  src='/projetos/monitoramento.jpg'
                  layout='responsive'
                  width={200}
                  objectFit='cover'
                  height={200}
                ></Image>
              </div>
            </div>

            <div className='w-full p-6 sm:w-2/3'>
              <h3 className='text-justify-center mb-3 text-3xl font-bold leading-none text-gray-800'>
                Monitoramento da avifauna
              </h3>
              <p className='text-gray-600 '>
                O monitoramento biológico de longo prazo é o estudo padronizado
                e constante de uma mesma área por um longo período de tempo. É
                por meio do monitoramento de longo prazo que podemos identificar
                e tentar entender as variações inesperadas no ambiente e nas
                populações das variadas espécies. No OAMa, o monitoramento é
                nossa atividade central, sendo feito com base em estações de
                anilhamento de aves e com amostragem por pontos fixos de escuta
                e visualização de aves como método complementar. Todas as
                atividades de pesquisa possuem licenças ambientais e permissões
                de coleta de dados concedidas pelos órgãos competentes. Até o
                momento, essas atividades têm sido financiadas exclusivamente
                por nossos filiados e doadores.{' '}
              </p>
            </div>
          </div>
          <div className='mb-8 flex flex-wrap items-center justify-center   md:flex-row'>
            <div className='w-3/5  p-2 sm:w-1/3 sm:p-6'>
              <div>
                <Image
                  alt='Serra da Mantiqueira'
                  className='rounded-full'
                  layout='responsive'
                  src='/projetos/aves_mantiqueira.jpg'
                  width={200}
                  objectFit='cover'
                  height={200}
                ></Image>
              </div>
            </div>

            <div className='w-full p-6 sm:w-2/3'>
              <h3 className='text-justify-center mb-3 text-3xl font-bold leading-none text-gray-800'>
                Avifauna da Mantiqueira
              </h3>
              <p className='mb-8 text-gray-600'>
                Desde o século XIX, a Mantiqueira tem sido visitada por
                naturalistas interessados em coletar espécimes e descrever a
                biodiversidade brasileira. Nesse sentido, as aves foram um dos
                primeiros grupos a serem amostrados, especialmente na região do
                maciço do Itatiaia. Com o objetivo de reunir, sintetizar e
                analisar dados disponíveis sobre ocorrências de aves na Serra da
                Mantiqueira, os pesquisadores do OAMa pretendem identificar
                padrões e tendências espaciais, temporais e metodológicas de
                amostragem e finalmente determinar o número exato de espécies de
                aves registradas na região. Além de gerar conhecimento
                científico, este projeto pretende fornecer as informações
                sistematizadas, para todos os interessados, de modo online e
                gratuito. Até o momento, este projeto é totalmente financiado
                por nossos doadores.
              </p>
            </div>
          </div>
          <div className='mb-8 flex flex-wrap  items-center justify-center   md:flex-row-reverse'>
            <div className='w-3/5  p-2 sm:w-1/3 sm:p-6'>
              <div>
                <Image
                  className='rounded-full border-8 border-gray-200'
                  alt='Anilhamento em ação'
                  src='/projetos/saltator.jpg'
                  layout='responsive'
                  width={200}
                  objectFit='cover'
                  height={200}
                ></Image>
              </div>
            </div>

            <div className='w-full p-6 sm:w-2/3'>
              <h3 className='text-justify-center mb-3 text-3xl font-bold leading-none text-gray-800'>
                Saltator - app de aprendizado de vocalização de aves
              </h3>
              <p className='text-gray-600 '>
                O Saltator é um projeto que já está em andamento e envolve um
                jogo, em plataforma virtual, pensado para estimular a
                aprendizagem progressiva dos cantos das aves. O jogo, que poderá
                ser acessado a partir de celulares, tablets e computadores,
                baseia-se no sistema de repetição espaçada, em que um certo
                conhecimento é apresentado ao jogador, para memorização, em
                intervalos e ordem definidos por sua proficiência. Para otimizar
                o aprendizado, o usuário poderá estudar, inicialmente, cantos de
                espécies da avifauna da Mantiqueira, sendo que o conjunto de
                espécies será definido por meio de dados obtidos da plataforma
                de ciência cidadã eBird. Este projeto é parcialmente financiado
                pelo edital PAPE CRBio-04 2021-1.{' '}
              </p>
            </div>
          </div>
          <div className='mb-8 flex flex-wrap items-center justify-center   md:flex-row'>
            <div className='w-3/5  p-2 sm:w-1/3 sm:p-6'>
              <div>
                <Image
                  alt='Serra da Mantiqueira'
                  className='rounded-full'
                  layout='responsive'
                  src='/projetos/dia_de_campo.jpg'
                  width={200}
                  objectFit='cover'
                  height={200}
                ></Image>
              </div>
            </div>

            <div className='w-full p-6 sm:w-2/3'>
              <h3 className='text-justify-center mb-3 text-3xl font-bold leading-none text-gray-800'>
                Divulgação científica - Dia de Campo: descobrindo as aves
              </h3>
              <p className='mb-8 text-gray-600'>
                O diálogo e a comunicação com a sociedade são prioridades para o
                OAMa. Afinal, criar pontes entre ciência e sociedade é o pilar
                sobre o qual construímos nossa organização. O projeto "Dia de
                Campo'' tem por objetivo informar sobre ciência, pesquisa
                científica, aves e conservação a crianças, jovens e adultos,
                sempre de forma interativa, participativa e fluida. Nossa
                proposta tem sido desenvolver uma atividade na qual as pessoas
                possam visitar uma área de estudo do OAMa para observar, ao
                vivo, como é feita a coleta de dados. A proposta tem em sua base
                teórica um currículo interativo sobre a biodiversidade,
                conservação e biologia das aves, com guias e sugestões de
                atividades para serem realizadas com os visitantes, tópicos e
                questões para serem abordados, além de materiais para exposição
                e distribuição.{' '}
              </p>
            </div>
          </div>
          <div className='mb-8 flex flex-wrap  items-center justify-center   md:flex-row-reverse'>
            <div className='w-3/5  p-2 sm:w-1/3 sm:p-6'>
              <div>
                <Image
                  className='rounded-full border-8 border-gray-200'
                  alt='Anilhamento em ação'
                  src='/projetos/redes_sociais.jpg'
                  layout='responsive'
                  width={200}
                  objectFit='cover'
                  height={200}
                ></Image>
              </div>
            </div>

            <div className='w-full p-6 sm:w-2/3'>
              <h3 className='text-justify-center mb-3 text-3xl font-bold leading-none text-gray-800'>
                Divulgação científica - Redes sociais
              </h3>
              <p className='text-gray-600 '>
                Conscientes de que a disseminação da Ciência, em linguagem
                acessível, possibilita a sensibilização e reflexão crítica sobre
                as relações entre cultura, sociedade, meio ambiente e economia,
                buscamos trabalhar temas que envolvem a biodiversidade de aves a
                partir dessas dimensões – tráfico de animais silvestres,
                impactos ambientais, espécies ameaçadas, técnicas de pesquisa em
                ornitologia, biodiversidade de aves e muitos outros temas já
                foram abordados. Neste sentido, utilizamos as redes sociais, em
                especial o Instagram, para compartilhar nossas atividades de
                pesquisa e Educação. Nessa plataforma compartilhanos também
                ações nas quais somos colaboradores, como o Plano de Ação
                Nacional das Aves da Mata Atlântica. Para realizar este projeto,
                contamos com a dedicação de um grupo de colaboradores e
                voluntários, coordenados por nossa equipe, para a pesquisa e
                desenvolvimento dos materiais propostos. Esta atividade contou
                com o apoio do CRBio-04, pelo edital PAPE CRBio-04 2021-1, e é
                continuamente financiada pelas contribuições de nossos filiados
                e doadores.
              </p>
            </div>
          </div>
          <div className='mb-8 flex flex-wrap items-center justify-center   md:flex-row'>
            <div className='w-3/5  p-2 sm:w-1/3 sm:p-6'>
              <div>
                <Image
                  alt='Serra da Mantiqueira'
                  className='rounded-full'
                  layout='responsive'
                  src='/projetos/cursos.jpg'
                  width={200}
                  objectFit='cover'
                  height={200}
                ></Image>
              </div>
            </div>

            <div className='w-full p-6 sm:w-2/3'>
              <h3 className='text-justify-center mb-3 text-3xl font-bold leading-none text-gray-800'>
                Cursos
              </h3>
              <p className='text-gray-600 '>
                A capacitação e o treinamento de profissionais para o emprego de
                técnicas de estudo e pesquisa em Ornitologia são essenciais para
                a qualidade dos trabalhos desenvolvidos e dos dados coletados,
                como também para o bem-estar dos animais estudados. Para nós,
                promover oportunidades de capacitação técnica é uma forma de
                contribuir para o desenvolvimento de ciência de qualidade no
                Brasil. Por isso, elaboramos e oferecemos cursos em nossas áreas
                de especialidade técnica. Buscamos realizar a capacitação de
                anilhadores de aves no Brasil, com um programa de treinamento
                focado na ética, qualidade dos dados e bem-estar das aves. O
                Curso Básico de Anilhamento de Aves e o Curso de Análise de Muda
                e Determinação de Idade são os pilares da nossa base em Educação
                Técnica.
              </p>
              <p className='text-gray-600 '>
                Promovemos também cursos em áreas relacionadas à ornitologia,
                voltados para o público não acadêmico/técnico. Cursos como
                “Fotografia e edição de fotos de aves”, ministrado por nossos
                parceiros da BirdsAtlantic, fazem parte de nossa programação
                anual.
              </p>
              <p className='mb-8 text-gray-600'>
                Para saber mais sobre os cursos que o OAMa oferece,{' '}
                <span className='font-bold text-yellow-600 underline'>
                  <Link href='/treinamento-cursos'>acesse aqui</Link>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
