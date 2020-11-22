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
    <nav className="w-screen fixed">
      <ul className={`flex  transition-colors   ${scroll?"":"bg-opacity-10"} bg-gray-900 justify-end items-center p-4 space-x-4 pr-8`}>
        {" "}
        <li>
          <Link href="/">
            <a className={`${scroll?"text-yellow-400":""} font-bold no-underline`}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a className={`${scroll?"text-yellow-400":""} font-bold no-underline`}>Sobre</a>
          </Link>
        </li>
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <a
              href={href}
              className={`${scroll?"ring-yellow-400 text-yellow-400":"ring-black"} transition-colors ring-2  font-bold py-2 px-4 rounded no-underline`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
