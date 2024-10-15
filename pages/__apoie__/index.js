import Nav from '@includes/nav';
import { useEffect, useRef } from 'react';

import Image from "next/legacy/image";
import Head from 'next/head';
import Footer from '@includes/footer';

export default function Apoie() {
  return (
    <>
      <div className='pb-32'>
        <Head>
          <title>Apoie</title>
        </Head>

        <Nav />
        <div className=' hero-small md:hero relative min-h-1/2'>
          <div className='h-full items-center justify-items-center pt-32  md:pb-16 lg:pb-16'>
            <div className='absolute top-0 h-full w-full'>
              <Image
                // className="h-32"
                src='/heros/apoie.jpg'
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
          <h1 class='w-full text-center text-5xl font-bold leading-tight text-gray-800'>
            Apoie{' '}
          </h1>
          <div class='mb-4 w-full'>
            <div class='gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25'></div>
          </div>

          <div class='container mx-auto max-w-4xl '>
            <p class='mb-2 px-8 text-gray-600 md:px-0'>
              O Observatório de Aves da Mantiqueira (OAMa) é uma iniciativa sem
              fins lucrativos e independente, que só é viável graças à energia,
              dedicação e colaboração de pessoas que acreditam que, juntos,
              podemos fazer a diferença na Mata Atlântica.
            </p>
            <p class='mb-2 px-8 text-gray-600 md:px-0'>
              {' '}
              Toda doação feita para o OAMa é direcionada para a realização de
              nossos projetos de pesquisa e de educação. Tornando-se um filiado
              ou fazendo uma doação para o OAMa, você apoia a conservação de
              aves e habitats brasileiros com base em pesquisas científicas. Sua
              participação será extremamente apreciada pelo OAMa, e nós nos
              comprometemos em transformar a sua colaboração em pesquisa,
              conhecimento e conservação!
            </p>

            <p className='mb-8 px-8 text-gray-600 md:px-0'>
              {' '}
              Para compor nossa rede de colaboração, acesse a{' '}
              <a
                className='font-bold text-yellow-400'
                target='_blank'
                href='https://www.catarse.me/filiadosoama'
              >
                Campanha de Filiação no Catarse
              </a>{' '}
              e escolha a categoria que mais se encaixa com você. Temos
              diferentes <strong>opções de contribuição e recompensas </strong>
              elaboradas com todo carinho e dedicação.
            </p>

            <p className='mb-8 px-8 text-gray-600 md:px-0'>
              Doações avulsas podem ser feitas pelo{' '}
              <a
                className='font-bold text-yellow-400'
                target='_blank'
                href='https://www.paypal.com/donate/?hosted_button_id=9HRNWTKA892WS'
              >
                PayPal
              </a>{' '}
              ou por{' '}
              <strong>
                transferência/ depósito diretamente em nossa conta no Banco do
                Brasil
              </strong>
              . Também oferecemos a comodidade de se tornar um filiado pela
              opção "Fazer desta uma doação mensal" no PayPal ou por depósitos
              mensais em nossa conta no Banco do Brasil.
            </p>

            <p className='mb-8 px-8 text-gray-600 md:px-0'>
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
