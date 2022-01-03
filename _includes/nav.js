import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useOnclickOutside from "react-cool-onclickoutside";

const links = [{ href: "https://nextjs.org/docs", label: "Doe" }];

export default function Nav() {
  const [scroll, setScroll] = useState(0);
  const [open, setOpen] = useState(false);
  // const [openActivities,setActOpen]= useState(false)
  const ref = useOnclickOutside(() => {
    setOpen(false);
  });

  useEffect(
    () =>
      window.addEventListener("scroll", (e) =>
        setScroll(window.pageYOffset > 10)
      ),
    []
  );

  return (
    //   <nav className="bg-gray-800">
    //   <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
    //     <div className="relative flex items-center justify-between h-16">
    //       <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
    //         <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
    //           <span className="sr-only">Open main menu</span>
    //           <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    //           </svg>
    //           <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    //           </svg>
    //         </button>
    //       </div>
    //       <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
    //         <div className="flex-shrink-0 flex items-center">
    //           <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
    //           <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/>
    //         </div>
    //         <div className="hidden md:block md:ml-6">
    //           <div className="flex space-x-4">
    //             <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">Dashboard</a>
    //             <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Team</a>
    //             <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
    //             <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Calendar</a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
    //         <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
    //           <span className="sr-only">View notifications</span>
    //           <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    //           </svg>
    //         </button>

    //         <div className="ml-3 relative">
    //           <div>
    //             <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
    //               <span className="sr-only">Open user menu</span>
    //               <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    //             </button>
    //           </div>
    //           <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
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
    //       <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">Dashboard</a>
    //       <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Team</a>
    //       <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
    //       <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Calendar</a>
    //     </div>
    //   </div>
    // </nav>

    // <nav id="header" className="fixed w-full z-30 top-0 text-white">
    //   <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
    //   <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
    //     <div className="pl-4 flex items-center">
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
      id="header"
      className={`fixed w-full z-50 top-0 text-white ${
        scroll ? "bg-gray-900" : ""
      }`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <Link href="/">
          <div className="pl-4 flex items-center">
            <a
              className="flex toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <Image
                alt="logo OAMa"
                src="/logo.png"
                width={50}
                height={50}
                objectFit={"cover"}
              ></Image>
            </a>
          </div>
        </Link>
        {/* Hamburguer Menu  */}
        <div ref={ref} className="block md:hidden pr-4 font-bold">
          <button
            onClick={() => {
              console.log(open);
              setOpen(!open);
            }}
            id="nav-toggle"
            className="flex items-center p-1 text-white hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div
            className={`flex items-center w-auto
          mt-0 bg-transparent text-black p-0 z-20 justify-center`}
            id="nav-content"
          >
            {/* For Hamburguer Menu */}
            <div
              className={` w-full flex-grow absolute top-14 lg:flex items-end lg:w-auto ${
                open ? "" : "hidden"
              } mt-2 lg:mt-0 bg-white lg:bg-transparent text-gray-900  lg:p-0 z-20 justify-end`}
              id="nav-content"
              ref={ref}
            >
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="inline-block w-full   no-underline hover:text-gray-800 focus:text-underline py-2  px-4">
                  <Link href="/quem-somos">Quem somos</Link>
                </li>
                <li className=" w-full group   no-underline  hover:text-underline py-2  px-4">
                  <p className="">Atividades</p>
                  <div
                    className="px-4
                    flex
                    flex-col
                  "
                  >
                    <Link href="/projetos">
                    <p className="cursor-pointer pb-1">
                        Projetos
                      </p>
                      </Link>
                    <Link href="/treinamento-cursos">
                    <p className="cursor-pointer pb-1">
                      Cursos e Treinamento
                      </p></Link>
                    <Link href="/downloads">
                    <p className="cursor-pointer pb-1">
                      Arquivos e Downloads
                      </p>
                      </Link>

                  </div>
                </li>

                <li className="inline-block w-full   no-underline hover:text-gray-800 hover:text-underline py-2  px-4">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="inline-block w-full   no-underline hover:text-gray-800 hover:text-underline py-2  px-4">
                  <a target="_blank" href="https://saltator.oama.eco.br">
                    Saltator
                  </a>
                </li>

                <li className="inline-block bg-yellow-400 w-full  no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                  <Link className="" href="/apoie">
                    Apoie
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-row items-center">
          <div className=" px-8 flex flex-row">
            <Link href="/quem-somos">
              <div className=" mr-4 cursor-pointer">
                <p className="text-gray-50  hover:underline font-bold">
                  Quem somos
                </p>
              </div>
            </Link>

            <div className=" group mr-4 ">
              <p className="text-gray-50   font-bold">Atividades</p>
              <div className="bg-gray-900   absolute hidden p-6  w-56 group-hover:block ">
                <Link href="/projetos">
                  <p className="text-gray-50  pb-2 w-full cursor-pointer hover:underline font-bold">
                    Projetos
                  </p>
                </Link>
                <Link href="/treinamento-cursos">
                  <p className="text-gray-50  pb-2 w-full cursor-pointer hover:underline font-bold">
                    Cursos e Treinamento
                  </p>
                </Link>

                <Link href="/downloads">
                  <p className="text-gray-50  pb-2 w-full cursor-pointer hover:underline font-bold">
                    Arquivos e Downloads
                  </p>
                </Link>
              </div>
            </div>

            <Link href="/blog">
              <div className=" mr-4 cursor-pointer">
                <p className="text-gray-50  hover:underline font-bold">Blog</p>
              </div>
            </Link>

            <a target="_blank" href="https://saltator.oama.eco.br">
              {" "}
              <div className=" mr-4 cursor-pointer">
                <p className="text-gray-50  hover:underline font-bold">
                  Saltator
                </p>
              </div>
            </a>
          </div>
          <Link href="/apoie">
            <div className="justify-end flex items-end">
              <button
                id="navAction"
                className="mx-auto lg:mx-0 mr-2 hover:underline bg-yellow-400 text-gray-800 font-bold rounded-full mt-0 py-2  px-8 shadow  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
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
