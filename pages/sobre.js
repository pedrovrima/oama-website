import Nav from "../components/nav";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="bg-amber-400 min-h-screen">
      <Nav />

      <div className="md:mt-36 flex  items-center justify-center ">
    
        {/* <div className=" p-6 m-2 grid gap-4 md:grid-cols-2 grid-rows-2 md:grid-rows-1"> */}
          <div className="p-8 w-1/2 z-0">
            <p className="text-lg md:text-5xl text-center font-extrabold text-white mb-6 indent-2  ">
              O Observatório de Aves da Mantiqueira (OAMa) é uma organização não
              governamental sem fins lucrativos para o estudo das aves
              brasileiras e seus habitats, com foco na Mata Atlântica e mais
              especificamente na Serra da Mantiqueira.
            </p>
            <p className="text-md md:text-lg mb-3 indent-2">
              Os principais objetivos da organização são auxiliar a preencher as
              lacunas no conhecimento ornitológico brasileiro e promover maior
              conexão entre ciência, sociedade e conservação. Acreditamos que a
              melhor forma de tomar decisões e planejar ações para a conservação
              da biodiversidade é sob a luz do conhecimento. A pesquisa
              científica é a ferramenta que usamos para buscar, adquirir e
              documentar este conhecimento.
            </p>
            <p className="text-md md:text-lg mb-3 indent-2">
              Você pode fazer parte e apoiar esse projeto sendo um filiado, um
              voluntário, ajudando a divulgar nosso trabalho ou mesmo fazendo
              uma doação.
            </p>
          </div>
          {/* <div className="z-50 row-start-1 border-8 border-solid border-white  rounded-xl row-span-2 md:col-start-2 ">
            <Image
              src="/sobre_pic.jpg"
              alt="Picture of the author"
              layout="responsive"
              width="1000"
              height="600"
              objectFit="cover"
              className=""
            />
          </div> */}
        </div>
      </div>
    // </div>
  );
}
