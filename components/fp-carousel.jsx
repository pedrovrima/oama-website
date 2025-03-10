import { Carousel } from 'react-responsive-carousel';
import Image from 'next/legacy/image';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const FPCarousel = (props) => {
  const fotos = [
    {
      pic: '/carousel/treinamento.jpg',
      legend: 'Programa de Treinamento',
      link: 'treinamento-cursos#acc2',
      legendText:
        'Um programa intensivo em técnicas de monitoramento de aves único no Brasil',
    },

    {
      pic: '/carousel/cursos.jpg',
      legend: 'Cursos Técnicos',
      link: '/treinamento-cursos#curso2024',
      legendText:
        'Capacitação de excelência para uma ciência de qualidade e bem-estar animal',
    },
    {
      pic: '/carousel/3.jpg',
      legend: 'Programa Ações Pró-Aves',
      link: '/proaves',
      legendText:
        'Aprenda sobre seis impactos que a humanidade gera sobre as aves e o que nós podemos fazer para mitigá-los.',
    },
    {
      pic: '/carousel/banner-percepcao.jpg',
      legend: 'Pesquisa de Percepção',
      link: 'https://www.oama.eco.br/publicacoes/files/OAMa_relatorio_percepcao.pdf',
      legendText:
        'O que a sociedade pensa sobre a conservação da Mata Atlântica',
    },
    {
      pic: '/carousel/1.jpg',
      legend: 'Portfólio OAMa',
      link: '/publicacoes/files/Portfolio_OAMa.pdf',
      legendText:
        'Conheça e compartilhe nossos objetivos, projetos, programas e conquistas.',
    },
    {
      pic: '/carousel/2.jpg',
      legend: 'Campanha Jacuçara',
      link: '/jacucara',
      legendText:
        'Uma ação pela divulgação de duas espécies ameaçadas e exclusivas da Mata Atlântica: a jacutinga e a palmeira-juçara.',
    },

    {
      pic: '/carousel/4.jpg',

      legend: 'Apoio Comunitário',
      link: '/apoie',
      legendText:
        'Essa é a força motora que dá vida às nossas ações. Junte-se ao nosso bando pela Conservação com Ciência.',
    },
  ];

  return (
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
        {fotos.map((img) => (
          <Link key={img.link} href={img.link} legacyBehavior>
            <div className='relative h-96 w-full sm:h-96'>
              <Image
                alt={img.legend}
                layout='fill'
                objectFit='cover'
                objectPosition='top'
                src={img.pic}
              ></Image>
              <div className='t-0 absolute h-full w-full bg-gradient-to-b from-transparent via-transparent to-gray-900'></div>
              <div className='absolute bottom-0 flex w-full flex-col items-start justify-start px-2 pb-8 md:px-12 md:pb-12'>
                <p className='text-3xl font-bold text-white md:text-6xl'>
                  {img.legend}
                </p>
                <p className='text-left text-lg text-white md:text-xl'>
                  {img.legendText}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export { FPCarousel };
