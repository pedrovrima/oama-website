import Nav from "@includes/nav";
import { useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Image from "next/image";
import Head from "next/head";
import Footer from "@includes/footer";
export default function QuemSomos() {
  return (
    <>
      <div className="pb-32">
        <Head>
          <title>Divulgação científica e educação</title>
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
              ></Image>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-24">
            <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
              Publicações{" "}
            </h1>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
          </div>
        </div>
        <h2 className="w-full text-3xl font-bold leading-tight text-center text-gray-800">Divulgação Científica</h2>
        <div className="w-3/4 mx-auto grid sm:grid-cols-3">
            {div_cient.map(dc=>
              <Publication {...dc}></Publication>
              )}
        </div>
        <h2 className="w-full text-3xl font-bold mt-24 leading-tight text-center text-gray-800">Institucional</h2>

        <div className="w-3/4 mx-auto grid sm:grid-cols-3">
            {institucional.map(inst=>
              <Publication {...inst}></Publication>
              )}
        </div>
        <h2 className="w-full text-3xl font-bold mt-24 leading-tight text-center text-gray-800">Acadêmico</h2>

        <div className="w-3/4 mx-auto grid sm:grid-cols-3">
            {academic.map(inst=>
              <Publication {...inst}></Publication>
              )}
        </div>

      </div>
      <Footer></Footer>
    </>
  );
}

const Publication = (props) => {
  const { title, img, text, link, direct_link } = props;
  return (
    <a className="mb-4" href={direct_link || `/publicacoes/files/${link}`} target="_blank">
      <div className="flex flex-col  h-full rounded-lg cursor-pointer shadow-2xl mx-2 mt-8 mb-4">
        <div className=" ">
          <Image
            className=""
            layout="responsive"
            width={120}
            objectFit="cover"
            height={90}
            src={`/publicacoes/img/${img}`}
          ></Image>
        </div>
        <div className="flex flex-col  justify-between  px-8 py-4">
          <h2 className="font-bold text-xl mb-4">{title} </h2>
          <p>{text} </p>
        </div>
      </div>
    </a>
  );
};


const div_cient = [
  {
    title:"Ornitologia pra todo dia - conhecendo as aves",
    text:"Livreto para pequenos e grandes curiosos, com muita informação, curiosidades e atividades sobre aves, ciência e conservação. Para divertir, informar e entreter.",
    img:"livreto_Curriculo_OAMA.jpg",
    link:"",

  },
  {
    title:"Livreto de colorir - Aves ameaçadas da Mata Atlântica",
    text:"A Mata Atlântica tem uma rica diversidade de aves, e muitas espécies ocorrem exclusivamente neste bioma, e em nenhum outro lugar no mundo! Mas devido principalmente perda de habitat, caça e tráfico ilegal de animais silvestres, muitas destas espécies estão hoje ameaçadas de extinção. Para buscar estratégias e ações para proteger essas espécies existe o Plano de Ação Nacional (PAN) de aves da Mata Atlântica. Esse livrinho é o resultado de uma ação do PAN para dialogarmos mais com a sociedade sobre a existência de espécies ameaçadas. Se quisermos proteger as espécies, é importante que a sociedade conheça tanto as espécies como suas ameaças.",
    img:"mockup_livro_colorir_OAMa3.jpg",
    link:"Oama_Livreto_Colorir_AvesAmeaçadas.pdf",

      },

      {
        title:"Folder sobre Gatos e Aves",
        text:"Informativo sobre a palmeira juçara, uma espécie de planta chave, endêmica da Mata Atlântica e ameaçada de extinção pela perda de habitat e exploração predatória historicamente. Com esse material você vai conhecer um pouquinho sobre essa espécie que é tão importante para as aves e para nós também. Um produto florestal de importância social, econômica e ambiental. Viva Juçara!",
        img:"Capa baixaveis folder gatos x aves.png",
        link:"Folder gatos x aves.pdf",
    
      },
      {
        title:"Folder sobre Uso e Conservação da Palmeira Juçara",
        text:"Material de comunicação com a sociedade para dialogar sobre o impacto que gatos domésticos soltos têm nas populações de aves silvestres. Além de introduzir um pouco sobre esse grande problema, recomendamos algumas pequenas ações que cada um pode fazer para realizar uma guarda responsável do pet e mitigar os impactos negativos às aves. Bom para os humanos, bom para os gatos e bom para as aves!",
        img:"Imagem capa - folder juçara.png",
        link:"informativo de distribuição - Juçara.pdf",
    
      },
      {
        title:"Curta-documentário 'Juçara - Consumo e Conservação'",
        text:"Essa produção abre o diálogo com a sociedade sobre a importância da palmeira juçara para a conservação da Mata Atlântica. Através de curtas entrevistas com pesquisadores, agricultores extrativistas e observadores de aves, passamos por diferentes pontos de vista e relações com a juçara. Além de apresentar a juçara, expomos sobre a relação de consumo e conservação. Documentário elaborado pelo OAMa em colaboração com o PAN Aves da Mata Atlântica, produzido por Contemplar Films e com apoio do CRBio-04.",
        img:"Juçara consumo e conservação.png",
        direct_link:"https://www.youtube.com/watch?v=FtL8dOPeu6U"
      }
  
]


const institucional = [
  {
    title:"Folder",
    text:"Esse é nosso “cartão de visita”, um material informativo para apresentar o Observatório de Aves da Mantiqueira para quem ainda não nos conhece.",
    img:"_MOCKUP_Folder_Oama_2021.jpg",
    link:"Folder_Oama.pdf"
  },
  // {
  //   title:"Portfólio OAMa",
  //   text:"Material institucional, uma apresentação expandida sobre a organização, seus propósitos e razões de ser. O portfólio do OAMa é um material de comunicação para qualquer um que queira conhecer mais sobre nossas iniciativas, incluindo potenciais apoiadores da causa.",
  //   img:"",
  //   link:""
  // },
  // {
  //   title:"Relatório de atividades OAMa 2021",
  //   text:"Material de comunicação para reportar as principais atividades realizadas pelo Observatório de Aves da Mantiqueira até 2021. Criamos esse material para que nossos apoiadores e todos interessados nas ações do OAMa possam conhecer um pouco de nossa caminhada.",
  //   img:"",
  //   link:""
  // }
]


const academic = [
  // {
  //   title:"Pôster 'Review of the current knowledge of Brazilian birds full life-cycle'",
  //   text:"Trabalho apresentado por Pedro Martins na segunda Conferência Internacional de Observatórios de Aves (IBOC- International Bird Observatories Conference) 2017.",
  //   img:"",
  //   link:""
  // },

  // {
  //   title:"Pôster 'Development of a new Bird Observatory in Brazil'",
  //   text:"Trabalho apresentado por Luiza Figueira na segunda Conferência Internacional de Observatórios de Aves (IBOC- International Bird Observatories Conference) 2017.",
  //   img:"",
  //   link:""
  // },

  {
    title:"Palestra 'Observatórios de aves: conectando ciência, conservação e pessoas'",
    text:"Apresentação sobre o papel dos observatórios de aves na conexão entre ciência, educação e conservação. Elaborada e apresentada por Luiza Figueira para Avistar 2018.",
    img:"Mockup apresentação OAMa - Avistar 2018 lfr.png",
    link:"aud02_18-sex_11h00_luiza_figueira.pdf"
  },


  {
    title:"Palestra 'Mudar para quê? Uma introdução ao mundo da muda das penas'",
    text:"Apresentação sobre o papel dos observatórios de aves na conexão entre ciência, educação e conservação. Elaborada e apresentada por Luiza Figueira para Avistar 2018.",
    img:"Mockup apresentação OAMa - Avistar 2018 lfr.png",
    link:"aud02_18-sex_11h00_luiza_figueira.pdf"
  },
]