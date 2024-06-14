import Nav from '@includes/nav';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '@includes/footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function QuemSomos() {
  return (
    <>
      <div className='pb-32'>
        <Head>
          <title>Estação de Pesquisa Refúgio da Boa Vista</title>
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
              Estação de Pesquisa Refúgio da Boa Vista{' '}
            </h1>
            <div className='mb-4 w-full'>
              <div className='gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25'></div>
            </div>
          </div>
        </div>
        <div className='container mx-auto mb-12 max-w-4xl '>
          <div className='w-full p-6'>
            <h3 className='text-justify-center mb-3 text-3xl font-bold leading-none text-gray-800'>
              Nossa casa, sua casa.
            </h3>
            <p className='text-gray-600 '>
              A Estação de Pesquisa (EP) do OAMa é o local onde nossa equipe
              trabalha diariamente, realiza cursos, aloja voluntários e recebe
              visitantes. Alocada na antiga pousada da Reserva Particular do
              Patrimônio Natural (RPPN) da Fazenda Boa Vista, a EP oferece
              espaço e acomodações para, além da equipe OAMa, abrirmos as portas
              para hóspedes que queiram visitar e conhecer nosso trabalho ou
              simplesmente relaxar e curtir a natureza da Serra da Mantiqueira.
            </p>
          </div>
          <div className='w-full p-6'>
            <h3 className='text-justify-center mb-3 text-3xl font-bold leading-none text-gray-800'>
              Sobre o espaço
            </h3>
            <p className='mb-4 text-gray-600 '>
              A EP tem três módulos (andares). No módulo inferior estão os
              quartos dos voluntários, nosso centro de visitantes e uma sauna a
              lenha. No módulo central, são quatro quartos para hóspedes, com
              duas camas de solteiro ou uma de casal por quarto, dois banheiros,
              uma sala com lareira, um deck, uma cozinha coletiva e uma área de
              lavanderia e varanda. No terceiro módulo está o escritório do
              OAMa, uma sala de atividades, um lavabo e mais uma varanda.
            </p>
            <p className='text-gray-600 '>
              Com exceção aos eventos fechados para grupos (cursos e afins), a
              cozinha é aberta e compartilhada entre hóspedes e equipe OAMa, bem
              como os cômodos de convivência. Cada hóspede deve trazer seus
              ingredientes para cozinhar, caso queira fazer as refeições no
              local. A cozinha é equipada com todos os utensílios básicos
              necessários para elaborar refeições. E claro, todos os usuários do
              espaço compartilhado devem seguir as regras e boas conduta para
              manter a cozinha limpa e organizada para o uso coletivo.
            </p>
          </div>
          <EPCarousel />{' '}
          <div className='w-full p-6'>
            <h3 className='text-justify-center mb-3 text-3xl font-bold leading-none text-gray-800'>
              A Fazenda Boa Vista e a Reserva Particular do Patrimônio Natural
              (RPPN)
            </h3>
            <p className='text-gray-600 '>
              A EP-OAMa fica na parte alta, na RPPN, da Fazenda Boa Vista. Uma
              Reserva Particular do Patrimônio Natural (RPPN) é uma categoria de
              unidade de conservação criada espontaneamente pela vontade do
              proprietário rural, sem desapropriação de terra. A Fazenda Boa
              Vista é uma propriedade privada de aproximadamente 100 hectares,
              dos quais cerca de metade é de floresta protegida como RPPN. A
              Fazenda é, atualmente, uma área de uso residencial e de
              conservação. Além da EP do OAMa, existem outras 7 casas na
              fazenda, todas ocupadas por moradores fixos ou sazonais. A
              altitude varia entre 1000 e 1200 metros. A temperatura média anual
              registrada para a região de Bocaina de Minas é de 17.8°C, com
              mínimas de 10°C em julho e máximas de 24.6°C em janeiro. Mas
              localmente a variação pode ser mais intensa, com a mínima
              atingindo 0°C nos dias mais frios do inverno. Nos meses de verão,
              os dias são mais quentes e as chuvas mais frequentes e intensas,
              porém as aves e outros animais estão mais ativos e as flores estão
              por todo lado. Nos dias de inverno, ocorre o contrário, dias
              frios, céu azul e ensolarado, e noites estreladas.
            </p>
          </div>
          <div className='w-full p-6'>
            <h3 className='text-justify-center mb-3 text-3xl font-bold leading-none text-gray-800'>
              Como chegar / Localização
            </h3>
            <p className='mb-4 text-gray-600 '>
              A Fazenda Boa Vista está localizada no Vale das Flores, em Bocaina
              de Minas/MG. O acesso pode ser feito por diversas rotas, as quais
              dependem do local de origem do visitante. É possível chegar de
              carro, moto e ônibus (esta última forma mais complicada, mas não
              impossível).
            </p>
            <p className='mb-4 text-gray-600 '>
              Para chegar à EP-OAMa você vai precisar passar pela entrada
              compartilhada na Fazenda Boa Vista, e estacionar seu veículo no
              estacionamento compartilhado com os moradores, que fica na área
              baixa da fazenda. Do estacionamento até a EP são aproximadamente
              800m de caminhada e uma boa subida! Não é moleza, mas é lindo! O
              caminho de subida é uma trilha larga por dentro de uma mata
              sombreada, onde é possível escutar e ver muitas aves e outros
              animais.
            </p>
            <div className='align-center flex justify-center'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.8556753168577!2d-44.503993170756644!3d-22.26634275798193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab26ce2aba56d856!2zMjLCsDE1JzU4LjgiUyA0NMKwMzAnMTIuNCJX!5e1!3m2!1spt-BR!2sbr!4v1643918890287!5m2!1spt-BR!2sbr'
                width='600'
                height='450'
                allowfullscreen=''
                loading='lazy'
              ></iframe>
            </div>
          </div>
          {/* <div className="w-full p-6">
            <h3 className="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              Hospedagem Simples{" "}
            </h3>
            <p className="text-gray-600 mb-4 ">
              Abrimos as portas para hospedagem no modelo de visitantes
              independentes, compartilhando a casa conosco. Nesse formato de
              hospedagem e visitação, o visitante aluga por dia o quarto
              privativo (para até 2 pessoas por quarto) enquanto o resto do
              espaço é compartilhado com outros eventuais hóspedes e com a
              equipe do OAMa. Não são oferecidas refeições, nem café da manhã.
              Cada hóspede é responsável por trazer/ elaborar suas refeições,
              podendo para isso usar a cozinha coletiva ou aproveitar os
              restaurantes da região.
            </p>
            <p className="text-gray-600 ">
              Valor da diária do quarto: R$150,00
              <br />
              <span className="italic">Inclui roupa de cama e toalha</span>{" "}
              <br />
              1 cama de casal ou duas de solteiro
              <br />
              Valor para até duas pessoas
            </p>
          </div>
          <div className="w-full p-6">
            <h3 className="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              Hospedagem de Grupo{" "}
            </h3>
            <p className="text-gray-600 mb-4 ">
              Oferecemos pacotes especiais para grupos fechando os 4 quartos por
              pelo menos 2 diárias. Nesse pacote pode ou não ser incluso
              serviços de refeição (caso seja agendado com antecedência mínima
              de 2 semanas).
            </p>
            <p className="text-gray-600 mb-4">
              Valor de diária 4 quartos{" "}
              <strong className="font-bold">sem alimentação</strong>: R$ 500,00
              <br />
              <span className="italic">Inclui roupa de cama e toalha</span>{" "}
              <br />
              1 cama de casal ou duas de solteiro por quarto
              <br />
              Valor para até 8 pessoas
            </p>

            <p className="text-gray-600 mb-4">
              Valor de diária 4 quartos{" "}
              <strong className="font-bold">com alimentação</strong>: R$ 950,00
              <br />
              <span className="italic">Inclui roupa de cama e toalha</span>{" "}
              <br />
              1 cama de casal ou duas de solteiro por quarto
              <br />
              Café-da-manhã, almoço e janta
              <br />
              Valor para até 4 pessoas
              <br />
              +75,00 por pessoa adicional, com máximo de 8 pessoas
              <br />
            </p>
          </div> */}
          <div>
            <p className='mb-2 px-8 text-lg font-bold'> Para reservas </p>
            <p className='mb-8 px-8'>
              Para informações sobre valores, disponibilidade e realizar
              reservas de hospedagem fale com nossa equipe pelo{' '}
              <a
                target='_blank'
                className='text-yellow-800 hover:text-yellow-600 hover:underline'
                href='/whatsapp'
              >
                WhatsApp
              </a>
              , ou mande um e-mail para{' '}
              <span className='text-yellow-800'>contato@oama.eco.br</span>.
              Aguardamos a sua visita!
            </p>

            <p className='px-8 text-lg font-bold'>
              {' '}
              Importante: Visando mitigar os contágios pelo novo coronavírus,
              recebemos apenas hóspedes com comprovação de pelo menos duas doses
              da vacina contra a covid-19 e sem sintomas da doença. O uso de
              máscaras é indispensável nas áreas de convivência coletiva da EP.{' '}
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

const EPCarousel = (props) => {
  const fotos = [
    { pic: '/fotos_ep/aerea.jpeg', legend: 'Foto aérea da EP.' },
    { pic: '/fotos_ep/frontal.jpg', legend: 'Foto frontal da EP.' },
    { pic: '/fotos_ep/lateral.jpg', legend: 'Vista lateral da EP.' },
    { pic: '/fotos_ep/piscina.jpg', legend: 'Piscina Natural.' },

    { pic: '/fotos_ep/acesso.jpg', legend: 'Trilha de acesso à EP.' },
    {
      pic: '/fotos_ep/noite.jpg',
      legend: 'Vista noturna da EP, com Pedra Selada ao fundo.',
    },
  ];

  return (
    <div className='h-100 group flex items-center justify-center sm:px-8'>
      <Carousel
        showArrows={true}
        showStatus
        autoPlay
        swipeable
        emulateTouch
        infiniteLoop
        className='my-auto mb-8 mt-2 h-72  w-full bg-gray-700 sm:mb-4 sm:h-96'
      >
        {fotos.map((img) => (
          <div className='relative h-72 w-full  sm:h-96'>
            <Image
              alt={img.legend}
              layout='fill'
              objectFit='contain'
              src={img.pic}
            ></Image>
            <div className='absolute bottom-12 flex w-full justify-center'>
              <p className='w-1/3 rounded-md bg-gray-700 p-2 text-white opacity-80 group-hover:opacity-80 sm:opacity-5 '>
                {img.legend}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
