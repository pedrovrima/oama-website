import Nav from "../components/nav";
import Image from "next/image";
import Form from "../components/form";
import Hero from "../components/hero";
import Actions from "../components/actions";

export default function IndexPage() {
  return (
    <>
      {/* <div className="bg-gradient-to-tr -yellow-200 to-yellow-600 absolute h-screen w-screen "/> */}
      <Nav />
      <Hero></Hero>
      <Actions></Actions>
      {/* <div
        style={{
          clipPath:
            "polygon(100% 0%, 0% 0% , 0% 89%, 1% 89%, 2% 88.98%, 3% 88.96%, 4% 88.92%, 5% 88.88%, 6% 88.82%, 7% 88.76%, 8% 88.68%, 9% 88.6%, 10% 88.51%, 11% 88.41%, 12% 88.3%, 13% 88.18%, 14% 88.06%, 15% 87.93%, 16% 87.79%, 17% 87.64%, 18% 87.49%, 19% 87.33%, 20% 87.16%, 21% 86.99%, 22% 86.81%, 23% 86.63%, 24% 86.45%, 25% 86.26%, 26% 86.07%, 27% 85.88%, 28% 85.68%, 29% 85.48%, 30% 85.28%, 31% 85.08%, 32% 84.88%, 33% 84.68%, 34% 84.48%, 35% 84.29%, 36% 84.09%, 37% 83.9%, 38% 83.71%, 39% 83.52%, 40% 83.34%, 41% 83.16%, 42% 82.98%, 43% 82.81%, 44% 82.65%, 45% 82.49%, 46% 82.33%, 47% 82.19%, 48% 82.05%, 49% 81.92%, 50% 81.8%, 51% 81.68%, 52% 81.57%, 53% 81.47%, 54% 81.38%, 55% 81.3%, 56% 81.23%, 57% 81.17%, 58% 81.12%, 59% 81.07%, 60% 81.04%, 61% 81.02%, 62% 81%, 63% 81%, 64% 81.01%, 65% 81.02%, 66% 81.05%, 67% 81.09%, 68% 81.13%, 69% 81.19%, 70% 81.25%, 71% 81.33%, 72% 81.41%, 73% 81.51%, 74% 81.61%, 75% 81.72%, 76% 81.84%, 77% 81.96%, 78% 82.1%, 79% 82.24%, 80% 82.39%, 81% 82.54%, 82% 82.7%, 83% 82.87%, 84% 83.04%, 85% 83.22%, 86% 83.4%, 87% 83.58%, 88% 83.77%, 89% 83.96%, 90% 84.16%, 91% 84.35%, 92% 84.55%, 93% 84.75%, 94% 84.95%, 95% 85.15%, 96% 85.35%, 97% 85.55%, 98% 85.75%, 99% 85.94%, 100% 86.13%)",
        }}
        className=" relative top-0 hero w-full  md:mb-8 lg:mb-24"
      >
        <div 
          className="hidden md:block"
          >
        <Image
          src="/luiza_ave_2.png"
          width={"2000"}
          height={"1000"}
          objectFit="cover"
        ></Image>
        </div>
        <div
          className=" md:hidden"
        
        >
                <Image
          src="/luiza_ave_2.png"
          layout="responsive"
          width={"1500"}
          height={"3000"}
          objectFit="cover"
        ></Image>
</div>
      </div>

      <div className="grid grid-cols-12 gap-2 md:m-4 mb-6 md:mb-12 lg:mb-24  absolute top-0 mt-16 md:mt-8 grid-rows-6 md:p-12 min-h-4/5">
<div className="col-start-1 col-span-7 relative   row-start-1 row-span-2 ">
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
            </div> 

        <div className="flex flex-col items-center col-start-1 col-span-12 md:col-span-4 justify-center row-start-1 row-span-4 md:row-span-6">
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
      </div> */}
      <div>
        <div
          className="px-6 md:px-48 
          text-yellow-100 mb-36 z-0"
        >

          {/* <div className=" md:hidden md:float-right mb-4">
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

        <div
          className="px-6 md:px-48 
          text-yellow-100 text-center"
        >
          <h2 className="text-3xl font-montserrat ">
            Estamos reformulando nosso site e adicionando novas informações
          </h2>
          <h2 className="text-md font-bold mt-6 ">
            Para mais informções e contato, você pode ir no nosso Instagram,
            Facebook ou enviar mensagem pelo formulário abaixo
          </h2>
          <Form></Form> */}
        </div>
      </div>

      {/* </div> */}
      {/* </div> */}
    </>
  );
}
