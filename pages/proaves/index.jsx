import { useState } from 'react';
import Nav from '@includes/nav';
import Image from 'next/image';
import { IoArrowUpCircle } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ProAves() {
  const [year, setYear] = useState(0);
  return (
    <div>
      <Nav />
      <div className='relative h-[99vh] overflow-hidden'>
        <div className=' absolute left-[120px] top-[100px] z-50'>
          <Image height={250} width={250} src={'/proaves2/logo-pro-aves.png'} />
        </div>
        <Image
          layout='fill'
          objectFit='cover'
          className=' scale-x-[-1]'
          src={'/proaves2/cover_pro_aves.jpeg'}
        />
        <div className=' absolute -bottom-[100px] -left-[160px] opacity-40'>
          <Image height={500} width={500} src={'/proaves2/blob.png'} />
        </div>
      </div>
      <div className='relative'>
        <div className=' relative overflow-x-clip'>
          <div className='relative mx-auto h-[900px] max-w-[1024px] overflow-x-clip '>
            <div
              className="
        absolute -top-[105px]
        left-[90px] z-50 h-[1100px] w-[500px] rounded-[50px]  bg-[url('/proaves2/pattern3.png')] bg-[length:97px] px-[59px] pt-[35px] drop-shadow-[10px_10px_rgba(148,114,35,0.5)]"
            >
              <h1 className='mb-[56px] text-center font-oswald text-[30px] font-[300] text-white'>
                TORNE SUA VIDA PRÓ-AVES
              </h1>
              <p className='text-[ #1E1702] mb-8 font-montserrat text-[16px] font-[400]'>
                Ano após ano, populações de aves sofrem impactos diretos e
                indiretos de ações humanas. Esse efeito negativo de nossas ações
                sobre a biodiversidade pode ser associado ao crescimento
                populacional humano, consumo excessivo de recursos e materiais,
                a expansão das cidades e aos avanços tecnológicos que inserem
                novos hábitos, costumes e alterações na paisagem. Embora grande
                parte destas ações sejam de caráter coletivo,{' '}
                <span className='font-montserratsemi text-white'>
                  algumas mudanças nos hábitos individuais de cada pessoa podem
                  impedir a morte de centenas de aves.
                </span>
              </p>
              <p className='text-[ #1E1702] mb-8 font-montserrat text-[16px] font-[400]'>
                O Observatório de Aves da Mantiqueira, OAMa, acredita que todos
                podemos associar ao seu modo de vida algumas ações que favoreçam
                a conservação das aves e seus habitats e por isso realiza
                atividades para fomentar ações Pró-Aves na vida e no dia-a-dia
                de todo brasileiro.
              </p>
              <p className='text-[ #1E1702] mb-8 font-montserrat text-[16px] font-[400]'>
                Essa campanha tem como objetivo apresentar alguns dos principais
                problemas que afetam as aves e que podem ser mitigados com ações
                simples de cada pessoa. Aqui você vai conhecer sobre o problema
                da caça e tráfico de animais silvestres, sobre o inimigo
                invisível que gera a morte por colisão das aves, sobre a
                problemática das poluições luminosa e sonora e outros.
              </p>
              <p className='font-montserratsemi text-white'>
                A mudança precisa de todos nós para acontecer!
              </p>
            </div>

            <div className=' absolute left-[830px]  top-0 z-50 hidden lg:flex'>
              <div className=' relative flex h-[400px] flex-col items-center justify-center'>
                <div className='h-full w-[3px] bg-[#CF3C3C]' />
                <div className='relative -left-[10px] -top-[60px] '>
                  <Image height={100} width={100} src={'/proaves2/t-red.png'} />
                </div>
              </div>
            </div>
            <div className=' absolute left-[1100px]  top-0 z-50 hidden lg:flex'>
              <div className=' relative flex h-[600px] flex-col items-center justify-center'>
                <div className='h-full w-[3px] bg-[#22844C]' />
                <div className='relative  -top-[80px] '>
                  <Image
                    height={110}
                    width={110}
                    src={'/proaves2/t-green.png'}
                  />
                </div>
              </div>
            </div>
            <div className=' absolute left-[570px]  top-0 z-50 hidden lg:flex'>
              <div className=' relative flex h-[800px] flex-col items-center justify-center'>
                <div className='h-full w-[3px] bg-[#8C78AB]' />
                <div className='relative  -top-[80px] right-[10px] '>
                  <Image
                    height={140}
                    width={140}
                    src={'/proaves2/t-purple.png'}
                  />
                </div>
              </div>
            </div>
            <div className=' absolute left-[940px]  top-0 z-50 hidden lg:flex'>
              <div className=' relative flex h-[800px] flex-col items-center justify-center'>
                <div className='h-full w-[3px] bg-[#EB753C]' />
                <div className='relative  -top-[80px] '>
                  <Image
                    height={105}
                    width={105}
                    src={'/proaves2/t-orange.png'}
                  />
                </div>
              </div>
            </div>
            <div className=' absolute left-[740px]  top-0 z-50 hidden lg:flex'>
              <div className=' relative flex h-[900px] flex-col items-center justify-center'>
                <div className='h-full w-[3px] bg-[#3A88B6]' />
                <div className='relative  -right-[10px] -top-[80px] '>
                  <Image
                    height={135}
                    width={135}
                    src={'/proaves2/t-blue.png'}
                  />
                </div>
              </div>
            </div>

            <div className=' absolute left-[660px]  top-0 z-50 hidden lg:flex'>
              <div className=' relative flex h-[543px] flex-col items-center justify-center'>
                <div className='h-full w-[3px] bg-[#E9B130]' />
                <div className='relative  -top-[80px] right-[10px] '>
                  <Image
                    height={135}
                    width={135}
                    src={'/proaves2/t-yellow.png'}
                  />
                </div>
              </div>
            </div>
            <IoArrowUpCircle
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              color='white'
              size={50}
              className='absolute bottom-[10px] right-[10px]  z-50 cursor-pointer'
            />
          </div>
          <div className=' absolute -bottom-[80px]  left-[990px] z-[10] opacity-40'>
            <Image
              className='scale-x-[-1]'
              height={400}
              width={400}
              layout='fixed'
              src={'/proaves2/blob.png'}
            />
          </div>
        </div>

        <Image
          layout='fill'
          objectFit='cover'
          className=''
          src={'/proaves2/bg2.jpeg'}
        />
      </div>
      <div className="relative z-[19] h-screen bg-[url('/proaves2/pattern3.png')] bg-[length:97px]">
        <div className='mx-auto max-w-[1024px] pt-[155px]'>
          <Carousel className='w-full overflow-y-visible'>
            <CarouselContent>
              <CarouselItem>
                <Calendar22 year={2022} />
              </CarouselItem>
              <CarouselItem>
                <Calendar23 year={2023} />
              </CarouselItem>
              <CarouselItem>
                <BasicCalendar year={2024} />
              </CarouselItem>
            </CarouselContent>
            <CarouselNext size={50} />
            <CarouselPrevious size={50} />
          </Carousel>
        </div>
      </div>
      <div>
        <div className='relative z-[19]  bg-[#E9B130] '>
          <div className="absolute  top-0 z-[2] h-full w-full bg-[url('/proaves2/bg-grid.png')]  bg-[cover] opacity-90" />
          <div className='gird-rows-4 relative z-[21] mx-auto grid max-w-[1024px] grid-cols-4 gap-[20px]'>
            <div className='absolute left-[502px] h-[900px] w-[20px] bg-white'></div>
            <div className="flex h-[300px] w-full flex-col items-center justify-center  bg-[url('/proaves2/bg-grid-1.png')] bg-[cover]">
              <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                +8.600
              </p>
              <p className='font-oswald text-[20px] font-bold text-white'>
                Pessoas impactadas
              </p>
            </div>
            <div className="flex h-[300px] w-full flex-col items-center justify-center  bg-[url('/proaves2/bg-grid-2.png')] bg-[cover]">
              <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                +420
              </p>
              <p className='font-oswald text-[20px] font-bold text-white'>
                Folders informativos
              </p>
            </div>
            <div className="flex h-[300px] w-full flex-col items-center justify-center  bg-[url('/proaves2/bg-grid-3.png')] bg-[cover]">
              <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                +200
              </p>
              <p className='font-oswald text-[20px] font-bold text-white'>
                Guias de Aves
              </p>
            </div>
            <div className="flex h-[300px] w-full flex-col items-center justify-center  bg-[url('/proaves2/bg-grid-4.png')] bg-[cover]">
              <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                29
              </p>
              <p className='font-oswald text-[20px] font-bold text-white'>
                Dias de eventos
              </p>
            </div>
            <div className='flex h-[300px] w-full flex-col items-center justify-center '>
              <Image height={70} width={70} src={'/proaves2/icon-1.png'} />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  2
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Passarinhadas guidas
                </p>
              </div>
            </div>
            <div className='flex h-[300px] w-full flex-col items-center justify-center '>
              <Image height={70} width={70} src={'/proaves2/icon-2.png'} />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  2
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Workshops
                </p>
              </div>
            </div>
            <div className='flex h-[300px] w-full flex-col items-center justify-center '>
              <Image height={70} width={70} src={'/proaves2/icon-3.png'} />
              <div className='flex  w-3/4 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  2
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Pesquisas de ciência cidadã{' '}
                </p>
              </div>
            </div>
            <div className='flex h-[300px] w-full flex-col items-center justify-center '>
              <Image height={70} width={70} src={'/proaves2/icon-4.png'} />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  4
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Banners informativos{' '}
                </p>
              </div>
            </div>
            <div className='flex h-[300px] w-full flex-col items-center justify-center '>
              <Image height={70} width={70} src={'/proaves2/icon-5.png'} />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  3
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Escolas envolvidas
                </p>
              </div>
            </div>
            <div className='relative flex h-[300px] w-full items-center justify-center  overflow-visible'>
              <div className='absolute -right-[200px] h-[480px] w-[480px]'>
                <Image
                  height={480}
                  width={480}
                  src={'/proaves2/tsuru-large.png'}
                />
              </div>
            </div>
            <div className='flex h-[300px] w-full items-center justify-center  '></div>
            <div className='flex h-[300px] w-full flex-col items-center justify-center '>
              <Image height={70} width={70} src={'/proaves2/icon-6.png'} />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  1
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Jogo de tabuleiro
                </p>
              </div>
            </div>
            <div className='flex h-[300px] w-full flex-col items-center justify-center '>
              <Image height={70} width={70} src={'/proaves2/icon-7.png'} />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  7
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Palestras
                </p>
              </div>
            </div>
            <div className='flex h-[300px] w-full flex-col items-center justify-center '>
              <Image height={70} width={70} src={'/proaves2/icon-8.png'} />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  3
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Vídeos informativos
                </p>
              </div>
            </div>
            <div className='flex h-[300px] w-full flex-col items-center justify-center '>
              <Image height={70} width={70} src={'/proaves2/icon-9.png'} />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  3
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Instalações artísticas
                </p>
              </div>
            </div>
            <div className='flex h-[300px] w-full flex-col items-center justify-center '>
              <Image height={70} width={70} src={'/proaves2/icon-10.png'} />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  14
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Parceiros e colaboradores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BasicCalendar = ({ isVisible, year, setter }) => {
  return (
    <div className='flex h-full flex-col items-center overflow-y-visible font-montserrat text-[18px] text-[#fff]'>
      <p>{year}</p>
      <div className='h-[50px] w-[95%] overflow-y-visible rounded-full bg-white'>
        <div className=' grid h-full grid-cols-[repeat(12,_minmax(0,_1fr))] grid-rows-1 overflow-y-visible p-4'>
          <div className='relative flex h-full items-center justify-center overflow-visible font-montserrat uppercase text-[#E9B130] '>
            <p>Jan</p>
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Fev
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Mar
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Abr
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Mai
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Jun
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Jul
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Ago
          </div>
          <div className='relative flex h-full items-center justify-center overflow-y-visible font-montserrat uppercase text-[#E9B130] '>
            Set
            <div className='absolute top-[35px]  z-[99] h-[200px] w-[10px] bg-white'></div>
            <div className='caps-small absolute top-[235px] w-[300px] rounded-[50px] bg-white	  px-12 text-center font-montserrat normal-case'>
              <p>Lançamento da Campanha Ações Pró-Aves</p>
            </div>
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Out
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Nov
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Dez
          </div>
        </div>
      </div>
    </div>
  );
};

const Calendar22 = ({ isVisible, year, setter }) => {
  return (
    <div className='flex h-full flex-col items-center overflow-y-visible font-montserrat text-[18px] text-[#fff]'>
      <p>{year}</p>
      <div className='h-[50px] w-[95%] overflow-y-visible rounded-full bg-white'>
        <div className=' grid h-full grid-cols-[repeat(12,_minmax(0,_1fr))] grid-rows-1 overflow-y-visible p-4'>
          <div className='relative flex h-full items-center justify-center overflow-visible font-montserrat uppercase text-[#E9B130] '>
            <p>Jan</p>
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Fev
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Mar
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Abr
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Mai
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Jun
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Jul
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Ago
          </div>
          <div className='relative flex h-full items-center justify-center overflow-y-visible font-montserrat uppercase text-[#E9B130] '>
            Set
            <div className='absolute top-[34px]  z-[99] h-[200px] w-[10px] bg-white'></div>
            <div className='caps-small absolute top-[233px] w-[300px] rounded-[50px] bg-white px-[28px]	  py-[10px] text-center font-montserrat normal-case'>
              <p>Lançamento da Campanha Ações Pró-Aves</p>
            </div>
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Out
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Nov
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Dez
          </div>
        </div>
      </div>
    </div>
  );
};

const Calendar23 = ({ isVisible, year, setter }) => {
  return (
    <div className='flex h-full flex-col items-center overflow-y-visible font-montserrat text-[18px] text-[#fff]'>
      <p>{year}</p>
      <div className='z-[200] h-[50px] w-[95%] overflow-y-visible rounded-full bg-white'>
        <div className=' grid h-full grid-cols-[repeat(12,_minmax(0,_1fr))] grid-rows-1 overflow-y-visible p-4'>
          <div className='relative flex h-full items-center justify-center overflow-visible font-montserrat uppercase text-[#E9B130] '>
            <p>Jan</p>
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Fev
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Mar
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Abr
          </div>
          <div className='relative flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Mai
            <div className='absolute top-[34px]  z-[99] h-[120px] w-[10px] bg-white'></div>
            <div className='caps-small absolute top-[153px] w-[300px] rounded-[50px] bg-white	px-[47px] py-[18px] text-center font-montserrat normal-case'>
              <p>Feira Avistar</p>
            </div>
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Jun
          </div>
          <div className='relative flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Jul
            <div className='absolute top-[34px]  z-[99] h-[230px] w-[10px] bg-[#EB753C]'></div>
            <div className='caps-small absolute top-[263px] w-[300px] rounded-[50px] bg-[#EB753C]	px-[47px] py-[18px] text-center font-montserrat normal-case'>
              <p>Feira Avistar</p>
            </div>
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Ago
          </div>
          <div className='relative flex h-full items-center justify-center overflow-y-visible font-montserrat uppercase text-[#E9B130] '>
            Set
            <div className='absolute top-[34px]  z-[100] h-[110px] w-[10px] bg-[#22844C]'></div>
            <div className='caps-small absolute top-[143px] z-[100] w-[300px] rounded-[50px] bg-[#22844C]	px-[47px] py-[10px] text-center font-montserrat normal-case'>
              <p>Entrevistas e colagem de adevisos anti-colisão</p>
            </div>
          </div>
          <div className='relative flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Out
            <div className='absolute top-[34px]  z-[99] h-[300px] w-[10px] bg-white'></div>
            <div className='caps-small absolute top-[333px] z-[99] w-[300px] rounded-[50px] bg-white	px-[47px] py-[18px] text-center font-montserrat normal-case'>
              <p>Dia da Ave</p>
            </div>
          </div>
          <div className='relative flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Nov
            <div className='absolute top-[34px]  z-[98] h-[370px] w-[10px] bg-[#CF3C3C]'></div>
            <div className='absolute top-[403px] '>
              <div className='caps-small w-[300px] rounded-[50px] bg-[#CF3C3C]	px-[47px] py-[18px] text-center font-montserrat normal-case'>
                <p>Curso de bordado</p>
              </div>
              <div className='caps-small h-[70px] w-[300px] rounded-[50px] bg-[#8C78AB]	px-[47px] py-[5px] text-center font-montserrat normal-case'>
                <p>Exposição e Workshop “Criaturas Eletrônicas”</p>
              </div>
            </div>
          </div>
          <div className='flex h-full items-center justify-center font-montserrat uppercase text-[#E9B130] '>
            Dez
          </div>
        </div>
      </div>
    </div>
  );
};
