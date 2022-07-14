import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

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
          <h1 className="hidden md:block font-bold w-full text-center text-lg text-gray-100">
            Redes Sociais
          </h1>

          <div className="mt-4 md:m-0 flex flex-row  justify-center items-center">
            <div className="m-2">
              <a target="_blank" href="https://www.facebook.com/oamantiqueira">
                <AiOutlineFacebook color="white" size={30}></AiOutlineFacebook>{" "}
              </a>
            </div>
            <div className="m-2">
              <a target="_blank" href="https://www.instagram.com/oamantiqueira">
                <AiOutlineInstagram
                  color="white"
                  size={30}
                ></AiOutlineInstagram>{" "}
              </a>
            </div>
            <div className="cursor-pointer m-2">
              <Link passHref href="/whatsapp">
                <a target="_blank">
                  <AiOutlineWhatsApp
                    color="white"
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
