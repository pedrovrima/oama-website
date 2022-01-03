import Nav from "@includes/nav";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Footer from "@includes/footer";

export default function Treinamento() {
  return (
    <>
    <div className="pb-32">
      <Head>
        <title>Treinamento e Cursos</title>
      </Head>

      <Nav />
      <div className=" relative hero-small md:hero min-h-1/2">
        <div className="pt-32 lg:pb-16 md:pb-16 h-full  justify-items-center items-center">
          <div className="absolute top-0 h-full w-full">
            <Image
              // className="h-32"
              src="/heros/quem_somos.jpg"
              layout="fill"
              //   width={"2000"}
              //   height={"1000"}
              objectFit="cover"
              objectPosition="center"
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="mb-24">
          <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
            Cursos e Treinamentos{" "}
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>
        </div>
      </div>
      <div className="px-12 sm:px-32">
        <h2 className="w-full mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
          Programa de Treinamento em Monitoramento da Avifauna
        </h2>
        <div className="flex flex-col sm:flex-row">
          <div class="w-full my-auto sm:w-1/3 sm:px-6">
            <div>
              <Image
                placeholder="blur"
                alt="Serra da Mantiqueira"
                layout="responsive"
                src="/treinamento-cursos/treinamento.jpg"
                width={600}
                objectFit="cover"
                height={400}
              />
            </div>
          </div>
          <div className="w-full my-auto sm:w-2/3">
            <p className="text-gray-600 ">
            O programa de treinamento em Monitoramento de Avifauna tem como objetivo promover capacitação técnica de excelência na área de ornitologia de campo e viabilizar a expansão da coleta de dados no OAMa com a participação de voluntários em treinamento. O currículo do programa inclui aulas teóricas e muita atividade prática focadas nas técnicas de captura-marcação-recaptura com redes de neblina e anilhamento de aves e de census com pontos fixos. O treinamento acontece presencialmente e requer <span className="font-bold">dedicação exclusiva e residência</span> na Estação de Pesquisa do OAMa, localizada na Reserva Particular do Patrimônio Natural (RPPN) Fazenda Boa Vista, em Bocaina de Minas/MG, Serra da Mantiqueira. </p>
            <p className="text-gray-600 ">A <span className="font-bold">data de início e duração total</span> (respeitando o mínimo de 3 meses) do treinamento para cada um vai depender da disponibilidade de vaga e da possibilidade do aplicante, e será definida conjuntamente com a coordenação do OAMa após a seleção. As inscrições são de fluxo contínuo, de forma que interessados em participar podem aplicar a qualquer momento.</p>
            <p className="text-gray-600 ">
            Para baixar a chamada para o programa com mais detalhes, <a   href="/treinamento-cursos/files/OAMa - Edital Programa Treinamento Monitoramento Avifauna 2022.pdf"   target="_blank" className="underline text-yellow-600 cursor-pointer">clique aqui</a>. Para se inscrever, preencha o <a href="https://docs.google.com/forms/d/e/1FAIpQLSdE4vT0vfkcmenB-sN5NQKZ1cvNZYOkRfOGLNhqXfvh8CLVBA/viewform"      target="_blank" className="underline text-yellow-600 cursor-pointer">formulário de inscrição</a>. 
            </p>
          </div>
          </div>
          <h2 className="w-full mt-12 mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
          Cursos
        </h2>
        <p className="text-xl text-center w-full">Em breve...</p>
        {/* <div className="flex flex-col sm:flex-row ">
          <div class="w-full sm:w-1/3 p-2 sm:p-6 my-auto">
            <div>
              <Image
                placeholder="blur"
                alt="Serra da Mantiqueira"
                layout="responsive"
                src="/sobre/Mantiqueira.jpg"
                width={400}
                objectFit="cover"
                height={400}
              />
            </div>
          </div>
          <div className="w-full sm:w-2/3">
              <p className="text-gray-600 text-lg font-bold">Nome do Curso</p>
              <p className="text-gray-500 text-md font-bold">11/01/1991</p>
              <p className="text-gray-500 text-md font-bold">Estação de Pesquisa Refúgio da Boa Vista</p>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget condimentum felis. Nulla ac lacus nisi. Nam eget ultricies
              leo. Pellentesque rutrum nibh vel nibh hendrerit ultrices.
              Pellentesque convallis neque at vulputate tempor. Nulla congue
              mattis lectus, placerat ullamcorper libero egestas a. Vivamus
              fermentum ex in felis consectetur, et iaculis nulla malesuada. In
              fringilla condimentum fringilla. Etiam eget pretium nulla. Vivamus
              quis magna laoreet, aliquet leo nec, condimentum ipsum. Praesent
              sollicitudin ante non neque tristique, id rutrum dui maximus.
              Morbi id sem ut velit faucibus mattis. Nulla varius malesuada orci
              ut dapibus. Ut faucibus gravida ornare. Proin ut pretium dui.
              Donec tincidunt vitae risus eu ultricies. Suspendisse convallis
              auctor lacus, vitae posuere quam feugiat ac. Duis a ex non tortor
              lobortis molestie. Nam in lacus vel enim finibus bibendum. Duis
              tincidunt porttitor lorem mollis semper. Mauris tincidunt ex in
              ullamcorper blandit. Suspendisse pulvinar, mauris sit amet congue
              fringilla, eros magna vestibulum nisl, a ullamcorper libero nisi
              vel justo. Morbi a ultrices mi. Sed tempor dolor enim, quis cursus
              enim auctor ac. In finibus tellus sit amet mauris varius, sit amet
              fringilla mauris tempor. Maecenas pretium sagittis eros, ut
              interdum mi pulvinar at. Nunc feugiat fermentum turpis, quis
              finibus nunc rutrum eget. Suspendisse venenatis lacinia sem, sed
              gravida lectus semper at. Donec volutpat aliquet nisi, eu pretium
              augue rutrum eget. Integer id vehicula nibh. Aliquam tincidunt
              pharetra risus. Cras semper erat nisl, id ornare <a className="underline text-yellow-600 cursor-pointer">Link</a>.
            </p>
          </div>

        </div>


        <h2 className="w-full mt-12 mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
          Cursos Concluídos
        </h2>
        <div className="flex flex-col sm:flex-row ">
          <div class="w-full sm:w-1/3 p-2 sm:p-6 my-auto">
            <div>
              <Image
                placeholder="blur"
                alt="Serra da Mantiqueira"
                layout="responsive"
                src="/sobre/Mantiqueira.jpg"
                width={400}
                objectFit="cover"
                height={400}
              />
            </div>
          </div>
          <div className="w-full sm:w-2/3">
              <p className="text-gray-600 text-lg font-bold">Nome do Curso</p>
              <p className="text-gray-500 text-md font-bold">11/01/1991</p>
              <p className="text-gray-500 text-md font-bold">Estação de Pesquisa Refúgio da Boa Vista</p>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget condimentum felis. Nulla ac lacus nisi. Nam eget ultricies
              leo. Pellentesque rutrum nibh vel nibh hendrerit ultrices.
              Pellentesque convallis neque at vulputate tempor. Nulla congue
              mattis lectus, placerat ullamcorper libero egestas a. Vivamus
              fermentum ex in felis consectetur, et iaculis nulla malesuada. In
              fringilla condimentum fringilla. Etiam eget pretium nulla. Vivamus
              quis magna laoreet, aliquet leo nec, condimentum ipsum. Praesent
              sollicitudin ante non neque tristique, id rutrum dui maximus.
              Morbi id sem ut velit faucibus mattis. Nulla varius malesuada orci
              ut dapibus. Ut faucibus gravida ornare. Proin ut pretium dui.
              Donec tincidunt vitae risus eu ultricies. Suspendisse convallis
              auctor lacus, vitae posuere quam feugiat ac. Duis a ex non tortor
              lobortis molestie. Nam in lacus vel enim finibus bibendum. Duis
              tincidunt porttitor lorem mollis semper. Mauris tincidunt ex in
              ullamcorper blandit. Suspendisse pulvinar, mauris sit amet congue
              fringilla, eros magna vestibulum nisl, a ullamcorper libero nisi
              vel justo. Morbi a ultrices mi. Sed tempor dolor enim, quis cursus
              enim auctor ac. In finibus tellus sit amet mauris varius, sit amet
              fringilla mauris tempor. Maecenas pretium sagittis eros, ut
              interdum mi pulvinar at. Nunc feugiat fermentum turpis, quis
              finibus nunc rutrum eget. Suspendisse venenatis lacinia sem, sed
              gravida lectus semper at. Donec volutpat aliquet nisi, eu pretium
              augue rutrum eget. Integer id vehicula nibh. Aliquam tincidunt
              pharetra risus. Cras semper erat nisl, id ornare <a className="underline text-yellow-600 cursor-pointer">Link</a>.
            </p>
          </div>

        </div>
*/}
      </div> 
    </div>
          <Footer/>
</>
  );
}
