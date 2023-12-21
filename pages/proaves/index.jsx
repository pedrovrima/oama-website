import Image from 'next/image';
import Head from 'next/head';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion';

import Footer from '@includes/footer';
import Nav from '@includes/nav';

import Intro from '../../components/pro-aves/intro';
import Sonora from '../../components/pro-aves/sonora';
import Luminosa from 'components/pro-aves/luminosa';
import Pets from 'components/pro-aves/pets';
import Comedouros from 'components/pro-aves/comedouro';
import Trafico from 'components/pro-aves/trafico';
import Colisao from 'components/pro-aves/colisao';

const image = require('public/proaves/intro (copy)/fig1.jpg');

export default function ProAves() {
  return (
    <>
      <div className='pb-32'>
        <Head>
          <title>Ações Pró-Aves</title>
        </Head>

        <Nav />
        <div className='relative hero-small md:hero min-h-1/2'>
          <div className='items-center h-full pt-32 justify-items-center md:pb-16 lg:pb-16'>
            <div className='absolute top-0 w-full h-full'>
              <Image
                // className="h-32"
                src='/heros/proaves.jpg'
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
            <h1 className='w-full text-5xl font-bold leading-tight text-center text-gray-800'>
              Ações Pró-Aves{' '}
            </h1>
            <div className='w-full mb-4'>
              <div className='w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient'></div>
            </div>
          </div>
        </div>
        <div className='container max-w-4xl mx-auto mb-12'>
          <div className='px-6 mb-24 text-gray-600'>
            <Image
              src={image}
              height={image.default.height}
              width={image.default.width}
              layout='responsive'
            ></Image>
            <p className='mt-4 mb-4'>
              Ano após ano, populações de aves sofrem impactos diretos e
              indiretos de ações humanas. Esse efeito negativo de nossas ações
              sobre a biodiversidade pode ser associado ao crescimento
              populacional humano, consumo excessivo de recursos e materiais, a
              expansão das cidades e aos avanços tecnológicos que inserem novos
              hábitos, costumes e alterações na paisagem. Embora grande parte
              destas ações sejam de caráter coletivo,{' '}
              <span className='font-bold'>
                algumas mudanças nos hábitos individuais de cada pessoa podem
                impedir a morte de centenas de aves
              </span>
              .
            </p>
            <p className='mb-4'>
              O Observatório de Aves da Mantiqueira, OAMa, acredita que todos
              podemos associar ao seu modo de vida algumas ações que favoreçam a
              conservação das aves e seus habitats e por isso realiza atividades
              para fomentar ações Pró-Aves na vida e no dia-a-dia de todo
              brasileiro.
            </p>
            <p className='mb-4'>
              Essa campanha tem como objetivo apresentar alguns dos principais
              problemas que afetam as aves e que podem ser mitigados com ações
              simples de cada pessoa. Aqui você vai conhecer sobre o problema da
              caça e tráfico de animais silvestres, sobre o inimigo invisível
              que gera a morte por colisão das aves, sobre a problemática das
              poluições luminosa e sonora e outros.
            </p>
            <p className='mb-4'>
              A mudança precisa de todos nós para acontecer!
            </p>
          </div>
          <Accordion
            collapsible
            multiple
            className='border-2 border-gray-700 rounded-lg'
          >
            <Intro></Intro>
            <Trafico />
            <Pets />
            <Comedouros />
            <Colisao></Colisao>
            <Sonora></Sonora>
            <Luminosa></Luminosa>
          </Accordion>

          <h3 className='w-full mt-8 mb-2 text-xl font-bold text-center text-gray-800'>
            {' '}
            Pesquisa e elaboração de textos:
          </h3>
          <ul className='w-full text-center text-gray-600'>
            <li className=''>Affonso Souza</li>
            <li className=''>Andreza Freitas</li>
            <li className=''>Danielle Santos</li>
            <li className=''>Luiza Figueira</li>
            <li className=''>Otávio Rocha</li>
            <li className=''>Rafaela Vitti</li>
            <li className=''>Ruan Vaz</li>
          </ul>

          <h3 className='w-full mt-8 mb-2 text-xl font-bold text-center text-gray-800'>
            {' '}
            Montagem do website:
          </h3>
          <ul className='w-full text-center text-gray-600'>
            <li className=''>Pedro Martins</li>
          </ul>

          <h3 className='w-full mt-8 mb-2 text-xl font-bold text-center text-gray-800'>
            {' '}
            Realização:
          </h3>
          <div className='flex flex-wrap items-center justify-center w-full px-6 text-gray-600'>
            <Image height={150} width={150} src={'/jacucara/logos/OAMA.png'} />
            <Image height={120} width={190} src={'/jacucara/logos/PAN.png'} />
            <Image
              height={80}
              width={150}
              src={'/jacucara/logos/cemave icmbio.png'}
            />
          </div>

          <h3 className='w-full mt-8 mb-2 text-xl font-bold text-center text-gray-800'>
            {' '}
            Apoio:
          </h3>

          <div className='flex flex-wrap items-center justify-center w-full gap-2 px-6 text-gray-600 md:gap-6'>
            <Image
              height={90}
              width={90}
              src={'/proaves/logos/batlantic.png'}
            />
            <Image height={70} width={70} src={'/proaves/logos/crbio.png'} />
            <Image

              height={150}
              width={150}
              src={'/proaves/logos/windowAlert.png'}
            />
           
          </div>
          </div>
        </div>

      <Footer></Footer>
    </>
  );
}
