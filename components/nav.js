import { useEffect, useState } from "react";
import Link from "next/link";

const links = [{ href: "https://nextjs.org/docs", label: "Doe" }];

export default function Nav() {
  const [scroll, setScroll] = useState(0);
  useEffect(
    () =>
      window.addEventListener("scroll", (e) =>
        setScroll(window.pageYOffset > 10)
      ),
    []
  );

  return (
    //   <nav class="bg-gray-800">
    //   <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    //     <div class="relative flex items-center justify-between h-16">
    //       <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //         <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
    //           <span class="sr-only">Open main menu</span>
    //           <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    //           </svg>
    //           <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    //           </svg>
    //         </button>
    //       </div>
    //       <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
    //         <div class="flex-shrink-0 flex items-center">
    //           <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
    //           <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/>
    //         </div>
    //         <div class="hidden sm:block sm:ml-6">
    //           <div class="flex space-x-4">
    //             <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">Dashboard</a>
    //             <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Team</a>
    //             <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
    //             <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Calendar</a>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //         <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
    //           <span class="sr-only">View notifications</span>
    //           <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    //           </svg>
    //         </button>

    //         <div class="ml-3 relative">
    //           <div>
    //             <button class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
    //               <span class="sr-only">Open user menu</span>
    //               <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    //             </button>
    //           </div>
    //           <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
    //             <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
    //             <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
    //             <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="hidden sm:hidden">
    //     <div class="px-2 pt-2 pb-3 space-y-1">
    //       <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">Dashboard</a>
    //       <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Team</a>
    //       <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
    //       <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Calendar</a>
    //     </div>
    //   </div>
    // </nav>

    <nav className={`transition-colors   ${
      scroll ? "" : ""
    } bg-gray-900  w-screen relative`}>
      <div className="p-0 sm:px-6 lg:px-8">
        <ul
          className={`flex  justify-end items-center p-4 space-x-4 pr-8`}
        >
          {" "}
          <li>
            <Link href="/">
              <a
                className={` text-yellow-400 font-bold no-underline`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <a
                className={` text-yellow-400 font-bold no-underline`}
              >
                Sobre
              </a>
            </Link>
          </li>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className={`ring-yellow-400 text-yellow-400 transition-colors ring-2  font-bold py-2 px-4 rounded no-underline`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}