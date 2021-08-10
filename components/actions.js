import Image from "next/image";

export default function Actions() {
  return (
    <section class=" py-8">
      <div class="container max-w-4xl mx-auto ">
        <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
          Ações{" "}
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="flex md:flex-row-reverse mb-8  justify-center items-center   flex-wrap">
          <div class="w-3/5  sm:w-1/3 p-2 sm:p-6">
            <div>
              <Image
                className="rounded-full border-gray-200 border-8"
                alt="Anilhamento em ação"
                placeholder="blur"
                src="/sobre/anilhamento.jpg"
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
            <p class="text-gray-600 ">
              A ciência é o pilar central de nossa organização, pois acreditamos
              que ações de conservação da biodiversidade devem ser tomadas com
              base no conhecimento científico. <br />
              Usamos <strong>
                monitoramento padronizado e de longo prazo
              </strong>{" "}
              para coletar dados sobre a avifauna e habitats da Serra da
              Mantiqueira. As observações feitas durante o monitoramento
              fomentam estudos específicos sobre a história natural e ecologia
              das espécies e populações locais. <br />
              Também usamos dados secundários e de ciência cidadã para elaborar
              estudos pontuais. E, ainda, colaboramos com outras instituições de
              pesquisa para desenvolver estudos na área de ornitologia.
            </p>
          </div>
        </div>
        <div class="flex md:flex-row mb-8 justify-center items-center   flex-wrap">
          <div class="w-3/5  sm:w-1/3 p-2 sm:p-6">
            <div>
              <Image
                placeholder="blur"
    alt="Serra da Mantiqueira"
                className="rounded-full"
                layout="responsive"
                src="/sobre/Mantiqueira.jpg"
                width={200}
                objectFit="cover"
                height={200}
              ></Image>
            </div>
          </div>

          <div class="w-full sm:w-2/3 p-6">
            <h3 class="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              {" "}
              Conservação{" "}
            </h3>
            <p class="text-gray-600 mb-8">
              A conservação e restauração da biodiversidade é o grande objetivo
              geral do OAMa. Nossas pesquisas e nossas ações são pensadas e
              realizadas visando fornecer ferramentas para conservação
              ambiental. Mas buscamos também atuar mais diretamente em ações e
              projetos de conservação. Somos colaboradores do{" "}
              <strong>
                Plano de Ação Nacional para Conservação de Aves da Mata
                Atlântica
              </strong>{" "}
              e fazemos parte da <strong>Bird Friendly Coalition</strong>.{" "}
            </p>
          </div>
        </div>
        <div class="flex md:flex-row-reverse  justify-center items-center   flex-wrap">
          <div class="w-3/5  sm:w-1/3 p-2 sm:p-6">
            <div>
              <Image
                placeholder="blur"
                alt="Criança olhando por binóculos"
                className="rounded-full"
                layout="responsive"
                src="/sobre/crianca.jpg"
                width={200}
                objectFit="cover"
                height={200}
              ></Image>
            </div>
          </div>

          <div class="w-full sm:w-2/3 p-6">
            <h3 class="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              {" "}
              Educação e Divulgação Científica
            </h3>
            <p class="text-gray-600 mb-8">
              Um dos braços do OAMa visa sensibilizar pessoas de todas as
              idades, classes, gêneros e raças à nossa causa e disseminar
              conhecimento sobre meio ambiente e biodiversidade. <br />
              Nas ações de Educação e Divulgação Científica, nossa equipe busca
              adequar a linguagem da Ciência ao público geral e também ao
              público especializado. Na área de Educação elaboramos e promovemos
              cursos, tanto sobre temas técnicos na área de ornitologia como
              sobre temas lúdicos voltados para a avifauna. Para realizar
              Divulgação Científica usamos as redes sociais como ferramenta de
              comunicação. <br />
              Estamos constantemente produzindo e compartilhando conteúdo sobre
              ciência e ornitologia em nossas redes sociais. Realizamos também
              projetos específicos de divulgação científica, com atividades
              interativas e materiais informativos para distribuição. A
              atividade <strong>Dia de campo: conhecendo as aves</strong> e o
              livreto <strong>Ornitologia pra todo dia</strong> são exemplos deste tipo de
              projeto e de ações realizadas pelo OAMa.
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6"></div>
        </div>
      </div>
    </section>
  );
}
