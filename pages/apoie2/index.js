import { useCallback } from 'react';
import Nav from '@includes/nav';
import Stripe from 'stripe';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineInfo, AiOutlineInfoCircle } from 'react-icons/ai';
import useEmblaCarousel from 'embla-carousel-react';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

export const getServerSideProps = async (context) => {
  const stripe = new Stripe(
    'sk_test_51O1HMxHtuWeEBCtmsMlHY7OmbNW5lQK7W6MUmNxGaeQfP6qqP05I4XDnuxktaNx0IacnBkqcpZMFYLRmA8c78Z7i00EyklzL6z'
  );

  //load all products from stripe
  const products = await stripe.products.list({ active: true });

  //load all prices from stripe
  const prices = await stripe.prices.list();

  const paymentLinks = await stripe.paymentLinks.list();
  console.log(paymentLinks);
  //join them
  const fullProduct = products.data.map((product) => {
    return {
      ...product,
      price: prices.data.filter((price) => price.product === product.id),
    };
  });

  return {
    props: {
      products: fullProduct.sort(
        (a, b) => a.price[0].unit_amount - b.price[0].unit_amount
      ),
    },
  };
};

export default function Apoie2(props) {
  const stripe = new Stripe(
    'sk_test_51O1HMxHtuWeEBCtmsMlHY7OmbNW5lQK7W6MUmNxGaeQfP6qqP05I4XDnuxktaNx0IacnBkqcpZMFYLRmA8c78Z7i00EyklzL6z'
  );

  return (
    <div className='max-w-[100vw] overflow-hidden font-euphoria'>
      <Nav />
      <div className=''>
        <div className=' relative h-[700px] max-h-[70vh] bg-[#4E7B90]'>
          <div className='items-center h-full pt-32 hero-small md:hero justify-items-center md:pb-16 lg:pb-16'>
            <div className='absolute top-0 w-full h-full'>
              <Image
                className='z-40'
                src='/apoie/capa.png'
                layout='fill'
                //   width={"2000"}
                //   height={"1000"}
                objectFit='cover'
                objectPosition='center'
                priority={true}
              ></Image>
            </div>
            <div className='mx-auto flex h-full w-full max-w-[1024px] items-center'>
              <h1 className='z-50 w-1/2 text-5xl font-bold text-white '>
                Venha pro bando em defesa das aves da Mata Atlântica!
              </h1>
            </div>
          </div>
        </div>
        <div className='hero-path relative -top-[10px] z-20 bg-[#4E7B90] pb-24'>
          <div className='mx-auto max-w-[1024px] '>
            <div className='relative z-20 grid grid-cols-1 gap-8 md:grid-cols-5'>
              <div className='col-span-3 py-24 text-justify'>
                <P>
                  O OAMa está trabalhando para a construção coletiva de um
                  futuro melhor para as aves, para o ecossistema, e,
                  consequentemente, para nós!{' '}
                </P>
                <P>
                  Visamos um futuro em que a sociedade dê maior importância às
                  aves e em que as pessoas sejam agentes ativos para para a
                  conservação da biodiversidade. Para transformar esse futuro em
                  um presente real, utilizamos a difusão de informação e a
                  sensibilização através do conhecimento, conectando pessoas e
                  natureza em nossas ações.{' '}
                </P>
                <P>
                  Trabalhamos com uma equipe de comunicação e divulgação
                  científica que se dedica em traduzir ciência em uma
                  comunicação que dialoga de forma sensível com a sociedade.
                </P>
                <P>
                  <strong>E você pode participar desse time!</strong>
                </P>{' '}
                <P>
                  Nossos ações de comunicação e divulgação científica são
                  viabilizadas pelo apoio coletivo. Contamos com doadores e
                  filiados para a realização das ações.
                </P>
                <P>
                  <strong>Vem somar com a gente!</strong>
                </P>
                <H3>COMUNICANDO CIÊNCIA PARA A CONSERVAÇÃO</H3>
                <P>
                  Conectar pessoas com a ciência e conservação da biodiversidade
                  requer encantamento, reconhecimento e apropriação. Nossa
                  atuação nos últimos 5 anos vai além dos limites da Serra da
                  Mantiqueira, alcançando pessoas em várias partes do mundo que
                  compreendem a importância da conservação das aves e de nossos
                  ecossistemas.
                </P>
                <P>
                  A conservação ambiental precisa ser um esforço
                  multidisciplinar e coletivo.
                </P>
                <div className='relative mt-28 h-[300px] w-full rounded-lg'>
                  <Image
                    src='/apoie/35.png'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-xl'
                  />
                </div>
              </div>
              <div className='flex flex-col col-span-2'>
                <Billing products={props.products} stripe={stripe} />
                <div className='relative '>
                  <div className='absolute -top-[150px] left-[20px] w-full'>
                    <Image
                      className='z-20'
                      src='/apoie/14.png'
                      layout='fixed'
                      width={450}
                      height={450}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </div>
    </div>
  );
}

const Billing = ({ products, stripe }) => {
  const [loadingStripe, setLoadingStripe] = useState(false);
  return (
    <div className='relative px-8 py-12 h-fit min-w-fit'>
      {loadingStripe && (
        <div className='absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-[#4E7B90] opacity-80'>
          <div className='w-20 h-20 border-8 border-t-8 border-gray-300 rounded-full animate-spin border-t-slate-300' />
        </div>
      )}
      <div className='mb-8 w-full rounded-full bg-[#332139] p-4 text-center text-lg leading-5 text-white '>
        <p>TORNE-SE UM FILIADO OAMa!</p>
        <p className='text-sm'>Escolha o valor do seu apoio mensal</p>
      </div>
      <div className='grid grid-cols-2 gap-8'>
        {
          //map all products
          products.map((product) => {
            return (
              <BillingComponent
                setLoading={setLoadingStripe}
                stripe={stripe}
                product={product}
              />
            );
          })
        }
      </div>
      <div className='text-md mb-8 mt-12 w-full rounded-full bg-[#332139] p-4 text-center leading-5 text-white'>
        <p>Você também pode fazer uma doação única!</p>
        <p>É só escolher a forma de doação: </p>
      </div>
      <DonationButtonGroup />
    </div>
  );
};

const BillingComponent = ({ product, stripe, setLoading }) => {
  let currencyMaker = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: product.price[0].currency,
  });

  const getPayLink = async () =>
    await stripe.paymentLinks.create({
      line_items: [
        {
          price: product.price[0].id,
          quantity: 1,
        },
      ],
    });

  if (!product.price[0].recurring) {
    return <></>;
  }

  return (
    <div className='flex flex-col items-center justify-center mb-8'>
      <div
        onClick={async () => {
          setLoading(true);
          const payLink = await getPayLink();

          window.location.href = `${payLink.url}?locale=pt`;
        }}
        style={{ backgroundImage: `url(${product.images[0]})` }}
        className='group relative h-36 w-36 cursor-pointer rounded-full border-2 border-solid border-[transparent] bg-cover bg-center shadow-yellow-500 transition-all duration-200 ease-in-out hover:border-[#62466B] hover:shadow-2xl'
      >
        <a className='absolute -bottom-6 w-36 rounded-full bg-[#332139] px-4 py-2 text-white shadow-xl transition-all duration-200 ease-in-out group-hover:bg-[#62466B]  group-hover:shadow-2xl'>
          <p className='text-sm font-bold text-center '>{product.name}</p>
          <p className='text-sm text-center'>
            {currencyMaker.format(product.price[0].unit_amount / 100)} / mês
          </p>
        </a>
      </div>
    </div>
  );
};

const P = (props) => {
  const { color, children } = props;
  return (
    <p className={`mb-6 px-8 text-lg text-${color || 'white'} md:px-0`}>
      {children}
    </p>
  );
};

const H3 = ({ children }) => {
  return (
    <h3 className='px-8 mb-6 text-lg font-bold text-white md:px-0'>
      {children}
    </h3>
  );
};

const H2 = ({ children }) => {
  return (
    <h3 className='mb-6 px-8 text-4xl  text-[#EDC15A] md:px-0'>{children}</h3>
  );
};

const DonationButtonGroup = () => {
  const donationMethods = [
    {
      name: 'PIX',
      url: 'https://www.paypal.com/donate?hosted_button_id=3D7ZK4JG6YH4N',
      image: '/apoie/10.png',
    },
    {
      name: 'PayPal',
      url: 'https://www.paypal.com/donate?hosted_button_id=3D7ZK4JG6YH4N',
      image: '/apoie/11.png',
    },
    {
      name: 'PagSeguro',
      url: 'https://www.paypal.com/donate?hosted_button_id=3D7ZK4JG6YH4N',
      image: '/apoie/12.png',
    },
    {
      name: 'Cartão de Crédito',
      url: 'https://www.paypal.com/donate?hosted_button_id=3D7ZK4JG6YH4N',
      image: '/apoie/13.png',
    },
  ];

  return (
    <div className='z-40 grid grid-cols-2 gap-8'>
      {donationMethods.map((method) => {
        return (
          <DonationButton
            image={method.image}
            url={method.url}
            name={method.name}
          />
        );
      })}
    </div>
  );
};

const DonationButton = ({ image, url, name }) => {
  return (
    <a
      href={url}
      target='_blank'
      className='relative z-40 flex flex-row items-center group'
    >
      <div className='relative  flex h-16 w-16 items-center justify-center rounded-full bg-[#332139] group-hover:bg-[#62466B]'>
        <Image
          className='z-40'
          src={image}
          height={40}
          width={40}
          layout='fixed'
        />
      </div>
      <div className='absolute left-[2rem]  flex h-[3.0rem] w-28 items-center justify-center rounded-full bg-[#332139] p-2 text-center text-sm font-bold leading-none text-white group-hover:bg-[#62466B] '>
        {name}
      </div>
    </a>
  );
};

const FourthSection = () => {
  return (
    <>
      <div className='relative -my-[100px]  mx-auto flex h-[700px]  w-screen flex-row bg-[#4E7B90]'>
        <div className='relative mx-auto flex w-screen max-w-[1024px] items-center justify-center'>
          <div
            style={{ transform: 'scaleX(-1)', rotate: '-15deg' }}
            className='absolute -right-[200px] -top-[200px] bottom-0 z-20 '
          >
            <Image
              src='/apoie/5.png'
              layout='fixed'
              width={600}
              height={600}
            ></Image>
          </div>
          <div
            style={{ rotate: '-5deg' }}
            className='absolute -left-[350px] -top-[400px] bottom-0 z-0 '
          >
            <Image
              src='/apoie/16.png'
              layout='fixed'
              width={800}
              height={800}
            ></Image>
          </div>
          <SecondCarrousel />
        </div>
      </div>
    </>
  );
};

const ThirdSection = () => {
  return (
    <>
      <div className=' relative z-50 mx-auto flex h-[700px] max-w-[1024px] flex-row'>
        <div
          style={{ transform: 'scaleX(-1)', rotate: '-15deg' }}
          className='absolute -right-[180px] -top-[400px] bottom-0 z-50 '
        >
          <Image
            src='/apoie/8.png'
            layout='fixed'
            width={600}
            height={600}
          ></Image>
        </div>
        <div className=' z-[99]  -my-[100px] flex gap-[150px]'>
          <div className='w-[26rem]'>
            <H2>Conheça nossas ações em comunicação e divulgação científica</H2>
            <Projects />
          </div>
          <div className='pt-[200px]'>
            <EmblaCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <ul className='z-[99]'>
      {projects.map((project) => {
        return (
          <li>
            {project.url ? (
              <Link href={project.url || ''} passHref>
                <a
                  target='_blank'
                  className={`${
                    project.url && 'cursor-pointer hover:underline'
                  }`}
                >
                  <span className='font-bold text-gray-500 text-md'>
                    {project.title}
                  </span>
                  {project.description && (
                    <span className='text-sm text-gray-400'>{` - ${project.description}`}</span>
                  )}
                  <span className='text-sm text-gray-400'>{`, ${project.year}`}</span>
                </a>
              </Link>
            ) : (
              <p className={`${project.url && 'cursor-pointer underline'}`}>
                <span className='font-bold text-gray-500 text-md'>
                  {project.title}
                </span>
                {project.description && (
                  <span className='text-sm text-gray-400'>{` - ${project.description}`}</span>
                )}
                <span className='text-sm text-gray-400'>{`, ${project.year}`}</span>
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const projects = [
  {
    title: 'Livro Educativo Ornitologia Pra Todo Dia',
    description: '',
    year: '2019',
    url: 'publicacoes/files/ornito_todo_dia_OAMa.pdf',
  },
  {
    title: 'Dia de Campo',
    description: 'currículo interativo em banners',
    year: '2019',
  },
  {
    title: 'Canal do Youtube',
    description: 'documentários e seminários',
    year: '2021',
    url: 'https://www.youtube.com/@observatoriodeavesdamantiq4958',
  },
  {
    title: 'Saltator',
    description: 'jogo online',
    year: '2021',
    url: 'hhtps://saltator.oama.eco.br',
  },

  {
    title: 'Juçara, conservação e consumo consciente',
    description: 'documentário',
    year: '2021',
    url: 'https://youtu.be/FtL8dOPeu6U?si=wQTz1IFgD2Zv7Zsg',
  },
  {
    title: 'Livro de Colorir Espécies Ameaçadas de Extinção da Mata Atlântica',
    description: '',
    year: '2022',
    url: '/publicacoes/files/Oama_Livreto_Colorir_AvesAmea%C3%A7adas.pdf',
  },
  {
    title: 'Pró-Aves',
    description: 'programa educativo com folders, instalações, etc',
    year: '2022',
    url: '/proaves',
  },
  { title: 'Jacuçara', description: 'site', year: '2022', url: '/jacucara' },

  {
    title: 'Monitorando o presente, preservando o futuro',
    description: 'documentário',
    year: '2023',
    url: 'https://youtu.be/OrGmxyzla5A?si=CU_bDEvgsFo3LAJa',
  },
  {
    title: 'Guia de Aves da região de Visconde de Mauá',
    description: 'folder',
    year: '2023',
  },
  {
    title: 'Impacto de pets em aves',
    description: 'banners informativos',
    year: '2023',
  },
  {
    title: 'Campanha Jacuçara',
    description: 'banners informativos',
    year: '2023',
  },
];

const SecondSection = () => {
  return (
    <div className='  hero-path relative -top-[150px] z-0 mx-auto'>
      <div className='absolute top-0 w-full h-full'>
        <Image priority src='/apoie/34.png' layout='fill' objectFit='cover' />
      </div>
      <div className=' relative z-20 mx-auto flex max-w-[1024px] flex-row py-36'>
        <div className='absolute bottom-0 z-0 -right-10'>
          <Image
            src='/apoie/4.png'
            layout='fixed'
            width={350}
            height={350}
          ></Image>
        </div>
        <div className='w-94 z-[99]'>
          <H2>Sua participação e apoio fazem a diferença</H2>
          <P>
            Essa campanha de financiamento coletivo tem como objetivo arcar com
            os gastos mensais do programa de Comunicação e Divulgação Científica
            do OAMa
          </P>
          <div className='relative pb-36'>
            <div className=' absolute  -left-[190px] -top-[120px]  flex flex-row items-center gap-[20px]'>
              <div className='z-50 rotate-[15deg]'>
                <Image
                  src='/apoie/15.png'
                  layout='fixed'
                  width={0.2 * 3375}
                  height={0.2 * 3375}
                ></Image>
              </div>
              <div className=' absolute left-[350px] top-[240px] z-20 min-w-[500px] rounded-l-full rounded-r-full bg-[#4E7B90] py-4 pl-24 pr-12'>
                <div className='flex flex-row items-center justify-center h-full gap-4 text-white'>
                  <div className='flex flex-row items-center gap-2'>
                    <AiOutlineInfoCircle size={70} />
                    <p>Total de R$66.048,00 para o ano de 2024.</p>
                  </div>
                  <div className='h-[60px] w-1 rounded-full bg-white' />
                  <p>Meta mensal da campanha: R$5.500,00.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          className=''
          src='/apoie/grafico.png'
          layout='fixed'
          width={1 * 3375}
          height={1 * 510}
        />
      </div>
    </div>
  );
};

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = [
    {
      name: 'Livro Educativo Ornitologia Pra Todo Dia',
      image: '/apoie/28.png',
    },
    {
      name: 'Painel utilizado na atividade Dia de Campo',
      image: '/apoie/29.png',
    },
    {
      name: 'Guia de Aves de Visconde de Mauá e Região',
      image: '/apoie/30.png',
    },
    { name: 'Folders do projeto Pró-Aves', image: '/apoie/31.png' },
    {
      name: 'Livro de Colorir Espécies Ameaçadas de Extinção da Mata Atlântica',
      image: '/apoie/32.png',
    },
    {
      name: 'Folder "Tráfico e Engaiolamento" do programa Pró-Aves',
      image: '/apoie/33.png',
    },
  ];

  return (
    <div className='relative'>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container w-[400px]'>
          {slides.map((slide) => {
            return (
              <div className='embla__slide '>
                <div className='flex flex-col gap-6'>
                  <div className='flex h-[300px] w-[300px] items-center justify-center rounded-full bg-[#332139]'>
                    <Image
                      className='z-40'
                      src={slide.image}
                      layout='fixed'
                      width={350}
                      height={350}
                    />
                  </div>
                  <div className='w-[300px]  rounded-full bg-[#332139]  px-12 py-4 text-center'>
                    <p className='font-bold text-white'>{slide.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className='absolute -left-[50px] top-[125px] flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400'
          onClick={scrollPrev}
        >
          <IoIosArrowForward
            style={{ transform: 'rotate(180deg)' }}
            size={24}
            color='white'
          />
        </button>
        <button
          className='absolute left-[302px] top-[125px] flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400'
          onClick={scrollNext}
        >
          <IoIosArrowForward size={24} color='white' />
        </button>
      </div>
    </div>
  );
};

const SecondCarrousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [];
  const n1 = 51;
  const n2 = 61;

  for (let i = n1; i <= n2; i++) {
    images.push(i);
  }

  return (
    <div className='relative z-50 overflow-hidden'>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container w-[750px]'>
          {images.map((image, i) => {
            return (
              <div className='flex flex-col items-center embla__slide' key={i}>
                <div className='flex h-[400px] w-[700px] items-center justify-center rounded-xl bg-[#332139]'>
                  <Image
                    className='z-40 rounded-xl'
                    src={`/apoie/${image}.jpg`}
                    layout='fixed'
                    width={700}
                    height={400}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button
          className='absolute left-0 top-[175px] flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400'
          onClick={scrollPrev}
        >
          <IoIosArrowForward
            style={{ transform: 'rotate(180deg)' }}
            size={24}
            color='white'
          />
        </button>
        <button
          className='absolute right-0 top-[175px] flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400'
          onClick={scrollNext}
        >
          <IoIosArrowForward size={24} color='white' />
        </button>
      </div>
    </div>
  );
};
