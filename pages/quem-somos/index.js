import Nav from '@includes/nav';
import { useEffect, useRef } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '@includes/footer';

export default function QuemSomos() {
  return (
    <>
      <div className='pb-32'>
        <Head>
          <title>Quem somos</title>
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
              ></Image>
            </div>
          </div>
        </div>

        <div className='mt-16'>
          <div className='mb-24'>
            <h1 class='w-full text-center text-5xl font-bold leading-tight text-gray-800'>
              Quem Somos{' '}
            </h1>
            <div class='mb-4 w-full'>
              <div class='gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25'></div>
            </div>

            <div class='container mx-auto mb-12 max-w-4xl text-center text-2xl'>
              <p class='px-8 text-gray-800 md:px-0 '>
                O OAMa é movido por uma pequena equipe de trabalho e uma grande
                rede de apoio.
              </p>
            </div>
          </div>
          <div class='container mx-auto mb-12 max-w-4xl '>
            <div className='mb-24'>
              <p className='text-center text-4xl font-bold text-gray-800'>
                Equipe
              </p>
              <div class='mb-4 w-full'>
                <div class='gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25'></div>
              </div>
              <p class='mb-2 px-8 text-center text-xl text-gray-600 md:px-0'>
                {' '}
                Nossa equipe de trabalho, que coordena e executa as atividades
                continuamente
              </p>

              <div class='mb-8 flex flex-wrap  items-center justify-around   md:flex-row-reverse'>
                <div class='m-2 w-3/5 rounded-full  shadow-lg sm:m-6 sm:w-1/4'>
                  <div>
                    <Image
                      className='rounded-full border-8 border-gray-200'
                      src='/people/AffonsoSouza.jpg'
                      layout='responsive'
                      width={50}
                      objectFit='cover'
                      height={50}
                    ></Image>
                  </div>
                </div>

                <div class='w-full p-6 sm:w-2/3'>
                  <h3 class='text-justify-center mb-1 text-3xl font-bold leading-none text-gray-800'>
                    Affonso Souza{' '}
                  </h3>
                  <h4 class='text-justify-center mb-3 text-xl font-bold leading-none text-gray-800'>
                    Coordenador de projetos{' '}
                  </h4>

                  <p class='text-gray-600 '>
                    Biólogo com mestrado em ecologia. Trabalha com aves desde
                    2012, com especial interesse em manejo de fauna e ecologia
                    aplicada.
                  </p>
                  <a
                    className='underline'
                    target='_blank'
                    href='http://lattes.cnpq.br/6486611783204721'
                  >
                    Lattes
                  </a>
                  <a
                    className='ml-1 underline'
                    target='_blank'
                    href='mailto:asouza@oama.eco.br
'
                  >
                    E-mail
                  </a>
                </div>
              </div>

              <div class='mb-1 flex flex-wrap items-center justify-center   md:flex-row'>
                <div class='m-2 w-3/5 rounded-full   shadow-lg sm:m-6 sm:w-1/4'>
                  <div>
                    <Image
                      className='rounded-full'
                      layout='responsive'
                      src='/people/LuizaFigueira.jpg'
                      width={200}
                      objectFit='cover'
                      height={200}
                    ></Image>
                  </div>
                </div>

                <div class='w-full p-6 sm:w-2/3'>
                  <h3 class='text-justify-center mb-1 text-3xl font-bold leading-none text-gray-800'>
                    Luiza Figueira{' '}
                  </h3>
                  <h4 class='text-justify-center mb-3 text-xl font-bold leading-none text-gray-800'>
                    Coordenadora geral{' '}
                  </h4>

                  <p class='text-gray-600'>
                    Bióloga com mestrado em ecologia, trabalha com aves desde
                    2012 e tem maior interesse em biologia da conservação e
                    restauração ecológica.
                  </p>
                  <a
                    className='underline'
                    target='_blank'
                    href='http://lattes.cnpq.br/7358568761825100'
                  >
                    Lattes
                  </a>
                  <a
                    className='ml-1 underline'
                    target='_blank'
                    href='mailto:lfigueira@oama.eco.br
'
                  >
                    E-mail
                  </a>
                </div>
              </div>

              <div class='mb-8 flex flex-wrap  items-center justify-around   md:flex-row-reverse'>
                <div class='m-2 w-3/5 rounded-full  shadow-lg sm:m-6 sm:w-1/4'>
                  <div>
                    <Image
                      className='rounded-full border-8 border-gray-200'
                      src='/people/PedroMartins.jpg'
                      layout='responsive'
                      width={50}
                      objectFit='cover'
                      height={50}
                    ></Image>
                  </div>
                </div>

                <div class='w-full p-6 sm:w-2/3'>
                  <h3 class='text-justify-center mb-1 text-3xl font-bold leading-none text-gray-800'>
                    Pedro Martins{' '}
                  </h3>
                  <h4 class='text-justify-center mb-3 text-xl font-bold leading-none text-gray-800'>
                    Coordenador de dados{' '}
                  </h4>

                  <p class='text-gray-600 '>
                    Biólogo com mestrado em ecologia e programador. Trabalha com
                    aves desde 2010 e tem maior interesse na coleta, manejo e
                    análise de dados ornitológicos.
                  </p>
                  <a
                    className='underline'
                    target='_blank'
                    href='http://lattes.cnpq.br/1082589394374306'
                  >
                    Lattes
                  </a>
                  <a
                    className='ml-1 underline'
                    target='_blank'
                    href='mailto:pmartins@oama.eco.br'
                  >
                    E-mail
                  </a>
                </div>
              </div>

              <div class='mb-8  flex  flex-wrap items-center   justify-around'>
                <div class='m-2 w-3/5 rounded-full  shadow-lg sm:m-6 sm:w-1/4'>
                  <div>
                    <Image
                      className='rounded-full border-8 border-gray-200'
                      src='/people/VeronicaBattezine.jpg'
                      layout='responsive'
                      width={50}
                      objectFit='cover'
                      height={50}
                    ></Image>
                  </div>
                </div>

                <div class='w-full p-6 sm:w-2/3'>
                  <h3 class='text-justify-center mb-1 text-3xl font-bold leading-none text-gray-800'>
                    Veronica Battezini
                  </h3>
                  <h4 class='text-justify-center mb-3 text-xl font-bold leading-none text-gray-800'>
                    Gestão Estratégica
                  </h4>

                  <p class='text-gray-600 '>
                    Com formação em Hotelaria e Turismo, direciona seu trabalho
                    e pesquisa para conservação da natureza há 12 anos.
                  </p>
                  {/* <a
                    className='underline'
                    target='_blank'
                    href='http://lattes.cnpq.br/8368168241557725'
                  >
                    Lattes
                  </a> */}
                  <a
                    className='ml-1 underline'
                    target='_blank'
                    href='mailto:assessoria@oama.eco.br'
                  >
                    E-mail
                  </a>
                </div>
              </div>

              <div class='mb-8  flex  flex-wrap items-center   justify-around md:flex-row-reverse'>
                <div class='m-2 w-3/5 rounded-full  shadow-lg sm:m-6 sm:w-1/4'>
                  <div>
                    <Image
                      className='rounded-full border-8 border-gray-200'
                      src='/people/OtávioRocha.jpg'
                      layout='responsive'
                      width={50}
                      objectFit='cover'
                      height={50}
                    ></Image>
                  </div>
                </div>

                <div class='w-full p-6 sm:w-2/3'>
                  <h3 class='text-justify-center mb-1 text-3xl font-bold leading-none text-gray-800'>
                    Otávio Rocha{' '}
                  </h3>
                  <h4 class='text-justify-center mb-3 text-xl font-bold leading-none text-gray-800'>
                    Auxiliar de comunicação e divulgação científica
                  </h4>

                  <p class='text-gray-600 '>
                    Biólogo e anilhador júnior. Atua na área da ornitologia
                    desde 2018 e tem afinidade por ecologia e biologia
                    reprodutiva de aves florestais e marinhas.{' '}
                  </p>
                  <a
                    className='underline'
                    target='_blank'
                    href='http://lattes.cnpq.br/8368168241557725'
                  >
                    Lattes
                  </a>
                  <a
                    className='ml-1 underline'
                    target='_blank'
                    href='mailto:orocha@oama.eco.br'
                  >
                    E-mail
                  </a>
                </div>
              </div>

              <div class='mb-8 flex flex-wrap  items-center justify-around   '>
                <div class='m-2 w-3/5 rounded-full  shadow-lg sm:m-6 sm:w-1/4'>
                  <div>
                    <Image
                      className='rounded-full border-8 border-gray-200'
                      src='/people/DanielleSantos.jpg'
                      layout='responsive'
                      width={50}
                      objectFit='cover'
                      height={50}
                    ></Image>
                  </div>
                </div>

                <div class='w-full p-6 sm:w-2/3'>
                  <h3 class='text-justify-center mb-1 text-3xl font-bold leading-none text-gray-800'>
                    Danielle Santos
                  </h3>
                  <h4 class='text-justify-center mb-3 text-xl font-bold leading-none text-gray-800'>
                    Bióloga Colaboradora - Pesquisa e Monitoramento
                  </h4>

                  <p class='text-gray-600 '>
                    Bióloga, mestranda em Ecologia na UFRGS. Foi assistente de
                    monitoramento no OAMa e tem interesse na coleta e análise de
                    dados ornitológicos para aplicação na conservação.
                  </p>
                  <a
                    className='underline'
                    target='_blank'
                    href='http://lattes.cnpq.br/7737815262414078'
                  >
                    Lattes
                  </a>
                  <a
                    className='ml-1 underline'
                    target='_blank'
                    href='mailto:dsantos@oama.eco.br'
                  >
                    E-mail
                  </a>
                </div>
              </div>
            </div>
            <div class='container  mx-auto mb-12 max-w-4xl'>
              <p className='text-center text-4xl font-bold text-gray-800'>
                Bolsistas
              </p>
              <div class='mb-4 w-full'>
                <div class='gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25'></div>
              </div>
              <div className='mb-8 px-8 text-xl text-gray-600 md:px-0'>
                <p className='mb-2'>
                  {' '}
                  Parte da nossa equipe que colabora em tempo parcial com os
                  projetos do OAMa{' '}
                </p>
              </div>
              <div className='mt-8 grid w-full grid-cols-1 sm:grid-cols-3'>
                <CollaboratorCard
                  name='Rafaella Vitti Ferneda'
                  postion='Divulgação Científica'
                  image='/people/RafaellaFerneda.jpg'
                ></CollaboratorCard>
                <CollaboratorCard
                  name='Andreza Oliveira'
                  postion='Divulgação Científica'
                  image='/people/AndrezaOliveira.jpg'
                ></CollaboratorCard>
                <CollaboratorCard
                  name='Caroline Nogueira'
                  postion='Divulgação Científica'
                  image='/people/CarolineNogueira.jpg'
                ></CollaboratorCard>
              </div>
            </div>
            <div class='container  mx-auto mb-24 max-w-4xl '>
              <p className='text-center text-4xl font-bold text-gray-800'>
                Colaboradores
              </p>
              <div class='mb-4 w-full'>
                <div class='gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25'></div>
              </div>
              <p class='mb-8 px-8 text-xl text-gray-600  md:px-0'>
                {' '}
                Nossos membros colaboradores, que contribuem com suas
                especialidades voluntariamente quando precisamos.
              </p>
              <div className='grid w-full grid-cols-1 sm:grid-cols-3'>
                <CollaboratorCard
                  name='Dirlene Martins'
                  postion='Revisora do texto em português'
                  image='/people/DirleneRibeiro.jpg'
                  site='https://alemdasletrasdrm.wordpress.com'
                ></CollaboratorCard>
                <CollaboratorCard
                  name='Ellen Campbell'
                  postion='Revisora do texto em inglês'
                  image='/people/EllenCampbell.jpg'
                ></CollaboratorCard>
                <CollaboratorCard
                  name='Renata Miwa'
                  postion='Designer'
                  image='/people/RenataMiwa.jpg'
                  site='https://www.instagram.com/renatamiwa/'
                ></CollaboratorCard>
              </div>
            </div>

            <div class='container  mx-auto mb-12 max-w-4xl '>
              <p className='text-center text-4xl font-bold text-gray-800'>
                Parcerias
              </p>
              <div class='mb-4 w-full'>
                <div class='gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25'></div>
              </div>
              <p class='mb-2 px-8 text-xl text-gray-600  md:px-0'>
                {' '}
                Organizações, instituições, grupos de pesquisa, iniciativas
                privadas e pessoas físicas com quem mantemos uma relação de
                parceria em atividades específicas ou num contexto geral.
              </p>
              <div className='mt-8 grid w-full grid-cols-1 sm:grid-cols-3'>
                <CollaboratorCard
                  name='Klamath Bird Observatory'
                  image='/partners/kbo.jpg'
                  site='http://www.klamathbird.org'
                  border
                ></CollaboratorCard>
                <CollaboratorCard
                  name='Simone Coimbra'
                  image='/partners/SiCoimbra.jpg'
                  site='https://instagram.com/si_coimbra'
                ></CollaboratorCard>
                <CollaboratorCard
                  name='ColaboraNóbrega'
                  image='/partners/colabora.jpg'
                  border
                  site='https://instagram.com/colaboranobrega'
                ></CollaboratorCard>

                <CollaboratorCard
                  name='BirdsAtlantic'
                  image='/partners/birds atlantic.jpg'
                  border
                  site='https://www.birdsatlantic.com/'
                ></CollaboratorCard>
                {/* <CollaboratorCard
                name="RPPN Fazenda Boa Vista - MG"
                image="/partners/LarissaDiniz.jpg"
              ></CollaboratorCard> */}
                <CollaboratorCard
                  name='Observatório de Aves - Instituto Butantan'
                  image='/partners/Butanta.jpg'
                  border
                  site='https://www.facebook.com/observatoriodeavesibu'
                ></CollaboratorCard>
                {/* <CollaboratorCard
                name="Observatório de Aves do Pampa"
                image="/partners/OtávioRocha.jpeg"
              ></CollaboratorCard> */}
                <CollaboratorCard
                  name='PAN Aves da Mata Atlântica'
                  image='/partners/PAN_MA.jpg'
                  border
                  site='https://www.icmbio.gov.br/portal/faunabrasileira/planos-de-acao/2865-plano-de-acao-nacional-para-a-conservacao-das-aves-da-mata-atlantica'
                ></CollaboratorCard>
                <CollaboratorCard
                  name='Aves Noronha'
                  image='/partners/aves_noronha.jpg'
                  site='https://www.instagram.com/avesdenoronha/'
                  border
                ></CollaboratorCard>
                {/* <CollaboratorCard
                  name='Previr'
                  image='/partners/previr.jpg'
                  site=''
                  border
                ></CollaboratorCard> */}
                <CollaboratorCard
                  name='Visconde de Mauá Apaixonante'
                  image='/partners/vmaua.png'
                  site=''
                  border
                ></CollaboratorCard>
              </div>
            </div>
            <div class='container  mx-auto max-w-4xl '>
              <p className='text-center text-4xl font-bold text-gray-800'>
                Institucional
              </p>
              <div class='mb-4 w-full'>
                <div class='gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25'></div>
              </div>
              <p class='mb-2 px-8 text-center text-xl text-gray-600 md:px-0'>
                {' '}
                O OAMa é uma ONG composta por associados e diretoria. Os
                associados são responsáveis por definir os rumos da organização,
                enquanto a diretoria é o núcleo que representa o OAMa
                burocraticamente.{' '}
              </p>
              <div className='p-6'>
                <p className='mb-2 text-center text-xl font-bold text-gray-800'>
                  Diretoria
                </p>
                <ul className='text-center text-gray-700'>
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
              <div className='flex flex-col items-center p-6'>
                <p className='mb-2 text-center text-xl font-bold text-gray-800'>
                  Associados
                </p>
                <ul className='text-gray-700'>
                  <li>Affonso Henrique de Souza, biólogo</li>
                  <li>Felipe Cotrim, jornalista</li>
                  <li>Julia Rodrigues, fotógrafa</li>
                  <li>Luiza Figueira, bióloga</li>
                  <li>Pedro Martins, biólogo</li>
                  <li>Renata Miwa, artista plástica e designer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

const CollaboratorCard = (props) => {
  const { name, postion, image, site, border } = props;

  return (
    <div className='flex items-center justify-start p-2 sm:flex-col'>
      <div className={`w-1/4 rounded-full shadow-lg  sm:w-1/2`}>
        <Image
          className='rounded-full '
          src={image}
          layout='responsive'
          width={100}
          objectFit='cover'
          height={100}
        ></Image>
      </div>

      <div class='flex w-2/3 flex-col p-2 sm:w-full'>
        <h3 class='mb-1 text-center text-lg font-bold leading-none text-gray-800'>
          {name}
        </h3>
        <h4 class='text-md mb-3 text-center font-bold leading-none text-gray-800'>
          {postion}{' '}
        </h4>
        {site ? (
          <a
            href={site}
            target='_blank'
            class='mb-3 text-center text-sm leading-none text-gray-800 underline'
          >
            Site
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
