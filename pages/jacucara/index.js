import Nav from "@includes/nav";
import Image from "next/image";
import Head from "next/head";
import Footer from "@includes/footer";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useAccordionItemContext,
} from "@reach/accordion";

export default function Jacucara() {
  return (
    <>
      <div className="pb-32">
        <Head>
          <title>CAMPANHA JACUÇARA</title>
        </Head>

        <Nav />
        <div className=" relative hero-small md:hero min-h-1/2">
          <div className="pt-32 lg:pb-16 md:pb-16 h-full  justify-items-center items-center">
            <div className="absolute top-0 h-full w-full">
              <Image
                // className="h-32"
                src="/jacucara/figs/1.jpg"
                layout="fill"
                //   width={"2000"}
                //   height={"1000"}
                objectFit="cover"
                objectPosition="top"
                priority={true}
              ></Image>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h1
            style={{ color: "#8f1858" }}
            class="w-full text-5xl font-bold leading-tight text-center text-gray-800"
          >
            Campanha JACUÇARA
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient2 w-72 md:w-96 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </div>
        <div class="container max-w-4xl mx-auto mt-16 ">
          <P>
            O nome da campanha –{" "}
            <span className="font-bold" style={{ color: "#8f1858" }}>
              Jacuçara!
            </span>{" "}
            – vem da junção de jacutinga, uma ave exclusiva da Mata Atlântica, e
            juçara, uma palmeira do mesmo bioma. A jacutinga se alimenta dos
            frutos da palmeira-juçara e, quando voa, leva no seu sistema
            digestivo muitas sementes, que acabam se espalhando por aí.
          </P>
          <P>
            Como essa palmeira oferece alimento para muitas espécies de animais,
            é essencial para a fauna da Mata Atlântica. Infelizmente, essa
            planta tão importante está ameaçada de extinção, devido ao
            desmatamento e à extração ilegal do seu palmito, uma prática que
            mata a árvore.
          </P>
          <P>
            Esses dois fatores também ameaçam as jacutingas, que ficam sem
            floresta e sem o seu alimento favorito! Por isso, a campanha
            Jacuçara quer divulgar a importância dessas duas espécies ameaçadas
            de extinção, que você pode ajudar a proteger!
          </P>
          <P>
            A campanha é uma iniciativa do Plano de Ação Nacional para
            Conservação das Aves da Mata Atlântica, organizada coletivamente
            pelas seguintes organizações:{" "}
          </P>
          <P>
            Observatório de Aves da Mantiqueira, Sociedade para a Conservação
            das Aves do Brasil, Parque das Aves, Aves Argentinas, Jardim
            Botânico do Rio de Janeiro, Associação de Zoológicos e Aquários do
            Brasil, Parque Nacional do Iguaçu, Centro Nacional de Pesquisa e
            Conservação de Aves Silvestres e Instituto Chico Mendes de
            Conservação da Biodiversidade.
          </P>
          <div className="mt-12 mb-4">
            <H2>JUÇARA </H2>
            <H3>Conheça a espécie, uma planta-chave da Mata Atlântica</H3>
            <P>
              <i>
                juçara, palmiteiro, palmito doce, içara, ripeira, ou ensarova
              </i>
            </P>
          </div>
          <P>
            A juçara (<i>Euterpe edulis</i>), palmeira nativa da Mata Atlântica,
            é fonte de alimento para uma grande diversidade de animais e, por
            isso, considerada uma espécie-chave para a preservação das matas
            locais. Mas, se antes essa palmeira era abundante nessas terras,
            hoje está vulnerável à extinção na natureza. Atualmente, apenas
            cerca de 15% do remanescente de Mata Atlântica é de habitat adequado
            para a ocorrência da espécie. Além da grande perda de habitat
            adequado para a ocorrência da juçara, a extração predatória para
            consumo do palmito causou um grande declínio populacional da
            espécie.
          </P>
          <Fig number={2} />
          <P>
            O fruto da juçara é altamente nutritivo e{" "}
            <A href="https://www.scielo.br/j/aabc/a/sD9XKD8d4xkpDRV5LjLxshR/?format=pdf&lang=en">
              serve de alimento para, ao menos, 58 espécies de aves e 21
              espécies de mamíferos
            </A>
            . Cutias, antas, catetos, esquilos e muitos outros animais se
            beneficiam de suas sementes ou frutos. Por isso a escassez dos
            frutos da juçara em uma floresta significa menor oferta de um
            importante recurso alimentar para animais silvestres. Dentre os
            animais que consomem o fruto, tucanos, jacutingas, jacus, sabiás e
            arapongas são os principais responsáveis pela dispersão das
            sementes.
          </P>
          <Fig number={3} />
          <P>
            A dispersão das sementes da juçara pela fauna que consome seus
            frutos é fundamental para a propagação da palmeira. Em florestas
            onde aves frugívoras de grande porte, como tucanos (
            <i>Ramphastos spp.</i>), jacus (<i>Penelope spp</i>.) e jacutingas (
            <i>Aburria jacutinga</i>), ainda ocorrem, as sementes de juçara são
            maiores do que em florestas onde encontramos apenas aves menores
            como os sabiás (<i>Turdus spp.</i>). Isso mostra que as sementes
            estão sendo selecionadas de acordo com a capacidade dos dispersores
            locais e que são selecionadas aquelas sementes que geram novas
            plântulas. Em áreas onde a fauna foi altamente depauperada, quem
            fará a dispersão da juçara? A relação juçara–fauna é uma via de mão
            dupla, em que uma depende da outra para sua perpetuação.
          </P>
          <div className="mt-8 mb-4">
            <H3>O consumo da juçara</H3>
          </div>
          <P>
            Além de sua importância ambiental, a juçara tem grande relevância
            econômica e social. É utilizada na alimentação humana (palmito,
            polpa dos frutos e botões florais) e já foi também um recurso na
            construção civil (estipe como caibros, ripas e mourões).
          </P>
          <div className="flex my-8 justify-center">
            <iframe
              className="w-5/6 h-64 md:h-96"
              src="https://www.youtube.com/embed/FtL8dOPeu6U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <P>
            O palmito é extraído do cerne do caule da palmeira. Além da juçara,
            o palmito pode ser extraído da pupunha e do açaizeiro (ou açaí), com
            a diferença de que a extração do palmito da juçara mata a palmeira.
            Isso ocorre porque, enquanto a palmeira pupunha e o açaizeiro formam
            touceiras, a juçara possui tronco único. Além disso, a juçara demora
            de 8 a 12 anos para produzir um palmito de qualidade, enquanto o da
            pupunha pode ser extraído 18 meses após o plantio.
          </P>
          <P>
            Além de ser responsável pela redução populacional da juçara pelo
            corte direto de cada indivíduo, a extração do palmito juçara nas
            matas naturais tem o efeito indireto de diminuir a entrada de novos
            indivíduos na população local. A cada indivíduo adulto derrubado da
            palmeira, há menos fontes de sementes para serem dispersadas e,
            consequentemente, menor germinação de novas plântulas.
          </P>
          <Fig number={4} />
          <P>
            Uma forma de conciliar exploração, consumo e conservação desta
            palmeira é substituindo a exploração do palmito pela exploração do
            fruto. O beneficiamento do fruto gera uma polpa saborosa e muito
            nutritiva, com grande potencial comercial. O manejo da juçara com
            enfoque nos frutos para obtenção de polpa é uma estratégia para a
            sua conservação aliada ao desenvolvimento da agricultura familiar.
            Quanto mais palmeira na mata, melhor para os extratores do fruto,
            que encontram mais recurso para ser coletado. Para que a extração do
            fruto seja feita de forma sustentável, é importante que a extração
            não seja completa, sempre deixando uma parcela dos frutos para ser
            consumida e dispersada pelos animais silvestres. Essa prática é
            também aliada do agricultor extrativista. A dispersão da semente da
            juçara feita pela fauna aumenta a quantidade da palmeira na área,
            aumentando, consequentemente, a quantidade de frutos que poderão ser
            explorados para consumo e comercialização.{" "}
          </P>
          <Fig number={5} />{" "}
          <div className="mt-12 mb-4">
            <H2>JACUTINGA</H2>
            <H3>Conheça a espécie de ave jardineira da Mata Atlântica</H3>
          </div>
          <P>
            Há uma espécie de ave com uma relação tão marcante com a palmeira
            juçara que seu declínio populacional tem sido fortemente relacionado
            com o declínio da palmeira. Essa ave é a jacutinga (
            <i>Aburria jacutinga</i>).{" "}
          </P>
          <Fig number={6} />
          <P>
            A jacutinga é uma ave grande: mede de 64 a 74 centímetros e pesa
            entre 1,1 e 1,4 quilo. Sua plumagem é predominantemente preta, mas
            com um característico topete branco e pontinhas brancas nas asas.
            Tem também um bico azulado e a barbela (pele da região do pescoço)
            nas cores azul e vermelha.
          </P>
          <Fig number={7} />{" "}
          <P>
            Restrita à Mata Atlântica do Sudeste do Brasil, Argentina e
            Paraguai, a jacutinga é uma espécie em risco de extinção. A falta de
            seu recurso favorito, os frutos da palmeira juçara, não é o único
            desafio que esta ave enfrenta para manter suas populações estáveis.
            A perda de habitat e a caça são identificadas como as principais
            causas do declínio populacional desta espécie.{" "}
          </P>
          <P>
            Ela é carinhosamente apelidada de ave jardineira da floresta, pois
            espalha as sementes de muitos frutos dos quais se alimenta. São
            registrados pelo menos 41 frutos diferentes consumidos pela
            jacutinga. As sementes são regurgitadas ou defecadas durante e após
            o consumo do fruto e, com isso, dispersadas por onde a jacutinga se
            movimenta. Ela passa a maior parte de seu tempo nas partes altas das
            árvores emergentes, mas pode ocasionalmente descer até o solo para
            pegar frutos caídos.
          </P>
          <div className="mt-12 mb-4">
            <H2>O que significa estar em risco de extinção?</H2>
          </div>
          <P>
            Extinção significa deixar de existir. A extinção de uma espécie
            significa seu desaparecimento definitivo.
          </P>
          <Fig number={8} />{" "}
          <P>
            Quando dizemos que uma espécie está em risco de extinção, isso
            significa que as populações dessa espécies estão em situação de
            declínio, isto é, que o número de indivíduos está diminuindo. A
            velocidade deste declínio ou o número e distribuição espacial dos
            indivíduos da espécie é que vão indicar quão alto é o risco de a
            espécie ser extinta, ou seja, o risco de que até o último indivíduo
            morra.
          </P>
          <P>
            A Lista Vermelha de Espécies Ameaçadas é hoje uma das principais
            ferramentas para avaliação e indicação de risco das espécies. Criada
            em 1964 pela União Internacional de Conservação da Natureza e dos
            Recursos Naturais (IUCN, em inglês), a Lista Vermelha constitui um
            catálogo detalhado sobre os dados de conservação global das espécies
            de todo o mundo.
          </P>
          <P>
            As espécies são avaliadas por organizações, cientistas e
            especialistas que analisam seus dados de ocorrência no tempo e
            espaço. O número de indivíduos em idade reprodutiva também é
            importante nessa análise, pois permite avaliar o tamanho da
            população no tempo, espaço e, dependendo da qualidade desses dados,
            estimar ainda flutuações futuras em diferentes cenários de políticas
            públicas.{" "}
          </P>
          <P>
            As espécies analisadas são então classificadas em nove diferentes
            categorias: Não analisada (NE), quando ainda não avaliamos a
            respectiva espécie; Dados insuficientes (DD), quando não temos
            muitas informações sobre a espécie; Pouco preocupante (LC), quando a
            espécie vai muito bem, obrigada; Quase ameaçada (NT), quando há
            indícios de declínio ou ameaças à perpetuação da espécie no
            horizonte; Vulnerável (VU), quando a espécie apresenta alto risco de
            extinção, caso não haja uma mudança no cenário; Em perigo (EN),
            quando o risco de a espécie desaparecer num futuro próximo é muito
            alto; Criticamente ameaçada (CR), quando a espécie está sob risco
            iminente de extinção e precisa de cuidados urgentes para não
            desaparecer; Extinta na natureza (EW), quando a espécie não tem mais
            representantes na natureza, apenas aqueles mantidos sob cuidados ex
            situ; e, por fim, Extinta (EX), quando é confirmado que morreu até o
            último indivíduo da espécie.{" "}
          </P>
          <P>
            São consideradas como <strong>espécies ameaçadas</strong> apenas
            aquelas classificadas como VU, EN e CR. A palmeira juçara está
            classificada como VU, vulnerável à extinção, e a jacutinga como EN,
            em perigo de extinção.{" "}
          </P>
          <Fig number={9} />{" "}
          <div className="mt-12 mb-4">
            <H2>O que está sendo feito para proteger essas espécies?</H2>
            <Accordion collapsible multiple className="mt-6">
              <Item>
                {" "}
                <Acc1 />
              </Item>
              <Item>
                {" "}
                <Acc2 />
              </Item>
              <Item>
                {" "}
                <Acc3 />
              </Item>
            </Accordion>
          </div>
          <H2 className="mb-8">O que você pode fazer pela conservação destas espécies?</H2>
          <Fig number={10} />
        </div>
      </div>
    </>
  );
}

const P = ({ children, ...props }) => (
  <p class="text-gray-600 px-8 md:px-0 mb-2">{children}</p>
);

const H2 = ({ children, ...props }) => (
  <h2 style={{ color: "#8f1858" }} className={`font-bold text-3xl px-8 md:px-0 ${props.className}`}>
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 style={{ color: "#c02176" }} class="my-4 px-8 text-xl md:px-0 mb-2">
    {children}
  </h3>
);

const AccH3 = ({ children }) => (
  <h3 style={{ color: "#c02176" }} class="px-8 py-6 text-2xl ">
    {children}
  </h3>
);

const ArrowH3 = ({ children, className }) => (
  <h3 style={{ color: "#c02176" }} className={`px-8 py-6 text-lg ${className}`}>
    {children}
  </h3>
);

const A = ({ children, href }) => (
  <a
    style={{ color: "#8f1858" }}
    className="underline"
    href={href}
    target="_blank"
  >
    {children}
  </a>
);

const Acc3 = () => {
  const { isExpanded } = useAccordionItemContext();

  return (
    <>
      <AccordionButton className=" border-black w-full flex justify-between items-center">
        <AccH3>Da produção ao consumo consciente: protegendo a juçara</AccH3>
        <ArrowH3 className={` ${isExpanded ? "hidden" : ""}`}>&#9660;</ArrowH3>
        <ArrowH3 className={` ${isExpanded ? "" : "hidden"}`}>&#9650;</ArrowH3>
      </AccordionButton>
      <AccordionPanel className="px-8 py-4">
        <P>
          As ações para proteger essa espécie-chave para a Mata Atlântica
          acontecem em múltiplas frentes ao mesmo tempo.{" "}
        </P>
        <P>
          Divulgar informações sobre a espécie, suas ameaças e formas adequadas
          de consumo é fundamental para que a população em geral participe da
          preservação da espécie e entenda o impacto de seu consumo – positiva
          ou negativamente. Para fazer essa ponte de comunicação e informação
          com a sociedade, foram publicados diversas cartilhas, vídeos e até
          livros de receitas online. Você encontra uma seleção desse material
          aqui.
        </P>
        <P>
          Ações diretas para tentar aumentar o número de indivíduos de juçara
          presentes nas matas são realizadas através de chuvas de sementes! A
          Fundação Florestal (FF), instituição ligada à Secretaria de
          Infraestrutura e Meio Ambiente (SIMA) de São Paulo,{" "}
          <A href="https://www.infraestruturameioambiente.sp.gov.br/2021/07/lancamento-aereo-de-sementes-para-reflorestamento-de-especie-ameacada-de-extincao/">
            lançou cerca de 2 toneladas
          </A>{" "}
          de sementes de juçara sobre matas do Parque Estadual da Serra do Mar.
          Essa ação fez parte de um programa de longa duração para promover a
          restauração e conservação da palmeira juçara, e o propósito é
          continuar espalhando as sementes da espécie.
        </P>
        <P>
          A fim de regular o consumo e torná-lo sustentável, existe um grande
          movimento para incentivar as pessoas a comercializarem e consumirem o
          fruto em vez do palmito da juçara. O palmito da juçara pode ser
          substituído no cardápio pelo palmito da pupunha, por exemplo. E o
          fruto pode ser extraído e consumido sem prejudicar a sobrevivência e a
          manutenção da planta. Para isso é fundamental que a extração dos
          frutos seja feita de forma adequada, seguindo um plano de manejo em
          que se preservem frutos suficientes para o consumo pela fauna
          silvestre e sementes suficientes para serem dispersadas e recrutar
          novas plântulas da juçara no local. No caso de quem faz a extração do
          fruto em áreas naturais, é importante também devolver as sementes para
          o local após a extração da polpa do fruto.{" "}
        </P>
        <P>
          O Sul do país é palco também de um forte projeto que combina
          preservação da juçara, segurança alimentar e fonte de renda para
          produtores rurais.{" "}
          <A href="https://midianinja.org/news/a-contribuicao-do-cultivo-do-acai-jucara-para-a-nutricao-e-preservacao-ambiental-no-sul-do-pais/">
            {" "}
            O projeto liderado pela ONG Centro Ecológico
          </A>{" "}
          oferece suporte técnico e logístico para a produção de juçara em
          sistemas agroecológicos no litoral norte gaúcho e no sul catarinense.{" "}
        </P>
      </AccordionPanel>
    </>
  );
};

const Acc2 = () => {
  const { isExpanded } = useAccordionItemContext();

  return (
    <>
      <AccordionButton className=" border-black w-full flex justify-between items-center">
        <AccH3>
          Jacutinga sem fronteiras: a conservação da espécie na Mata Atlântica
          argentina
        </AccH3>
        <ArrowH3 className={` ${isExpanded ? "hidden" : ""}`}>&#9660;</ArrowH3>
        <ArrowH3 className={` ${isExpanded ? "" : "hidden"}`}>&#9650;</ArrowH3>
      </AccordionButton>
      <AccordionPanel className="px-8 py-4">
        <P>
          O Plano Nacional de Conservação da Jacutinga na Argentina faz parte
          dos compromissos assumidos pela Aves Argentinas, o Ministério do Meio
          Ambiente e Recursos Renováveis ​​da Província de Misiones e o IMIBIO
          (Instituto Misionero de la Biodiversidad) a fim de iniciar os esforços
          necessários para seu estudo e conservação na Mata Atlântica da
          Argentina, com uma projeção para daqui cinco anos (2021-2025), e o
          objetivo de: atualizar as informações relacionadas ao estado
          populacional da espécie; identificar sítios com presença confirmada e
          extinções locais; aumentar o conhecimento sobre sua ecologia e ameaças
          na Província de Misiones; fortalecer as ações de conservação in situ,
          como o controle da caça clandestina e da fragmentação de ambientes, em
          toda a área onde as populações de jacutinga estão presentes na
          Argentina; criar uma estratégia ex situ para a conservação da espécie,
          incluindo um criadouro em cativeiro, um livro de registro e protocolos
          de resgate e manejo; e converter a jacutinga em uma imagem conhecida e
          identificável com a selva de Misiones, ao mesmo tempo em que
          diferentes públicos serão alcançados para divulgar a espécie, suas
          ameaças e as ações que a instituição realiza em busca de sua
          conservação.
        </P>
        <P>
          Para chegar a um acordo sobre um plano de ação entre as diferentes
          instituições governamentais e não governamentais que trabalham no
          estudo e conservação da biodiversidade da Mata Atlântica argentina,
          foi organizado, em 2021, o campo de trabalho "Plano para a conservação
          da jacutinga na Argentina: Workshop de diagnóstico e consenso de
          trabalho", a fim de atualizar o diagnóstico da situação, análise de
          ameaças e propostas de ações e compromissos, como a gestão de
          informação, educação e comunicação, a gestão de populações cativas,
          pelas diferentes instituições e atores ligados à conservação da
          jacutinga.
        </P>
      </AccordionPanel>
    </>
  );
};
const Acc1 = () => {
  const { isExpanded } = useAccordionItemContext();
  return (
    <>
      <AccordionButton className=" border-black w-full flex justify-between items-center">
        <AccH3>
          De volta pra casa: a reintrodução da jacutinga na natureza{" "}
        </AccH3>
        <ArrowH3 className={` ${isExpanded ? "hidden" : ""}`}>&#9660;</ArrowH3>
        <ArrowH3 className={` ${isExpanded ? "" : "hidden"}`}>&#9650;</ArrowH3>
      </AccordionButton>
      <AccordionPanel className="px-8 py-4">
        <P>
          Em 2010, considerando-se a alarmante situação de conservação da
          jacutinga e as constantes pressões ao habitat da espécie,
          especialmente na região do Parque Estadual da Serra do Mar (SP), a
          SAVE Brasil (Sociedade para a Conservação das Aves do Brasil) iniciou
          o “Programa de Conservação de Aves Cinegéticas da Mata Atlântica:
          Reintrodução e Monitoramento de Jacutingas (Aburria jacutinga)”. O
          programa foi uma exigência do Instituto Chico Mendes de Conservação da
          Biodiversidade – ICMBio/APA Mananciais do Rio Paraíba do Sul, com a
          finalidade de atender a parte das condicionantes ambientais referentes
          à licença de instalação do gasoduto Caraguatatuba-Taubaté (GASTAU)
          construído pela Petrobras.
        </P>
        <P>
          A Fase 1 (2010-2013) do programa confirmou a raridade da jacutinga (
          <i>Aburria jacutinga</i>) na Região da Serra do Mar e a necessidade de
          um reforço populacional urgente a fim de evitar a extinção local da
          espécie, considerada Criticamente Ameaçada (CR) de extinção, de acordo
          com a lista de animais ameaçados no estado de São Paulo, e Em Perigo
          (EN), de acordo com a lista nacional publicada em dezembro de 2014.
        </P>
        <P>
          No estado do Rio de Janeiro, a espécie está extinta, foi avistada em
          Itatiaia pela última vez em 1978 e na Serra dos Órgãos em 1980, fato
          este que levou a extensão do programa de reintrodução de jacutingas
          também para a Reserva Ecológica de Guapiaçu (REGUA), situada a cerca
          de 150 km ao norte da cidade do Rio de Janeiro.
        </P>
        <P>
          A fase II do programa, iniciada em 2014, visou à reintrodução e
          monitoramento de jacutingas: na região da Serra da Mantiqueira, em São
          Francisco Xavier, distrito de São José dos Campos (SP); na região da
          Serra do Mar, em áreas próximas ao Parque Estadual da Serra do Mar –
          Núcleo Caraguatatuba/São Paulo; e no município de Cachoeiras de
          Macacu, na Reserva Ecológica de Guapiaçu (REGUA), no estado do Rio de
          Janeiro. Desde 2019, as reintroduções concentraram-se em um único
          local – São Francisco Xavier –, através da utilização do software
          Vortex para Análise da Viabilidade Populacional.
        </P>
        <P>
          As ações do projeto envolvem testes de sanidade das aves, preparação
          comportamental, reintrodução/soltura e monitoramento, educação e
          disseminação da importância da conservação da jacutinga e outras aves
          de Mata Atlântica para a comunidade em paralelo com o envolvimento dos
          órgãos de fiscalização ambiental nas ações de campo. O apoio de
          zoológicos e dos criadouros conservacionistas de jacutingas, através
          do fornecimento de aves para serem soltas, é fundamental para o
          sucesso do projeto. Além disso, graças ao trabalho desenvolvido pela
          SAVE Brasil, a jacutinga foi elencada como uma das 25 espécies
          prioritárias para a conservação, através de um acordo de cooperação
          técnica entre a Associação de Zoológicos e Aquários do Brasil (AZAB),
          o Ministério do Meio Ambiente e o ICMBio para a condução do studbook
          da espécie. Os studbooks são a ferramenta mais importante na gestão
          científica de populações ex situ de animais silvestres, assegurando
          tamanho suficiente, estabilidade demográfica e alto nível de
          diversidade genética. O Parque das Aves é o studbook keeper da
          jacutinga.
        </P>
        <P>
          O projeto realizou a primeira soltura em junho de 2016, e até o
          momento foram 50 jacutingas soltas na Serra da Mantiqueira, no
          distrito de São Francisco Xavier, 6 na Serra do Mar e 2 na Reserva
          Ecológica de Guapiaçu, totalizando 58 indivíduos.
        </P>
        <P>
          As aves são monitoradas por transmissores via rádio, idas a campo e/ou
          através da participação da comunidade local, incentivando-se a prática
          de observação de aves.
        </P>
        <strong>
          <P>
            O programa visa aumentar a população de jacutingas na Mata Atlântica
            e estabelecer um protocolo de reintrodução e monitoramento que
            poderá ser replicado em outros locais onde a espécie está localmente
            extinta.
          </P>
        </strong>
      </AccordionPanel>
    </>
  );
};

const Item = ({ children }) => (
  <AccordionItem className="border-purple-100 rounded-md border-2">
    {children}{" "}
  </AccordionItem>
);

function Fig(props) {
  const { number, legend, size, objectFit } = props;
  console.log(`public/jacucara/figs/${number}.jpg`);
  const image = require(`public/jacucara/figs/${number}.jpg`);
  // const image = {default:{height:1,width:1}}

  return (
    <div className="mb-6">
      {/* <div  className={` relative w-full ${size==="large"?"h-large":"h-96 sm:h-medium"}`}> */}
      <Image
        objectFit={objectFit || size === "large" ? "contain" : "cover"}
        layout="responsive"
        height={image.default.height}
        width={image.default.width}
        src={image}
      />
      {/* </div> */}

      <legend className="text-gray-500 text-sm mt-4">{legend}</legend>
    </div>
  );
}
