import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col mt-16 p-4 bg-gray-900 w-full md:flex-row">
        <div className="w-full flex flex-col items-center text-gray-100 md:w-1/2">
          <p>Observatório de Aves da Mantiqueira</p>
          <p>CNPJ: 35.713.512/0001-80</p>
          <p>Resende - RJ</p>
          <p> contato@oama.eco.br</p>
        </div>
        <div className="flex  flex-col justify-center w-full md:w-1/2">
          <h1 className="hidden md:block font-bold w-full text-center text-lg text-gray-100">Redes Sociais</h1>

          <div className="mt-4 md:m-0 flex flex-row  justify-center items-center">
            <div className="m-2">
              <a
                target="_blank"
                href="https://www.facebook.com/oamantiqueira"
              >
                <Image
                alt="logo do Facebook"
                  className="filter invert cursor-pointer"
                  // layout="responsive"
                  width={25}
                  height={25}
                  src="/logos/facebook.svg"
                ></Image>
              </a>
            </div>
            <div className="m-2">
              <a
                target="_blank"
                href="https://www.instagram.com/oamantiqueira"
              >
                <Image
                alt="logo do Instagram"
                  className="filter invert cursor-pointer"
                  width={25}
                  height={25}
                  src="/logos/instagram.svg"
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
