import Nav from "@includes/nav";
import Image from "next/image";

export default function IndexPage() {
  return (
    <>
      {/* <div className="bg-gradient-to-bl from-blue-900 to-yellow-500 relative "> */}
      <Nav />

      <div className="md:grid grid-cols-12 gap-2 md:m-4  mb-36 md:mb-24 mt-8 grid-rows-6 md:p-12 md:min-h-3/4">
        {/* <div className="col-start-1 col-span-7 relative   row-start-1 row-span-2 ">
              {" "}
              <Image
                className="rounded-2xl"
                layout="fill"
                src="/Mantiqueira.jpg"
                alt="Picture of the author"
                // width={2500}
                // height={4500}
                objectFit={"cover"}
              ></Image>
            </div> */}

        <div className="flex flex-col items-center col-start-1 col-span-12 md:col-span-7 justify-center row-start-1 row-span-4 md:row-span-6">
          <div className="md:hidden">
            <Image src="/logo.png" width={"200"} height={"200"}></Image>
          </div>

          <h1 className="text-4xl px-2 md:text-7xl mt-4 text-center text-yellow-50 font-montserrat font-extrabold">
            Conservação com Ciência
          </h1>
          <h2 className="text-lg md:text-xl px-4 md: mt-4 text-center text-yellow-50 font-semibold">
            Gerando dados e engajamento para a conservação das aves da Mata
            Atlântica
          </h2>
          <a href="https://www.paypal.com/donate?hosted_button_id=FXVCKDBL68Q4U&source=url" target="_blank">
          <button className="border-2 border-solid border-yellow-50 font-semibold rounded-3xl bg-yellow-50 text-yellow-600 shadow-xl p-2 px-4 mt-8">
            Apoie
          </button>
          </a>
        </div>

        <div className="hidden md:block col-start-1 col-span-12 row-start-5 row-span-2 md:col-start-8 md:col-span-2 relative   md:row-start-1 md:row-span-6 ">
          {" "}
          <Image
            className="rounded-2xl"
            layout="fill"
            src="/IMG_6943.jpg"
            alt="Picture of the author"
            // width={2500}
            // height={4500}
            objectFit={"cover"}
          ></Image>
        </div>

        <div className="hidden md:block relative col-start-10 col-span-3 row-start-3 row-span-4">
          {" "}
          <Image
            className="rounded-2xl"
            layout="fill"
            src="/sobre_pic.jpg"
            alt="Picture of the author"
            // width={1500}
            // height={2500}
            objectFit={"cover"}
          ></Image>
        </div>
        <div className="hidden md:block relative col-start-10 col-span-3 row-start-1 row-span-2">
          {" "}
          <Image
            className="rounded-2xl"
            layout="fill"
            src="/DSC_0241.JPG"
            alt="Picture of the author"
            // width={1500}
            // height={1500}
            objectFit={"cover"}
          ></Image>
        </div>
      </div>
      <div>
        <div
          className="px-6 md:px-48 
          text-yellow-100  z-0 mb-24"
        >
          <div className="float-right m-8 mt-0 hidden md:block">
            <Image
              className="rounded-2xl float-right"
              // layout="fixed"
              src="/_FR_7083.jpg"
              alt="Picture of the author"
              width={300}
              height={400}
              objectFit={"cover"}
            ></Image>
          </div>

          <div className=" m-8 mt-0 md:hidden flex justify-center">
            <Image
              className="rounded-2xl "
              // layout="fixed"
              src="/_FR_7083.jpg"
              alt="Picture of the author"
              width={500}
              height={300}
              objectFit={"cover"}
            ></Image>
          </div>
          <p
            className="text-lg 
          md:text-xl pt-8 font-extrabold mb-6 indent-2  "
          >
            O Observatório de Aves da Mantiqueira (OAMa) é uma organização não
            governamental sem fins lucrativos para o estudo das aves brasileiras
            e seus habitats, com foco na Mata Atlântica e mais especificamente
            na Serra da Mantiqueira.
          </p>
          <p className="text-md md:text-lg mb-6 indent-2">
            Os principais objetivos da organização são auxiliar a preencher as
            lacunas no conhecimento ornitológico brasileiro e promover maior
            conexão entre ciência, sociedade e conservação. Acreditamos que a
            melhor forma de tomar decisões e planejar ações para a conservação
            da biodiversidade é sob a luz do conhecimento. A pesquisa científica
            é a ferramenta que usamos para buscar, adquirir e documentar este
            conhecimento.
          </p>
          <p className="text-md md:text-lg mb-3 indent-2">
            Você pode fazer parte e apoiar esse projeto sendo um filiado, um
            voluntário, ajudando a divulgar nosso trabalho ou mesmo fazendo uma
            doação.
          </p>
        </div>

        <div className="text-center mb-24 mt-36">
          <p className="text-2xl font-montserrat  text-yellow-50">
            Nosso novo site está em construção.
          </p>

          <p className="text-lg font-montserrat  text-yellow-50">
            Contato e mais informações
          </p>

          <div className="flex justify-center mt-4"> 
          <a target="_blank" href="http://facebook.com/oamantiqueira" >          <Image
              className=""
              // layout="fixed"
              src="/facebook.svg"
              alt="Picture of the author"
              width={30}
              height={30}
              objectFit={"cover"}
            ></Image>
            </a>

            <a target="_blank" href="http://instagram.com/oamantiqueira" className="ml-6">
             <Image
              className=""
              // layout="fixed"
              src="/instagram.svg"
              alt="Picture of the author"
              width={30}
              height={30}
              objectFit={"cover"}
            ></Image>
            </a>

            <a className="ml-6"
            href="mailto:someone@example.com"
                        >
             <Image
              className=""
              
              // layout="fixed"
              src="/email.svg"
              alt="Picture of the author"
              width={30}
              height={30}
              objectFit={"cover"}
            ></Image>
            </a>

          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
