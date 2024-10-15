import Image from "next/legacy/image";
import Link from 'next/link';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from 'react-icons/ai';

export default function Footer({ noMargin }) {
  return (
    <footer className='relative z-[999]'>
      <div
        className={`flex flex-col ${
          !noMargin && 'mt-16'
        } w-full bg-gray-900 p-4 md:flex-row`}
      >
        <div className='flex w-full flex-col items-center text-gray-100 md:w-1/2'>
          <p>Observatório de Aves da Mantiqueira</p>
          <p>CNPJ: 35.713.512/0001-80</p>
          <p>Resende - RJ</p>
          <p> contato@oama.eco.br</p>
        </div>
        <div className='flex  w-full flex-col justify-center md:w-1/2'>
          <h1 className='hidden w-full text-center text-lg font-bold text-gray-100 md:block'>
            Redes Sociais
          </h1>

          <div className='mt-4 flex flex-row items-center  justify-center md:m-0'>
            <div className='m-2'>
              <a target='_blank' href='https://www.facebook.com/oamantiqueira'>
                <AiOutlineFacebook color='white' size={30}></AiOutlineFacebook>{' '}
              </a>
            </div>
            <div className='m-2'>
              <a target='_blank' href='https://www.instagram.com/oamantiqueira'>
                <AiOutlineInstagram
                  color='white'
                  size={30}
                ></AiOutlineInstagram>{' '}
              </a>
            </div>
            <div className='m-2'>
              <a
                target='_blank'
                href='https://www.youtube.com/channel/UCzLcpYmPb1DR524wXb0CvHA'
              >
                <AiOutlineYoutube color='white' size={30}></AiOutlineYoutube>{' '}
              </a>
            </div>
            <div className='m-2 cursor-pointer'>
              <Link passHref href='/whatsapp'>
                <a target='_blank'>
                  <AiOutlineWhatsApp
                    color='white'
                    size={30}
                  ></AiOutlineWhatsApp>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
