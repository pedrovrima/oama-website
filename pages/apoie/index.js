import { useCallback } from 'react';
import Nav from '@includes/nav';
import Stripe from 'stripe';
import Image from "next/legacy/image";

import { useState } from 'react';
import { AiOutlineInfo, AiOutlineInfoCircle } from 'react-icons/ai';
import useEmblaCarousel from 'embla-carousel-react';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import Footer from '@includes/footer';
 
export const getServerSideProps = async (context) => {
  const stripe = new Stripe(process.env.STRIPE_KEY);

  //load all products from stripe
  const products = await stripe.products.list({ active: true });

  //load all prices from stripe
  const prices = await stripe.prices.list();

  const paymentLinks = await stripe.paymentLinks.list();

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
    'pk_live_51O1HMxHtuWeEBCtmR5zWi8VVXuJWWxxp8RMhWei5u9hZiaqhBxG1ZYdikkVzXD5DxLU89Z39U0XtgaafjmY0KZe500ZCTj56Ix'
  );

  return (
    <div className='max-w-[100vw] overflow-hidden font-euphoria'>
      <Nav />
      <div className=''>
        <div className=' relative h-[700px] max-h-[70vh] bg-[#4E7B90]'>
          <div className='hero-small md:hero h-full items-center justify-items-center pt-32 md:pb-16 lg:pb-16'>
            <div className='absolute top-0 h-full w-full'>
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
            <div className='mx-auto flex h-full w-full items-center lg:max-w-[1024px]'>
              <h1 className='z-50 px-12 text-5xl font-bold text-white sm:w-1/2 lg:px-0 '>
                Venha pro bando em defesa das aves da Mata Atlântica!
              </h1>
            </div>
          </div>
        </div>
        <div className='md:hero-path relative -top-[10px] z-20 bg-[#4E7B90] pb-24'>
          <div className='mx-auto md:max-w-screen-md  lg:max-w-[1024px] '>
            <div className='relative z-20 grid grid-cols-1 md:grid-cols-4 md:gap-8 lg:grid-cols-5'>
              <div className='order-3 px-8 py-24 text-justify md:order-1 md:col-span-2 md:pl-12 md:pr-0 lg:col-span-3 lg:px-0'>
                <P>
                  O OAMa está trabalhando para a construção coletiva de um
                  futuro melhor para as aves, para o ecossistema, e,
                  consequentemente, para nós!{' '}
                </P>
                <P>
                  Visamos um futuro em que a sociedade dê maior importância às
                  aves e em que as pessoas sejam agentes ativos para para a
                  conservação da biodiversidade. Para transformar esse futuro em
                  um presente real, utilizamos do monitoramento e estudo da avifauna, da
                  educação, informação e sensibilização ambiental, conectando pessoas e 
                  natureza em nossas ações.{' '}
                </P>
                <P>
                  <strong> Você pode participar desse esforço coletivo!</strong>
                </P>{' '}
                <P>
                  A existência do OAMa e o sucesso de nossas ações são viabilizados, em grande
                  parte, pelo apoio de doadores recorrentes, que dividem um pouquinho das contas 
                  e custos mensais com a gente. Compartilhamos com nossos doadores recorrentes a
                  visão de que o benefício é coletivo, e o custo também!
                </P>
                <P>
                  <strong>Vem somar com a gente.!</strong>
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
                {/* <div className='relative mt-28 h-[300px] w-full rounded-lg'>
                  <Image
                    src='/apoie/35.png'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-xl'
                  />
                </div> */}
              </div>
              <div className='order-1 col-span-2'>
                <Billing products={props.products} stripe={stripe} />
                <div className='relative '>
                  <div className='absolute -right-[200px] -top-[220px] hidden w-full md:-top-[130px] md:left-[10px] md:flex '>
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
            <div className='relative  z-[80] -mt-[50px] h-[300px] w-full md:mb-[120px] md:h-[400px] md:w-full md:rounded-lg lg:-mt-[160px] lg:mb-16 lg:w-3/5'>
              <Image
                src='/apoie/35.png'
                layout='fill'
                objectFit='cover'
                className='rounded-xl'
              />
            </div>
          </div>
        </div>

        <SecondSection />
        <ThirdSection />
        <FourthSection />

        <Footer />
      </div>
    </div>
  );
}

const Billing = ({ products, stripe }) => {
  const [loadingStripe, setLoadingStripe] = useState(false);
  return (
    <div className='relative h-fit min-w-fit px-8 py-12'>
      <div className='relative'>
        {loadingStripe && (
          <div className='absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-[#4E7B90] opacity-80'>
            <div className='h-20 w-20 animate-spin rounded-full border-8 border-t-8 border-gray-300 border-t-[#332139] opacity-100' />
          </div>
        )}
        <div className='mb-8 w-full rounded-full bg-[#332139] p-4 text-center text-lg leading-5 text-white md:mt-16 '>
          <p>TORNE-SE UM DOADOR RECORRENTE!</p>
          <p className='text-sm'>Escolha o valor do seu apoio mensal</p>
        </div>
        <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2'>
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
      </div>
      <div className='text-md mb-8 mt-12 w-full rounded-full bg-[#332139] p-4 px-12 text-center leading-5 text-white  md:mt-32 lg:mt-12'>
        <p>Você também pode fazer uma doação única!</p>
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
    await fetch('/api/getLink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: product.price[0].id }),
    }).then((res) => res.json());

  if (!product.price[0].recurring) {
    return <></>;
  }

  return (
    <div className='mb-8 flex flex-col items-center justify-center'>
      <div
        onClick={async () => {
          setLoading(true);
          const payLink = await getPayLink();

          window.location.assign(`${payLink.url}?locale=pt`);
          setLoading(false);
        }}
        style={{
          backgroundImage: `url(${product.images[0]})`,
          backgroundSize: 'cover',
        }}
        className='group relative h-36 w-36 cursor-pointer  rounded-full border-4 border-solid border-[#332139]  shadow-yellow-500 transition-all duration-200 ease-in-out hover:border-[#62466B] hover:shadow-2xl'
      >
        <a className='absolute -bottom-6 w-36 rounded-full bg-[#332139] px-4 py-2 text-white shadow-xl transition-all duration-200 ease-in-out group-hover:bg-[#62466B]  group-hover:shadow-2xl'>
          <p className='text-center text-sm font-bold '>{product.name}</p>
          <p className='text-center text-sm'>
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
    <p className={`mb-6  text-lg text-${color || 'white'} md:px-0`}>
      {children}
    </p>
  );
};

const H3 = ({ children }) => {
  return (
    <h3 className='mb-6 px-8 text-lg font-bold text-white md:px-0'>
      {children}
    </h3>
  );
};

const H2 = ({ children }) => {
  return <h3 className='mb-6 text-4xl  text-[#EDC15A] md:px-0'>{children}</h3>;
};

const DonationButtonGroup = () => {
  const donationMethods = [
    {
      name: 'PIX',
      url: '/pix',
      image: '/apoie/10.png',
    },
    {
      name: 'PayPal',
      url: 'https://www.paypal.com/donate/?hosted_button_id=9HRNWTKA892WS',
      image: '/apoie/11.png',
    },
    // {
    //   name: 'PagSeguro',
    //   url: 'https://www.paypal.com/donate?hosted_button_id=3D7ZK4JG6YH4N',
    //   image: '/apoie/12.png',
    // },
    {
      name: 'Cartão de Crédito',
      url: 'https://donate.stripe.com/3csbL34ezfRfdfa144',
      image: '/apoie/13.png',
    },
  ];

  return (
    <div className='z-40 grid auto-cols-min grid-cols-2 justify-items-center gap-2 '>
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
    (<Link
      href={url}
      passHref
      className='group relative z-40 flex w-40 flex-row items-center'
      target='_blank'>

      <div className='relative  flex h-16 w-16 items-center justify-center rounded-full bg-[#332139] group-hover:bg-[#62466B]'>
        <Image
          className='z-40'
          src={image}
          height={40}
          width={40}
          layout='fixed'
        />
      </div>
      <div className=' absolute left-[2rem]  flex h-[3.0rem] w-28 items-center justify-center rounded-full bg-[#332139] p-2 text-center text-sm font-bold leading-none text-white group-hover:bg-[#62466B] '>
        {name}
      </div>

    </Link>)
  );
};

const FourthSection = () => {
  return (
    <>
      <div className='relative mx-auto  -mb-[70px] flex h-[700px]  w-screen flex-row bg-[#4E7B90] sm:-mb-[70px] md:-mt-[100px] '>
        <div className='relative mx-auto flex w-screen items-center justify-center md:max-w-screen-md lg:max-w-[1024px]'>
          <div
            style={{ transform: 'scaleX(-1)', rotate: '-15deg' }}
            className='absolute -top-[200px] bottom-0 left-[350px] z-20 h-[600px] w-[600px] sm:-right-[400px] sm:left-auto lg:-right-[200px] '
          >
            <Image
              src='/apoie/5.png'
              layout='responsive'
              width={600}
              height={600}
            ></Image>
          </div>
          <div
            style={{ rotate: '-5deg' }}
            className='absolute -left-[550px] -top-[400px] bottom-0 right-[250px]  z-0 h-[800px] w-[800px] sm:-left-[400px] lg:-left-[350px] '
          >
            <Image
              src='/apoie/16.png'
              layout='responsive'
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
      <div className=' relative mx-auto bg-white sm:h-[1250px] md:h-[950px] md:max-w-screen-md md:flex-col   lg:h-[900px]  lg:max-w-[1024px] '>
        <div
          style={{ transform: 'scaleX(-1)', rotate: '-15deg' }}
          className='absolute -top-[120px] bottom-0 left-[400px] z-50 sm:-right-[380px] sm:-top-[90px]   md:-top-[210px] lg:-right-[200px] '
        >
          <Image
            src='/apoie/8.png'
            layout='fixed'
            width={600}
            height={600}
          ></Image>
        </div>
        <div className=' z-[99] -my-[100px] flex w-full flex-col gap-8 md:flex-row md:gap-[50px] lg:gap-[150px]'>
          <div className='w-[450px] max-w-[350px] py-12 pl-4 sm:max-w-full md:w-[26rem] md:py-0 lg:pl-0'>
            <H2>Conheça algumas de nossas ações</H2>
            <Projects />
          </div>
          <div className='mb-[220px] flex justify-center sm:mb-0 md:pt-[200px]'>
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
          <li className='pb-[8px] leading-4'>
            {project.url ? (
              (<Link
                href={project.url || ''}
                passHref
                target='_blank'
                className={` ${
                  project.url && 'cursor-pointer hover:underline'
                } `}>

                <span className='text-md font-bold text-gray-500'>
                  {project.title}
                </span>
                {project.description && (
                  <span className='text-md text-gray-400'>{` - ${project.description}`}</span>
                )}
                <span className='text-sm text-gray-400'>{`, ${project.year}`}</span>

              </Link>)
            ) : (
              <p className={`${project.url && 'cursor-pointer underline'}`}>
                <span className='text-md font-bold text-gray-500'>
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
    title: 'Canal do Youtube',
    description: 'documentários e seminários',
    year: '2021',
    url: 'https://www.youtube.com/@observatoriodeavesdamantiq4958',
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
];

const SecondSection = () => {
  return (
    <div className='  md:hero-path relative -top-[50px] z-0 mx-auto pb-24 md:-top-[200px] md:pb-0 lg:-top-[150px]'>
      <div className='absolute top-0 h-full w-full'>
        <Image priority src='/apoie/34.png' layout='fill' objectFit='cover' />
      </div>
      <div className=' relative z-20 mx-auto w-full py-24  md:max-w-screen-md md:py-48 lg:max-w-[1024px] lg:py-36'>
        <div className='absolute -bottom-[60px] -right-10 z-0 md:bottom-0'>
          <Image
            src='/apoie/4.png'
            layout='fixed'
            width={200}
            height={350}
          ></Image>
        </div>
        <div className='flex w-full flex-col lg:flex-row lg:items-center'>
          <div className=' z-[99] px-12 md:pl-12 lg:w-1/4 lg:pl-0'>
            <H2>Seu apio faz a diferença!</H2>
            <P>
              As ações do OAMa são realizadas com apoio de editais, contratações, serviços, e com a receita da marca Use.OAMa. 
             Mas a nossa existência institucional depende fortemente do apoio de doadores recorrentes.
            </P>
          </div>
          <div className='relative z-[70] h-[300px] w-full lg:w-[1600px]'>
            <Image
              src='/apoie/grafico.png'
              layout='responsive'
              width={500}
              height={300}
            ></Image>
          </div>
        </div>
        <div className='relative pb-36'>
          <div className=' absolute -top-[110px]  right-[120px] flex flex-row  items-center gap-[20px] sm:-left-[190px] md:-top-[120px]'>
            <div className='z-50 h-[650px] w-[650px] rotate-[20deg] md:rotate-[15deg]'>
              <Image
                src='/apoie/15.png'
                layout='responsive'
                width={0.2 * 3375}
                height={0.2 * 3375}
              ></Image>
            </div>
            <div className=' absolute left-[350px] top-[240px] z-20 min-w-[500px] rounded-l-full rounded-r-full bg-[#4E7B90] py-4 pl-24 pr-24 sm:left-[350px] sm:pr-12'>
              <div className='flex h-full flex-row items-center justify-center gap-4 text-white'>
                <div className='flex flex-row items-center gap-2'>
                  <AiOutlineInfoCircle className='hidden sm:flex' size={70} />
                  <p> Custo institucional anual: R$205.769,00.</p>
                </div>
                <div className='h-[60px] w-1 rounded-full bg-white' />
                <p>Nosso custo total anual: R$447.975,00.</p>
              </div>
            </div>
          </div>
        </div>
        ;
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
    <div className='relative z-[80]'>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container w-[320px] lg:w-[400px]'>
          {slides.map((slide) => {
            return (
              <div className='embla__slide '>
                <div className='flex flex-col gap-6'>
                  <div className='flex h-[300px] w-[300px] items-center justify-center rounded-full bg-[#332139]'>
                    <Image
                      className='z-[80]'
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
          className='absolute -left-[38px] top-[125px] flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 lg:-left-[50px]'
          onClick={scrollPrev}
        >
          <IoIosArrowForward
            style={{ transform: 'rotate(180deg)' }}
            size={24}
            color='white'
          />
        </button>
        <button
          className='absolute left-[290px] top-[125px] flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 lg:left-[302px]'
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
        <div className='embla__container w-screen sm:w-[550px] lg:w-[750px]'>
          {images.map((image, i) => {
            return (
              <div className='embla__slide flex flex-col items-center' key={i}>
                <div className='block  w-screen items-center justify-center rounded-xl bg-[#332139] sm:h-[285.6px] sm:w-[500px] lg:h-[400px] lg:w-[700px]'>
                  <Image
                    className='z-40 rounded-xl'
                    src={`/apoie/${image}.jpg`}
                    layout='responsive'
                    width={700}
                    height={400}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button
          className='absolute left-0 top-[40%] flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 sm:top-[120px] lg:top-[175px]'
          onClick={scrollPrev}
        >
          <IoIosArrowForward
            style={{ transform: 'rotate(180deg)' }}
            size={24}
            color='white'
          />
        </button>
        <button
          className='absolute -right-0 top-[40%] flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400  sm:right-0 sm:top-[120px] lg:top-[175px]'
          onClick={scrollNext}
        >
          <IoIosArrowForward size={24} color='white' />
        </button>
      </div>
    </div>
  );
};
