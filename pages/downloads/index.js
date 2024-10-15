import Nav from '@includes/nav';
import { useEffect, useRef } from 'react';

import Image from "next/legacy/image";
import Head from 'next/head';
import Footer from '@includes/footer';
export default function QuemSomos() {
  return (
    <>
      <div className='pb-32'>
        <Head>
          <title>Arquivos e Downloads</title>
        </Head>

        <Nav />
        <div className='hero-small md:hero relative min-h-1/2'>
          <div className='h-full items-center justify-items-center pt-32 md:pb-16 lg:pb-16'>
            <div className='absolute top-0 h-full w-full'>
              <Image
                // className="h-32"
                src='/heros/quem_somos.jpg'
                layout='fill'
                //   width={"2000"}
                //   height={"1000"}
                objectFit='cover'
                objectPosition='center'
                priority={true}
              ></Image>
            </div>
          </div>
        </div>

        <div className='mt-16'>
          <div className='mb-24'>
            <h1 class='w-full text-center text-5xl font-bold leading-tight text-gray-800'>
              Arquivos e Downlaods{' '}
            </h1>
            <div class='mb-4 w-full'>
              <div class='gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25'></div>
            </div>
          </div>
        </div>
        <h2 className='w-full text-center text-3xl font-bold leading-tight text-gray-800'>
          Divulgação Científica
        </h2>
        <div className='mx-auto grid w-3/4 sm:grid-cols-3'>
          {div_cient.map((dc) => (
            <Publication {...dc}></Publication>
          ))}
        </div>
        <h2 className='mt-24 w-full text-center text-3xl font-bold leading-tight text-gray-800'>
          Institucional
        </h2>

        <div className='mx-auto grid w-3/4 sm:grid-cols-3'>
          {institucional.map((inst) => (
            <Publication {...inst}></Publication>
          ))}
        </div>
        <h2 className='mt-24 w-full text-center text-3xl font-bold leading-tight text-gray-800'>
          Acadêmico
        </h2>

        <div className='mx-auto grid w-3/4 sm:grid-cols-3'>
          {academic.map((inst) => (
            <Publication {...inst}></Publication>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

const Publication = (props) => {
  const { title, img, text, link, direct_link } = props;
  return (
    <a
      className='mb-4'
      href={direct_link || `/publicacoes/files/${link}`}
      target='_blank'
    >
      <div className='mx-2 mb-4 mt-8 flex h-full cursor-pointer flex-col rounded-lg shadow-2xl'>
        <div className=''>
          <Image
            className=''
            layout='responsive'
            width={120}
            objectFit='cover'
            height={90}
            src={`/publicacoes/img/${img}`}
          ></Image>
        </div>
        <div className='flex flex-col justify-between px-8 py-4'>
          <h2 className='mb-4 text-xl font-bold'>{title} </h2>
          <p>{text} </p>
        </div>
      </div>
    </a>
  );
};

const div_cient = [
  {
    title: 'Cartilha: Guarda Responsável de Pets',
    text: 'Cartilha informativa sobre como ser um bom tutor para o seu gato ou cachorro. Neste material você entenderá o que significa uma guarda responsável; as consequências de uma guarda ruim, tanto para animais domésticos, como para os animais silvestres; e quais ações pró-aves você pode aderir para minimizar esses impactos dos pets na biodiversidade.',
    img: 'mockup cartilha pets.jpg',
    link: 'Cartilha Guarda Responsável de Pets - Ações Pró-Aves.pdf',
  },
  {
    title: 'Campanha pró-aves: Engaiolamento',
    text: 'Panfleto informativo sobre os efeitos do engaiolamento nos indíviduos e populações de aves.',
    img: 'mockup folder tráfico.png',
    link: 'Folders Campanha Pró-Aves 2024_TRÁFICO.pdf',
  },

  {
    title: 'Campanha pró-aves: Animais Domésticos',
    text: 'Panfleto informativo sobre como aliar a criação de pets com o bem estar das aves.',
    img: 'mockup folder pets.png',
    link: 'Folders Campanha Pró-Aves 2024_PETS.pdf',
  },
  {
    title: 'Campanha pró-aves: Poluição Luminosa',
    text: 'Panfleto informativo sobre como mitigar os efeitos da poluição luminosa nas aves.',
    img: 'mockup folder luminosa.png',
    link: 'Folders Campanha Pró-Aves 2024_LUMINOSA.pdf',
  },

  {
    title: 'Campanha pró-aves: Poluição Sonora',
    text: 'Panfleto informativo sobre como mitigar os efeitos da poluição sonora nas aves.',
    img: 'mockup folder sonora.png',
    link: 'Folders Campanha Pró-Aves 2024_SONORA.pdf',
  },
  {
    title: 'Campanha pró-aves: Comedouros',
    text: 'Panfleto informativo sobre como montar comedouros para as aves.',
    img: 'mockup folder comedouro.png',
    link: 'Folders Campanha Pró-Aves 2024_COMEDOUROS.pdf',
  },

  {
    title: 'Campanha pró-aves: Colisão com Vidros',
    text: 'Panfleto informativo sobre como mitigar as colisões com vidros.',
    img: 'mockup folder colisão.png',
    link: 'Folders Campanha Pró-Aves 2024_COLISÃOVIDROS.pdf',
  },
  {
    title: 'Adesivo anti-colisão',
    text: 'Adesivos circulares anti colisão de aves para impressão em folha A3, vinil branco fosco. Instruções de aplicação na página Ações Pró-Aves.',
    img: 'adesivo.jpg',
    link: 'adesivos.pdf',
  },

  {
    title: 'Guia de Aves de Visconde de Mauá e região',
    text: 'Guia dobrável de aves da região de Visconde de Mauá. Esse material de estímulo ao ecoturismo oferece um olhar introdutório à riqueza da avifauna local e os melhores lugares para passarinhar, como a Estação de Pesquisa OAMa, na RPPN Fazenda Alto da Boa Vista, no Vale das Flores, em Bocaina de Minas/MG.',
    img: 'icone_guia.png',
    link: 'Guia de Aves de Visconde de Mauá e região.pdf',
  },
  {
    title: 'Banner Conheça a Palmeira-juçara',
    text: 'Banner sobre a palmeira-juçara, espécie exclusiva da Mata Atlântica e vulnerável à extinção. Neste material, parte da campanha Jacuçara, você aprenderá como identificar a juçara, curiosidades sobre sua ecologia, quais as principais ameaças à espécie e o que pode ser feito pela sua conservação.',
    img: 'icone_jucara.png',
    link: 'Banner Infográfico Conheça a palmeira-juçara.pdf',
  },
  {
    title: 'Banner Conheça a Jacutinga',
    text: 'Banner sobre a jacutinga, espécie de ave exclusiva da Mata Atlântica e em perigo de extinção. Neste material, parte da campanha Jacuçara, você aprenderá como identificar a jacutinga, curiosidades sobre sua ecologia, quais as principais ameaças à espécie e o que está sendo feito pela sua conservação.',
    img: 'icone_jacutinga.png',
    link: 'Banner Infográfico Conheça a jacutinga.pdf',
  },
  {
    title: 'Banner Impacto dos Pets em Animais Silvestres',
    text: 'Banners sobre o impacto que pets têm em animais silvestres, como as aves. Nestes materiais, parte do Programa Ações-Pró-Aves, você compreenderá a escala e os desdobramentos desse problema mundial, e como os tutores podem atuar para garantir uma vida mais segura e saudável para cães, gatos e para a fauna silvestre.',
    img: 'icone_pets.png',
    link: 'Banner - O impacto dos pets - Campanha Ações Pró-Aves.pdf',
  },
  // {
  //   title: '[ANTIGO] Campanha pró-aves: Engaiolamento',
  //   text: 'Panfleto informativo sobre os efeitos do engaiolamento nos indíviduos e populações de aves.',
  //   img: 'engaiolamento.jpg',
  //   link: 'engaiolamento.pdf',
  // },

  // {
  //   title: '[ANTIGO] Campanha pró-aves: Animais Domésticos',
  //   text: 'Panfleto informativo sobre como aliar a criação de pets com o bem estar das aves.',
  //   img: 'predacao.jpg',
  //   link: 'predacao.pdf',
  // },
  // {
  //   title: '[ANTIGO] Campanha pró-aves: Poluição Luminosa',
  //   text: 'Panfleto informativo sobre como mitigar os efeitos da poluição luminosa nas aves.',
  //   img: 'luminosa.jpg',
  //   link: 'luminosa.pdf',
  // },

  // {
  //   title: '[ANTIGO] Campanha pró-aves: Poluição Sonora',
  //   text: 'Panfleto informativo sobre como mitigar os efeitos da poluição sonora nas aves.',
  //   img: 'sonora.jpg',
  //   link: 'sonora.pdf',
  // },
  // {
  //   title: '[ANTIGO] Campanha pró-aves: Comedouros',
  //   text: 'Panfleto informativo sobre como montar comedouros para as aves.',
  //   img: 'comedouro.jpg',
  //   link: 'comedouro.pdf',
  // },

  // {
  //   title: '[ANTIGO] Campanha pró-aves: Colisão com Vidros',
  //   text: 'Panfleto informativo sobre como mitigar as colisões com vidros.',
  //   img: 'colisao.jpg',
  //   link: 'colisao.pdf',
  // },

  {
    title: 'Livreto Bird Friendly Coalition',
    text: 'Livreto informativo sobre a iniciativa Bird Friendly Coalition.',
    img: 'birdF.jpg',
    link: 'BF Coalition Brochure Traduzido.pdf',
  },
  {
    title: 'Ornitologia pra todo dia - conhecendo as aves',
    text: 'Livreto para pequenos e grandes curiosos, com muita informação, curiosidades e atividades sobre aves, ciência e conservação. Para divertir, informar e entreter.',
    img: 'livreto_Curriculo_OAMA.jpg',
    link: 'ornito_todo_dia_OAMa.pdf',
  },
  {
    title: 'Livreto de colorir - Aves ameaçadas da Mata Atlântica',
    text: 'A Mata Atlântica tem uma rica diversidade de aves, e muitas espécies ocorrem exclusivamente neste bioma, e em nenhum outro lugar no mundo! Mas devido principalmente perda de habitat, caça e tráfico ilegal de animais silvestres, muitas destas espécies estão hoje ameaçadas de extinção. Para buscar estratégias e ações para proteger essas espécies existe o Plano de Ação Nacional (PAN) de aves da Mata Atlântica. Esse livrinho é o resultado de uma ação do PAN para dialogarmos mais com a sociedade sobre a existência de espécies ameaçadas. Se quisermos proteger as espécies, é importante que a sociedade conheça tanto as espécies como suas ameaças.',
    img: 'mockup_livro_colorir_OAMa3.jpg',
    link: 'Oama_Livreto_Colorir_AvesAmeaçadas.pdf',
  },

  {
    title: 'Folder sobre Uso e Conservação da Palmeira Juçara',
    text: 'Material de comunicação com a sociedade para dialogar sobre o impacto que gatos domésticos soltos têm nas populações de aves silvestres. Além de introduzir um pouco sobre esse grande problema, recomendamos algumas pequenas ações que cada um pode fazer para realizar uma guarda responsável do pet e mitigar os impactos negativos às aves. Bom para os humanos, bom para os gatos e bom para as aves!',
    img: 'Imagem capa - folder juçara.png',
    link: 'informativo de distribuição - Juçara.pdf',
  },
  {
    title: "Curta-documentário 'Juçara - Consumo e Conservação'",
    text: 'Essa produção abre o diálogo com a sociedade sobre a importância da palmeira juçara para a conservação da Mata Atlântica. Através de curtas entrevistas com pesquisadores, agricultores extrativistas e observadores de aves, passamos por diferentes pontos de vista e relações com a juçara. Além de apresentar a juçara, expomos sobre a relação de consumo e conservação. Documentário elaborado pelo OAMa em colaboração com o PAN Aves da Mata Atlântica, produzido por Contemplar Films e com apoio do CRBio-04.',
    img: 'Juçara consumo e conservação.png',
    direct_link: 'https://www.youtube.com/watch?v=FtL8dOPeu6U',
  },
];

const institucional = [
  {
    title: 'Relatório Atividades Pró-Aves 2023',
    text: ' Aqui você confere as atividades realizadas, os produtos elaborados, resultados alcançados e orçamento realizado para a execução do Programa Pró-Aves de 2023.',
    img: 'relatorioProAves2023.png',
    link: 'relatorioProAves2023.pdf',
  },
  {
    title: '2022 Annual Report - English Version',
    text: 'Official report of activities, finances, and everything related to the operation of OAMa in 2022.',
    img: 'relatorio2022.png',
    link: '2022Report.pdf',
  },
  {
    title: 'Relatório Anual 2022',
    text: 'Relatório oficial de atividades, finanças e tudo mais relacionado ao funcionamento do OAMa em 2022.',
    img: 'relatorio2022.png',
    link: 'Relatório_Anual_2022.pdf',
  },
  {
    title: 'Portfólio OAMa',
    text: 'Material institucional, uma apresentação expandida sobre a organização, seus propósitos e razões de ser. O portfólio do OAMa é um material de comunicação para qualquer um que queira conhecer mais sobre nossas iniciativas, incluindo potenciais apoiadores da causa.',
    img: 'portfolio.png',
    link: 'Portfolio_OAMa.pdf',
  },
  {
    title: 'Folder',
    text: 'Esse é nosso “cartão de visita”, um material informativo para apresentar o Observatório de Aves da Mantiqueira para quem ainda não nos conhece.',
    img: '_MOCKUP_Folder_Oama_2021.jpg',
    link: 'Folder_Oama.pdf',
  },
  {
    title: 'Relatório Anual 2021',
    text: 'Relatório oficial de atividades, finanças e tudo mais relacionado ao funcionamento do OAMa em 2021.',
    img: 'relatorio_anual_oama_2021.png',
    link: 'Relatório Anual 2021.pdf',
  },

  // {
  //   title:"Relatório de atividades OAMa 2021",
  //   text:"Material de comunicação para reportar as principais atividades realizadas pelo Observatório de Aves da Mantiqueira até 2021. Criamos esse material para que nossos apoiadores e todos interessados nas ações do OAMa possam conhecer um pouco de nossa caminhada.",
  //   img:"",
  //   link:""
  // }
];

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
    title:
      "Palestra 'Observatórios de aves: conectando ciência, conservação e pessoas'",
    text: 'Apresentação sobre o papel dos observatórios de aves na conexão entre ciência, educação e conservação. Elaborada e apresentada por Luiza Figueira para Avistar 2018.',
    img: 'Mockup apresentação OAMa - Avistar 2018 lfr.png',
    link: 'aud02_18-sex_11h00_luiza_figueira.pdf',
  },

  {
    title:
      "Palestra 'Mudar para quê? Uma introdução ao mundo da muda das penas'",
    text: 'Apresentação sobre o papel dos observatórios de aves na conexão entre ciência, educação e conservação. Elaborada e apresentada por Luiza Figueira para Avistar 2018.',
    img: 'Mockup apresentação OAMa - Avistar 2019 pvm.png',
    link: '18_A2_10h00_221_Pedro_Martins.pdf',
  },
  {
    title: "Palestra 'Observação de aves: ciência, educação e conservação'",
    text: 'Apresentação sobre como a atividade de observar aves pode promover a conservação das espécies através da ciência cidadã e da educação e sensibilização ambiental. Elaborada e apresentada por Luiza Figueira para Avistar 2019.',
    img: 'Mockup apresentação OAMa - Avistar 2019 lfr.png',
    link: 'LFR_avistar2019.pdf',
  },
  // {
  //   title:
  //     "Palestra “Molting spatial strategies among landbird in Western USA”",
  //   text: "Estudo realizado em parceria com o Klamath Bird Observatory (Oregon, EUA)  para avaliação das diferentes estratégias de movimentação para áreas de muda de penas em aves no Oeste dos Estados Unidos. Apresentação elaborada e apresentada por Luiza Figueira no simpósio sobre muda de aves do Congresso Anual da American Ornithological Society (AOS), 2018.",

  //   img: "",
  //   link: ""
  // },

  // {
  //   title: "Palestra Pedro AOS  - ADICIONAR",
  //   text: "",
  //   img: "",
  //   link: ""
  // },
  {
    title: "Palestra 'Ciclo de muda e determinação de idade em aves'",
    text: 'Trabalho sobre a importância do conhecimento sobre muda de aves dentro da ornitologia apresentado por Luiza Figueira no XXVI Congresso Brasileiro de Ornitologia, 2019.',
    img: 'Mockup apresentação OAMa - CBO 2019 lfr.png',
    link: 'CBO2019LFRfinal.pdf',
  },

  {
    title:
      "Palestra 'Movimentos migratórios de aves no Brasil identificados através de ciência cidadã'",
    text: 'Estudo em desenvolvimento usando dados de e-bird para a detecção de sobre movimentos migratórios de aves do Brasil. Apresentação elaborada e apresentada por Pedro Martins no XXVI Congresso Brasileiro de Ornitologia, 2019.',
    img: 'Mockup apresentação OAMa - CBO 2019 pvm.png',
    link: 'CBO2019_PedroMartins_semAnim.pdf',
  },

  {
    title: "Palestra 'Determinação de idade em aves brasileiras'",
    text: 'Estudo em desenvolvimento usando dados de e-bird para a detecção de sobre movimentos migratórios de aves do Brasil. Apresentação elaborada e apresentada por Pedro Martins no XXVI Congresso Brasileiro de Ornitologia, 2019.',
    img: 'Mockup apresentação OAMa - CBO 2021 pvm.png',
    link: 'Determinação de idade em aves brasileiras.pdf',
  },

  {
    title:
      "Pôster 'Padrões e tendências sobre o conhecimento atual da avifauna na Serra da Mantiqueira, sudeste do Brasil'",
    text: 'Trabalho apresentado por Affonso Souza no XXVII Congresso Brasileiro de Ornitologia, 2021.',
    img: 'Poster CBO2021 ahs.png',
    direct_link: 'https://youtu.be/_Qmz-0XjUQo',
  },
  {
    title: "Palestra 'O que são observatórios de aves'",
    text: 'Trabalho apresentado por Luiza Figueira como abertura do simpósio sobre Observatórios de Aves no XXVII Congresso Brasileiro de Ornitologia, 2021. O simpósio foi coordenado por Luiza e tratou sobre as diferentes frentes de ação dos observatórios de aves, com apresentações sobre o monitoramento de avifauna de longo-prazo no Brasil, ações de educação e sensibilização ambiental, a pesquisa realizada por observatórios de aves, modelos de observatórios de aves, e ações de ponte com a sociedade.',
    img: 'Mockup apresentação OAMa - CBO 2021 lfr.png',
    link: 'O que são Observatórios de Aves - CBO2021(1).pdf',
  },
  // {
  //   title: "Palestra 'Histórico do monitoramento da avifauna na Serra da Mantiqueira'",
  //   text: "Apresentação abordando o desenvolvimento do OAMa com foco no programa de monitoramento de avifauna de longo-prazo na Serra da Mantiqueira realizada por Luiza Figueira à equipe técnica do ICMBio/CEMAVE.",
  //   img: "Mockup apresentação OAMa - para CEMAVE.png",
  //   link: ""
  // },
];
