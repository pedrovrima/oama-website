import Image from "next/image";


export default function Actions(){
    return(
        <section class=" py-8">
        <div class="container max-w-4xl mx-auto ">
          <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
            Ações{" "}
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div class="flex md:flex-row-reverse  justify-center items-center   flex-wrap">
            <div class="w-3/5  sm:w-1/3 p-2 sm:p-6">
              <div>
                <Image
                  className="rounded-full border-gray-200 border-8"
                  src="/IMG_6943.jpg"
                  layout="responsive"
                  width={200}
                  objectFit="cover"
                  height={200}
                ></Image>
              </div>
            </div>

            <div class="w-full sm:w-2/3 p-6">
              <h3 class="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
                Ciência
              </h3>
              <p class="text-gray-600 mb-8">
              A ciência é o pilar central de nossa organização, pois acreditamos que ações de conservação da biodiversidade devem ser tomadas com base no conhecimento científico. <br/>
Usamos <strong>monitoramento padronizado e de longo prazo</strong> para coletar dados sobre a avifauna e habitats da Serra da Mantiqueira. As observações feitas durante o monitoramento fomentam estudos específicos sobre a história natural e ecologia das espécies e populações locais. <br/>
Também usamos dados secundários e de ciência cidadã para elaborar estudos pontuais. E ainda, colaboramos com outras instituições de pesquisa para desenvolver estudos na área de ornitologia. 
              </p>
            </div>
          </div>
          <div class="flex md:flex-row  justify-center items-center   flex-wrap">
            <div class="w-3/5  sm:w-1/3 p-2 sm:p-6">
              <div>
                <Image
                  className="rounded-full"
                  layout="responsive"
                  src="/Mantiqueira.jpg"
                  width={200}
                  objectFit="cover"
                  height={200}
                ></Image>
              </div>
            </div>

            <div class="w-full sm:w-2/3 p-6">
              <h3 class="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">                  Conservação{" "}
                </h3>
                <p class="text-gray-600 mb-8">
                A conservação e restauração da biodiversidade é o grande objetivo geral do OAMa. Nossas pesquisas e nossas ações são pensadas e realizadas visando fornecer ferramentas para conservação ambiental. Mas buscamos também atuar mais diretamente em ações e projetos de conservação. Somos colaboradores do <strong>Plano de Ação Nacional para Conservação de Aves da Mata Atlântica</strong> e fazemos parte da Allience (vou buscar o nome específico).                </p>
              </div>
            <div class="flex md:flex-row-reverse  justify-center items-center   flex-wrap">
            <div class="w-3/5  sm:w-1/3 p-2 sm:p-6">
              <div>
                  <Image
                    className="rounded-full"
                    layout="responsive"
                    src="/DSC_0241.JPG"
                    width={200}
                    objectFit="cover"
                    height={200}
                  ></Image>
                </div>
              </div>


              <div class="w-full sm:w-2/3 p-6">
              <h3 class="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">                  Educação e Divulgação Científica
                </h3>
                <p class="text-gray-600 mb-8">
                Acreditamos que além de conhecimento e informação de qualidade, precisamos de muitos "braços" para realizar ações de conservação efetivas. Por isso um dos braços do OAMa visa agregar mais pessoas à nossa causa e disseminar conhecimento, e fazemos isso através de ações de educação e divulgação científica.<br/>
Na área de educação elaboramos e promovemos cursos, tanto em temas técnicos na área de ornitologia como em temas lúdicos voltados para a avifauna. Para realizar divulgação científica usamos as redes sociais como ferramenta de comunicação. Estamos constantemente produzindo e espalhando conteúdo sobre ciência e ornitologia em nossas redes sociais. Realizamos também projetos específicos de divulgação científica, com atividades interativas e materiais informativos para distribuição. A atividade <strong>"Dia de campo: conhecendo as aves"</strong> é um exemplo deste tipo de projeto elaborado e realizado pelo OAMa.
                </p>
              </div>
              <div class="w-full sm:w-1/2 p-6"></div>
            </div>
          </div>
        </div>
      </section>

    )
}