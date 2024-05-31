import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useOnclickOutside from 'react-cool-onclickoutside';

const links = [{ href: 'https://nextjs.org/docs', label: 'Doe' }];

export default function Nav({ allBlack = false }) {
  const [scroll, setScroll] = useState(0);
  const [open, setOpen] = useState(false);
  // const [openActivities,setActOpen]= useState(false)
  const ref = useOnclickOutside(() => {
    setOpen(false);
  });

  useEffect(
    () =>
      window.addEventListener('scroll', (e) =>
        setScroll(window.pageYOffset > 10)
      ),
    []
  );

  return (
    //   <nav className="bg-gray-800">
    //   <div className="px-2 mx-auto max-w-7xl md:px-6 lg:px-8">
    //     <div className="relative flex items-center justify-between h-16">
    //       <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
    //         <button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
    //           <span className="sr-only">Open main menu</span>
    //           <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    //           </svg>
    //           <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    //           </svg>
    //         </button>
    //       </div>
    //       <div className="flex items-center justify-center flex-1 md:items-stretch md:justify-start">
    //         <div className="flex items-center flex-shrink-0">
    //           <img className="block w-auto h-8 lg:hidden" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
    //           <img className="hidden w-auto h-8 lg:block" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/>
    //         </div>
    //         <div className="hidden md:block md:ml-6">
    //           <div className="flex space-x-4">
    //             <a href="#" className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md">Dashboard</a>
    //             <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">Team</a>
    //             <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">Projects</a>
    //             <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">Calendar</a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
    //         <button className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
    //           <span className="sr-only">View notifications</span>
    //           <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    //           </svg>
    //         </button>

    //         <div className="relative ml-3">
    //           <div>
    //             <button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
    //               <span className="sr-only">Open user menu</span>
    //               <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    //             </button>
    //           </div>
    //           <div className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
    //             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
    //             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
    //             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="hidden md:hidden">
    //     <div className="px-2 pt-2 pb-3 space-y-1">
    //       <a href="#" className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md">Dashboard</a>
    //       <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">Team</a>
    //       <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">Projects</a>
    //       <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">Calendar</a>
    //     </div>
    //   </div>
    // </nav>

    // <nav id="header" className="fixed top-0 z-30 w-full text-white">
    //   <div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
    //   <div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
    //     <div className="flex items-center pl-4">
    //     </div>
    //     </div>

    //     <ul className={`flex  justify-end items-center p-4 space-x-4 pr-8`}>
    //       {" "}

    //       {links.map(({ href, label }) => (
    //         <li key={`${href}${label}`}>
    //           <a
    //             href={href}
    //             className={`bg-yellow-600 text-gray-900 shadow-inner  font-bold py-2 px-4 rounded-2xl no-underline`}
    //           >
    //             {label}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </nav>
    <nav
      id='header'
      className={`fixed top-0 z-[99] w-full text-white ${
        scroll || allBlack ? 'bg-gray-900' : ''
      }`}
    >
      <div className='container mx-auto mt-0 flex w-full flex-wrap items-center justify-between py-2'>
        <Link href='/'>
          <div className='flex items-center pl-4'>
            <a
              className='toggleColour flex text-2xl font-bold text-white no-underline hover:no-underline lg:text-4xl'
              href='#'
            >
              <Image
                alt='logo OAMa'
                src='/logo.png'
                width={50}
                height={50}
                objectFit={'cover'}
              ></Image>
            </a>
          </div>
        </Link>
        {/* Hamburguer Menu  */}
        <div ref={ref} className='block pr-4 font-bold md:hidden'>
          <button
            onClick={() => {
              console.log(open);
              setOpen(!open);
            }}
            id='nav-toggle'
            className='focus:shadow-outline flex transform items-center p-1 text-white transition duration-300 ease-in-out hover:scale-105 hover:text-gray-900 focus:outline-none'
          >
            <svg className='h-6 w-6 fill-current' viewBox='0 0 20 20'>
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
          <div
            className={`z-20 mt-0 flex
          w-auto items-center justify-center bg-transparent p-0 text-black`}
            id='nav-content'
          >
            {/* For Hamburguer Menu */}
            <div
              className={` absolute top-14 w-full flex-grow items-end lg:flex lg:w-auto ${
                open ? '' : 'hidden'
              } z-20 mt-2 justify-end bg-white text-gray-900  lg:mt-0 lg:bg-transparent lg:p-0`}
              id='nav-content'
              ref={ref}
            >
              <ul className='list-reset flex-1 items-center justify-end lg:flex'>
                <li className='focus:text-underline inline-block w-full px-4 py-2 no-underline hover:text-gray-800'>
                  <Link href='/quem-somos'>Quem somos</Link>
                </li>
                <li className='hover:text-underline group w-full px-4 py-2 no-underline'>
                  <p className=''>Atividades</p>
                  <div className='flex flex-col px-2 '>
                    <Link href='/proaves'>
                      <p className='cursor-pointer pb-1'>Pró-Aves</p>
                    </Link>
                    <Link href='/projetos'>
                      <p className='cursor-pointer pb-1'>Projetos</p>
                    </Link>
                    {/* <Link href="/anilhamento-demonstrativo">
                      <p className="pb-1 cursor-pointer">
                        Anilhamento Demonstrativo
                      </p>
                    </Link> */}
                    <Link href='/treinamento-cursos'>
                      <p className='cursor-pointer pb-1'>
                        Cursos e Treinamento
                      </p>
                    </Link>
                    <Link href='/downloads'>
                      <p className='cursor-pointer pb-1'>
                        Arquivos e Downloads
                      </p>
                    </Link>
                    <a target='_blank' href='/relatorio.html'>
                      <p className='cursor-pointer pb-1'>Relatório de Dados </p>
                    </a>
                    <Link href='/blog'>
                      <p className='cursor-pointer pb-1'>Blog </p>
                    </Link>
                  </div>
                </li>

                <li className='hover:text-underline group w-full px-4 py-2 no-underline'>
                  <p className=''>Hospedagem</p>
                  <div className='flex flex-col px-2 '>
                    <Link href='/estacao-de-pesquisa'>
                      <p className='cursor-pointer pb-1'>Estação de Pesquisa</p>
                    </Link>

                    <a
                      target='_blank'
                      href='https://www.airbnb.com.br/rooms/611433551141580157?source_impression_id=p3_1650728767_ho1%2B3Yu7QNJiEwLr'
                    >
                      <p className='cursor-pointer pb-1'>AirBnB</p>
                    </a>
                  </div>
                </li>

                <li className='hover:text-underline inline-block w-full px-4 py-2 no-underline hover:text-gray-800'>
                  <a target='_blank' href='https://use.oama.eco.br'>
                    Loja
                  </a>
                </li>
                <li className='hover:text-underline inline-block w-full px-4 py-2 no-underline hover:text-gray-800'>
                  <a target='_blank' href='https://saltator.oama.eco.br'>
                    Saltator
                  </a>
                </li>

                <li className='hover:text-underline inline-block w-full px-4 py-2 no-underline hover:text-gray-800'>
                  <Link href='/jacucara'>Jacuçara</Link>
                </li>
                <li className='hover:text-underline inline-block w-full bg-yellow-400 px-4 py-2 no-underline hover:text-gray-800'>
                  <Link className='' href='/apoie'>
                    Apoie
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='hidden flex-row items-center md:flex'>
          <div className='flex flex-row px-8 '>
            <Link href='/quem-somos'>
              <div className='mr-4 cursor-pointer '>
                <p className='font-bold text-gray-50 hover:underline'>
                  Quem somos
                </p>
              </div>
            </Link>

            <div className='group mr-4'>
              <p className='font-bold text-gray-50'>Atividades</p>
              <div className='absolute hidden w-56 bg-gray-900 p-6 group-hover:block '>
                <Link href='/proaves'>
                  <p className='w-full cursor-pointer pb-2 font-bold text-gray-50 hover:underline'>
                    Pró-Aves
                  </p>
                </Link>
                <Link href='/projetos'>
                  <p className='w-full cursor-pointer pb-2 font-bold text-gray-50 hover:underline'>
                    Projetos
                  </p>
                </Link>
                {/* <Link href="/anilhamento-demonstrativo">
                  <p className="w-full pb-2 font-bold cursor-pointer text-gray-50 hover:underline">
                    Anilhamento Demonstrativo
                  </p>
                </Link> */}
                <Link href='/treinamento-cursos'>
                  <p className='w-full cursor-pointer pb-2 font-bold text-gray-50 hover:underline'>
                    Cursos e Treinamento
                  </p>
                </Link>

                <Link href='/downloads'>
                  <p className='w-full cursor-pointer pb-2 font-bold text-gray-50 hover:underline'>
                    Arquivos e Downloads
                  </p>
                </Link>

                <a target='_blank' href='/relatorio.html'>
                  <p className='w-full cursor-pointer pb-2 font-bold text-gray-50 hover:underline'>
                    Relatório de Dados
                  </p>
                </a>
                <Link href='/blog'>
                  <p className='w-full cursor-pointer pb-2 font-bold text-gray-50 hover:underline'>
                    Blog{' '}
                  </p>
                </Link>
              </div>
            </div>

            <div className='group mr-4'>
              <p className='font-bold text-gray-50'>Hospedagem</p>
              <div className='absolute hidden w-56 bg-gray-900 p-6 group-hover:block '>
                <Link href='/estacao-de-pesquisa'>
                  <p className='w-full cursor-pointer pb-2 font-bold text-gray-50 hover:underline'>
                    Estação de Pesquisa
                  </p>
                </Link>

                <a
                  target='_blank'
                  href='https://www.airbnb.com.br/rooms/611433551141580157?source_impression_id=p3_1650728767_ho1%2B3Yu7QNJiEwLr'
                >
                  <p className='w-full cursor-pointer pb-2 font-bold text-gray-50 hover:underline'>
                    AirBnB
                  </p>
                </a>
              </div>
            </div>

            <a target='_blank' href='https://use.oama.eco.br'>
              <div className='mr-4 cursor-pointer '>
                <p className='font-bold text-gray-50 hover:underline'>Loja</p>
              </div>
            </a>

            <a target='_blank' href='https://saltator.oama.eco.br'>
              {' '}
              <div className='mr-4 cursor-pointer '>
                <p className='font-bold text-gray-50 hover:underline'>
                  Saltator
                </p>
              </div>
            </a>

            <div className='group mr-4 cursor-pointer'>
              <Link href='/jacucara'>
                <p className='font-bold text-gray-50 hover:underline'>
                  Jacuçara
                </p>
              </Link>
            </div>
          </div>
          <Link href='/apoie'>
            <div className='flex items-end justify-end'>
              <button
                id='navAction'
                className='focus:shadow-outline mx-auto mr-2 mt-0 transform rounded-full bg-yellow-400 px-8 py-2 font-bold text-gray-800 shadow transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0'
              >
                Apoie
              </button>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
