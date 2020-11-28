import Nav from "../components/nav";
import Image from "next/image";
import Form from "../components/form"

export default function IndexPage() {
  return (
    <>
      {/* <div className="bg-gradient-to-tr -yellow-200 to-yellow-600 absolute h-screen w-screen "/> */}
      <Nav />

      <div className="grid grid-cols-12 gap-2 md:m-4 mb-6 md:mb-12 lg:mb-24  relative mt-16 md:mt-8 grid-rows-6 md:p-12 min-h-4/5">
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

          <h1 className="text-4xl px-2 md:text-7xl mt-8 text-center text-yellow-50 font-montserrat font-extrabold">
            Conservação com Ciência
          </h1>
          <h2 className="text-lg md:text-2xl px-4 md: mt-8 text-center text-yellow-50 font-semibold">
            Gerando dados e engajamento para a conservação das aves da Mata
            Atlântica
          </h2>
          <button className="border-2 border-solid  border-yellow-50 font-semibold mt-16 rounded-3xl bg-yellow-50 text-yellow-600 shadow-xl py-2 px-4">
            Apoie
          </button>
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
          text-yellow-100 mb-36 z-0"
        >
          <div className=" md:hidden md:float-right mb-4">
            {" "}
            <Image
              className="rounded-2xl"
              // layout="responsive"
              src="/_FR_7083.jpg"
              alt="Picture of the author"
              width={1600}
              height={900}
              objectFit={"cover"}
            ></Image>
          </div>

          <div className="hidden md:block md:float-right mx-16 md:mt-4 ">
            {" "}
            <Image
              className="rounded-2xl"
              // layout="responsive"
              src="/_FR_7083.jpg"
              alt="Picture of the author"
              width={400}
              height={500}
              objectFit={"cover"}
            ></Image>
          </div>

          <p
            className="text-lg 
          md:text-xl  md:pxtext-center mb-6 font-bold indent-2  "
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


<div className="px-6 md:px-48 
          text-yellow-100 text-center">
  <h2 className="text-3xl font-montserrat ">Estamos reformulando nosso site e adicionando novas informações</h2>
  <h2 className="text-md font-bold mt-6 ">Para mais informções e contato, você pode ir no nosso Instagram, Facebook ou enviar mensagem pelo formulário abaixo</h2>
<Form></Form>
</div>
      </div>

      {/* </div> */}
      {/* </div> */}
    </>
  );
}
