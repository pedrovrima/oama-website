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
import Link from "next/link";

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
            A <B>Campanha Jacuçara</B> nasceu para divulgar a importância de
            duas espécies ameaçadas de extinção: a jacutinga e a jacuçara.
          </P>
          <P>
            Agora fica fácil entender o porquê do nome Jacuçara, união do nome
            <B>jacutinga</B>, ave exclusiva da Mata Atlântica, e <B>juçara</B>,
            uma palmeira do mesmo bioma.{" "}
          </P>
          <P>
            A jacutinga <B>se alimenta</B> dos frutos da palmeira-juçara e,
            quando voa, leva no seu sistema digestivo muitas sementes, que
            acabam se espalhando por aí.
          </P>
          <P>
            Já a juçara, oferece <B>alimento</B> para muitas espécies de animais
            e é essencial para a fauna da Mata Atlântica.
          </P>
          <P>
            Infelizmente, essa planta tão importante está ameaçada de extinção
            devido ao <B>desmatamento</B> e à <B>extração ilegal</B> do seu
            palmito, uma prática que mata a árvore.
          </P>
          <P>
            Esses dois fatores também <B>ameaçam</B> as jacutingas, que ficam
            sem floresta e sem o seu alimento favorito!
          </P>
          <P>
            A campanha é uma iniciativa do{" "}
            <A
              href={
                "https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/pan/pan-aves-da-mata-atlantica"
              }
              target="_blank"
            >
              Plano de Ação Nacional para Conservação das Aves da Mata Atlântica
            </A>
            , organizado coletivamente pelas seguintes organizações:
          </P>
          <Logos />
          <div className="flex my-8 justify-center">
            <iframe
              className="w-5/6 h-64 md:h-96"
              src="https://www.youtube.com/embed/4NO3bjzNFLM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
            A{" "}
            <B>
              juçara (<i>Euterpe edulis</i>)
            </B>
            , palmeira nativa da Mata Atlântica, é <B>fonte de alimento</B> para
            uma grande diversidade de animais e, por isso, considerada uma{" "}
            <B>espécie-chave</B> para a preservação de matas locais.
          </P>
          <P>
            Mas, se antes essa palmeira <B>era abundante</B> nessas terras, hoje
            está <B>vulnerável à extinção</B> na natureza. Atualmente, apenas
            cerca de <B>15%</B> do remanescente de Mata Atlântica é de habitat
            adequado para a ocorrência da espécie.{" "}
          </P>
          <P>
            Além disso, a extração predatória para <B>consumo</B> do palmito
            causou um grande <B>declínio</B> populacional da espécie.
          </P>
          <Fig number={2} />
          <div className="my-4">
            <P>
              O fruto da juçara é <B>altamente nutritivo</B> e{" "}
              <A href="https://www.scielo.br/j/aabc/a/sD9XKD8d4xkpDRV5LjLxshR/?format=pdf&lang=en">
                serve de alimento para, ao menos, 58 espécies de aves e 21
                espécies de mamíferos
              </A>
              . Cutias, antas, catetos, esquilos e muitos outros animais se
              beneficiam de suas sementes ou frutos.
            </P>
            <P>
              Por esse motivo, a <B>escassez</B> dos frutos da juçara em uma
              floresta significa <B>menor oferta</B> de um importante recurso
              alimentar para animais silvestres.{" "}
            </P>
            <P>
              Dentre os animais que consomem o fruto, tucanos, jacutingas,
              jacus, sabiás e arapongas são os principais responsáveis pela{" "}
              <B>dispersão das sementes</B>.
            </P>
          </div>
          <Fig number={3} />
          <P>
            A <B>dispersão</B> das sementes da juçara pela fauna que consome
            seus frutos é <B>fundamental</B> para a propagação da palmeira.{" "}
          </P>
          <P>
            Em florestas onde <B>aves frugívoras de grande porte</B>, como
            tucanos (<i>Ramphastos spp.</i>), jacus (<i>Penelope spp.</i>) e
            jacutingas (<i>Aburria jacutinga</i>), ainda ocorrem,{" "}
            <B>as sementes de juçara são maiores</B> do que em florestas onde
            encontramos apenas aves menores como os sabiás (<i>Turdus spp.</i>).{" "}
          </P>
          <P>
            Isso mostra que as sementes estão sendo selecionadas de acordo com a
            capacidade dos dispersores locais. Consequentemente,{" "}
            <B>a ausência de aves de grande porte</B> nas florestas{" "}
            <B>compromete</B> a geração de novas palmeiras, que produziriam
            frutos maiores.
          </P>
          <div className="mt-8 mb-4">
            <H3>O consumo da juçara</H3>
          </div>
          <P>
            Além de sua importância ambiental, a juçara tem grande{" "}
            <B>relevância econômica e social</B>.{" "}
          </P>
          <P>
            É utilizada na <B>alimentação humana</B> (palmito, polpa dos frutos
            e botões florais) e já foi também um recurso na{" "}
            <B>construção civil</B> (estipe como caibros, ripas e mourões).
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
            O palmito juçara é extraído do cerne do caule da palmeira. No
            entanto, essa prática <B>mata a palmeira</B>.{" "}
          </P>
          <P>
            Além da palmeira juçara,{" "}
            <B>o palmito pode ser extraído de outras espécies de palmeiras</B>,
            como, por exemplo, a pupunha e o açaizeiro (ou açaí). A extração do
            palmito nessas outras espécies de palmeiras é uma solução
            sustentável de consumo.{" "}
          </P>
          <P>
            Isso porque, enquanto a palmeira pupunha e o açaizeiro formam
            touceiras, ou seja, vários caules,{" "}
            <B>a juçara possui tronco único. </B>
          </P>
          <P>
            Além disso, a <B>juçara</B> demora de <B>8 anos a 12 anos</B> para
            produzir um palmito de qualidade, enquanto o da pupunha pode ser
            extraído 18 meses após o plantio.
          </P>
          <P>
            Além do corte direto de cada indivíduo ser responsável pela redução
            populacional da juçara, a <B>extração do palmito juçara</B> nas
            matas naturais tem o efeito indireto de reduzir a entrada de novos
            indivíduos na população local.{" "}
          </P>
          <P>
            A cada indivíduo adulto derrubado da palmeira, há menos fontes de
            sementes para serem dispersadas e, consequentemente, menor
            germinação de novas plântulas.
          </P>
          <Fig number={4} />
          <P>
            Uma forma de conciliar a exploração, o consumo e a conservação dessa
            palmeira é por meio da{" "}
            <B>substituição da exploração do palmito pelo fruto. </B>
          </P>
          <P>
            O beneficiamento do fruto gera uma polpa saborosa e muito nutritiva,{" "}
            <B>com grande potencial comercial</B>.
          </P>
          <P>
            O manejo da juçara, com enfoque nos frutos para{" "}
            <B>obtenção de polpa</B>, é uma estratégia para a sua conservação,
            aliada ao desenvolvimento da agricultura familiar.{" "}
          </P>
          <P>
            Quanto mais palmeiras na mata, melhor para os extratores do fruto,
            que encontram mais recursos para serem coletados.
          </P>
          <P>
            Para que a <B>extração do fruto</B> seja feita de maneira
            sustentável, é importante que ela não seja realizada completamente
            <B>não seja realizada completamente</B>, e{" "}
            <B>uma parcela dos frutos</B>
            seja deixada para consumo e para ser dispersada pelos animais
            silvestres.{" "}
          </P>
          <P>
            Essa prática é também aliada do agricultor extrativista. A{" "}
            <B>dispersão da semente</B> da juçara pela fauna aumenta a
            quantidade da palmeira na área e, consequentemente, aumenta a
            quantidade de frutos que poderão ser explorados para o consumo e a
            comercialização.
          </P>
          <Fig
            number={5}
            legend={
              <p>
                Por Marina Vieira Souza. Ilustração{" "}
                <A
                  href="http://cargocollective.com/patriciayamamoto/filter/Ju%25C3%25A7ara/Materiais-educativos"
                  target="_blank"
                >
                  Patrícia Yamamoto
                </A>
              </p>
            }
          />{" "}
          <div className="mt-12 mb-4">
            <H2>JACUTINGA</H2>
            <H3>Conheça a espécie de ave jardineira da Mata Atlântica</H3>
          </div>
          <P>
            Há uma espécie de ave com uma relação tão marcante com a palmeira
            juçara que a sua sobrevivência está fortemente relacionada com a
            palmeira. Essa ave é a{" "}
            <B>
              jacutinga (<i>Aburria jacutinga</i>)
            </B>
            .{" "}
          </P>
          <Fig number={6} />
          <P>
            A jacutinga é uma <B>ave grande</B>: mede de 64 centímetros a 74
            centímetros e pesa entre 1,1 quilo e 1,4 quilo. Sua plumagem é
            predominantemente preta, mas com um característico{" "}
            <B>topete branco</B> e pontinhas brancas nas asas. Tem também um
            bico azulado e a <B>barbela (pele da região do pescoço)</B> nas
            cores azul e vermelha.
          </P>
          <Fig number={7} />{" "}
          <P>
            Restrita à Mata Atlântica do Sudeste do Brasil, Argentina e
            Paraguai, a jacutinga é uma espécie em <B>risco de extinção.</B>{" "}
          </P>
          <P>
            A falta de seu recurso favorito, os frutos da palmeira juçara, não é
            o único <B>desafio</B> que esta ave enfrenta para manter suas
            populações estáveis. A <B>perda de habitat</B> e a caça são
            identificadas como as <B>principais causas</B> do declínio
            populacional dessa espécie.
          </P>
          <P>
            Ela é carinhosamente apelidada de <B>ave jardineira</B> da floresta,
            pois espalha as sementes de muitos frutos dos quais se alimenta.{" "}
          </P>
          <P>
            São registrados pelo menos <B>41 frutos diferentes</B> consumidos
            pela jacutinga. As sementes são regurgitadas ou defecadas durante e
            após o consumo do fruto e, com isso, <B>dispersadas</B> por onde a
            jacutinga se movimenta. Ela passa a maior parte de seu tempo nas
            partes altas das árvores emergentes, mas pode ocasionalmente descer
            até o solo para pegar frutos caídos.
          </P>
          <div className="mt-12 mb-4">
            <H2>O que significa estar em risco de extinção?</H2>
          </div>
          <P>
            <B>Extinção significa deixar de existir</B>. A extinção de uma
            espécie significa seu desaparecimento definitivo.
          </P>
          <Fig number={8} />{" "}
          <P>
            Quando dizemos que uma espécie está <B>em risco de extinção</B>,
            isso <B>significa</B> que as populações dessa espécies estão em{" "}
            <B>situação de declínio</B>, isto é, que o número de indivíduos está
            reduzindo ou que eles existem em um número tão pequeno na natureza,
            e, por isso, as chances de desaparecer são maiores.
          </P>
          <P>
            Apesar de relativamente comum no meio ambiente,{" "}
            <B>
              o processo de extinção está sendo intensificado pela ação humana
            </B>
            . Destamatamento, mudanças climáticas, caça ilegal e o tráfico de
            animais são alguns dos motivos que têm acelerado o processo de
            extinção.
          </P>
          <P>
            A velocidade deste declínio ou o número e distribuição espacial dos
            indivíduos da espécie é que vão indicar quão alto é o risco de a
            espécie ser extinta, ou seja, o risco de que até o último indivíduo
            desapareça.
          </P>
          <P>
            <B>A Lista Vermelha de Espécies Ameaçadas</B> é, hoje, uma das
            principais ferramentas para avaliação e indicação de risco das
            espécies. Método criado em 1964 pela União Internacional de
            Conservação da Natureza e dos Recursos Naturais (IUCN, em inglês), a
            Lista Vermelha constitui <B>um catálogo detalhado</B> sobre os dados
            de conservação global das <B>espécies de todo o mundo</B>,
            amplamente utilizado por vários governos e instituições para
            direcionar esforços de conservação.
          </P>
          <P>
            A partir do levantamento de uma série de informações, inclusive com
            a participação da sociedade, <B>as espécies são avaliadas</B> por
            organizações, cientistas e especialistas que analisam os dados de
            ocorrência no tempo e no espaço, associado às principais causas que
            ameaçam essas espécies.
          </P>
          <P>
            Os resultados dessa avaliação indicam o risco de extinção para cada
            uma das espécies, que podem ser classificadas em uma dentre as nove
            diferentes categorias:{" "}
          </P>
          <ul className="list-disc text-gray-600 px-8 md:px-0 mb-2">
            <li>
              Não analisada (NE), quando ainda não há avaliação da respectiva
              espécie;{" "}
            </li>
            <li>
              Dados insuficientes (DD), quando não há muitas informações sobre a
              espécie;{" "}
            </li>
            <li>
              Pouco preocupante (LC), quando a espécie vai muito bem, obrigada;{" "}
            </li>
            <li>
              Quase ameaçada (NT), quando há indícios de declínio ou ameaças à
              perpetuação da espécie no horizonte;{" "}
            </li>
            <li>
              Vulnerável (VU), quando a espécie apresenta alto risco de
              extinção, caso não haja uma mudança no cenário;{" "}
            </li>
            <li>
              Em perigo (EN), quando o risco de a espécie desaparecer num futuro
              próximo é muito alto; Criticamente ameaçada{" "}
            </li>
            <li>
              (CR), quando a espécie está sob risco iminente de extinção e
              precisa de cuidados urgentes para não desaparecer;{" "}
            </li>
            <li>
              Extinta na natureza (EW), quando a espécie não tem mais
              representantes na natureza, apenas aqueles mantidos sob cuidados
              humanos ex situ, e, por fim,{" "}
            </li>
            <li>
              Extinta (EX), quando é confirmado que morreu até o último
              indivíduo da espécie.
            </li>
          </ul>
          <P>
            São consideradas como <B>espécies ameaçadas</B> apenas aquelas
            classificadas como VU, EN e CR.{" "}
          </P>
          <P>
            A <B>palmeira juçara</B> está classificada como VU,{" "}
            <B>vulnerável à extinção</B>, e a jacutinga como EN,{" "}
            <B>em perigo de extinção</B>.
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
          <Fig
            png
            number={12}
            legend={
              <p>
                Ilustração{" "}
                <A href="https://www.instagram.com/leo_marujo/" target="_blank">
                  Leonardo Marujo
                </A>
              </p>
            }
          />
          <H2 className="mb-8">
            O que você pode fazer pela conservação destas espécies?
          </H2>
          <Fig number={10} />
          <H2 id="files">Materiais Relacionados</H2>
          <Pags></Pags>
          <Fig number={11} />{" "}
        </div>
      </div>
    </>
  );
}

const P = ({ children, ...props }) => (
  <p class="text-gray-600 px-8 md:px-0 mb-2">{children}</p>
);

const H2 = ({ children, ...props }) => (
  <h2
    style={{ color: "#8f1858" }}
    className={`font-bold text-3xl px-8 md:px-0 mb-4 ${props.className}`}
    id={props.id}
  >
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 style={{ color: "#c02176" }} class="my-4 px-8 text-xl md:px-0 mb-2">
    {children}
  </h3>
);

const AccH3 = ({ children }) => (
  <h3 style={{ color: "#c02176" }} class="text-left px-8 py-6 text-2xl ">
    {children}
  </h3>
);

const ArrowH3 = ({ children, className }) => (
  <h3 style={{ color: "#c02176" }} className={`px-8 py-6 text-lg ${className}`}>
    {children}
  </h3>
);

const A = ({ children, href, noTarget }) => (
  <a
    style={{ color: "#8f1858" }}
    className="underline"
    href={href}
    target={!noTarget && "_blank"}
  >
    {children}
  </a>
);

const B = ({ children }) => (
  <span style={{ color: "#8f1858" }} className="font-bold">
    {children}
  </span>
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
          acontecem em múltiplas frentes, ao mesmo tempo.{" "}
        </P>
        <P>
          Divulgar informações sobre a espécie, suas ameaças e formas adequadas
          de consumo é fundamental para que a população em geral participe da
          preservação da espécie e entenda o impacto de seu consumo – positiva
          ou negativamente. Para fazer essa ponte de comunicação e informação
          com a sociedade, foram publicados diversas cartilhas, vídeos e até
          livros de receitas online. Você encontra uma seleção desse material{" "}
          <A noTarget href="#files">
            aqui
          </A>
          .
        </P>
        <P>
          Ações diretas para tentar aumentar o número de indivíduos de juçara
          presentes nas matas são realizadas por meio de chuvas de sementes. A
          Fundação Florestal (FF), instituição ligada à Secretaria de
          Infraestrutura e Meio Ambiente (SIMA) de São Paulo,{" "}
          <A href="https://www.infraestruturameioambiente.sp.gov.br/2021/07/lancamento-aereo-de-sementes-para-reflorestamento-de-especie-ameacada-de-extincao/">
            lançou cerca de 2 toneladas
          </A>{" "}
          de sementes de juçara sobre as matas do Parque Estadual da Serra do
          Mar. Essa ação fez parte de um programa de longa duração para promover
          a restauração e a conservação da palmeira juçara, e o propósito é
          continuar espalhando as sementes da espécie.
        </P>
        <P>
          A fim de regular o consumo e torná-lo sustentável, existe um grande
          movimento para incentivar as pessoas a comercializarem e consumirem o
          fruto em vez do palmito da juçara. O palmito da juçara pode ser
          substituído no cardápio pelo palmito da pupunha, por exemplo. E o
          fruto pode ser extraído e consumido sem prejudicar a sobrevivência e a
          manutenção da planta. Para isso é fundamental que a extração dos
          frutos seja feita de maneira adequada, seguindo um plano de manejo em
          que se preservem frutos suficientes para o consumo pela fauna
          silvestre e sementes suficientes para serem dispersadas e, dessa
          forma, recrutar novas plântulas da juçara no local. No caso de quem
          faz a extração do fruto em áreas naturais, é importante também
          devolver as sementes para o local após a extração da polpa do fruto.{" "}
        </P>
        <P>
          O Sul do país é palco também de importantes iniciativas que combinam
          preservação da juçara, segurança alimentar e fonte de renda para
          produtores rurais. Por acreditar que a produção de alimentos e a
          preservação ambiental podem e devem caminhar juntas, o Centro
          Ecológico vem incentivando o cultivo da palmeira juçara em sistemas
          agroflorestais agroecológicos há mais de duas décadas. O ponto central
          é promover a valorização do açaí juçara e viabilizar sua cadeia
          produtiva, buscando demonstrar que este é caminho muito mais
          interessante nos aspectos econômicos, ambientais e sociais, promovendo
          o que é denominado conservação através do uso.
        </P>
        <P>
          Dessa forma, as comunidades rurais passam a cultivar a juçara e a se
          engajar na preservação da espécie. Ás palmeiras cultivadas se tornam
          matrizes produtoras de frutos, formando corredores ecológicos com as
          áreas de mata adjacentes, possibilitando o trânsito e alimentação da
          fauna associada. Difundindo esta ideia acredita-se que teremos um
          efeito cascata de preservação da palmeira juçara e de espécies como a
          Jacutinga.
        </P>

        <P>
          Atualmente, com apoio de um Fundo de Adaptação Climática do Programa
          das Nações Unidas para o Desenvolvimento (PNUD), o projeto
          <A href="https://midianinja.org/news/a-contribuicao-do-cultivo-do-acai-jucara-para-a-nutricao-e-preservacao-ambiental-no-sul-do-pais/">
            {" "}
            “Combinando renda com proteção florestal”, liderado pela ONG Centro
            Ecológico{" "}
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
          incluindo um criadouro em cativeiro, um livro de registro (
          <i>Studbook</i>) e protocolos de resgate e manejo; e converter a
          jacutinga em uma imagem conhecida e identificável com a selva de
          Misiones, ao mesmo tempo em que diferentes públicos serão alcançados
          para divulgar a espécie, suas ameaças e as ações que a instituição
          realiza em busca de sua conservação.
        </P>
        <P>
          Para chegar a um acordo sobre um plano de ação entre as diferentes
          instituições governamentais e não governamentais que trabalham no
          estudo e na conservação da biodiversidade da Mata Atlântica argentina,
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
          à licença de instalação do gasoduto Caraguatatuba-Taubaté (GASTAU),
          construído pela Petrobras.
        </P>
        <P>
          A Fase 1 (2010-2013) do programa confirmou a raridade da jacutinga (
          <i>Aburria jacutinga</i>) na Região da Serra do Mar e a necessidade de
          um reforço populacional urgente a fim de evitar a extinção local da
          espécie, considerada Criticamente Ameaçada (CR) de extinção, de acordo
          com a lista de animais ameaçados no Estado de São Paulo, e Em Perigo
          (EN), de acordo com a lista nacional publicada em dezembro de 2014.
        </P>
        <P>
          No Estado do Rio de Janeiro, a espécie está extinta. Foi avistada em
          Itatiaia pela última vez em 1978 e na Serra dos Órgãos em 1980, o que
          levou a extensão do programa de reintrodução de jacutingas também para
          a Reserva Ecológica de Guapiaçu (REGUA), situada a cerca de 150 km ao
          norte da cidade do Rio de Janeiro.
        </P>
        <P>
          A fase II do programa, iniciada em 2014, visou à reintrodução e o
          monitoramento de jacutingas na região da Serra da Mantiqueira, em São
          Francisco Xavier, distrito de São José dos Campos (SP); na região da
          Serra do Mar, em áreas próximas ao Parque Estadual da Serra do Mar –
          Núcleo Caraguatatuba/São Paulo, e no município de Cachoeiras de
          Macacu, na Reserva Ecológica de Guapiaçu (REGUA), no Estado do Rio de
          Janeiro. Desde 2019, as reintroduções concentraram-se em um único
          local – São Francisco Xavier –, medida a conservação indicada pela
          Análise da Viabilidade Populacional, utilizando o Vortex.{" "}
        </P>
        <P>
          As ações do projeto envolvem testes de sanidade das aves, preparação
          comportamental, reintrodução/soltura e monitoramento, educação e
          disseminação da importância da conservação da jacutinga e outras aves
          de Mata Atlântica para a comunidade em paralelo com o envolvimento dos
          órgãos de fiscalização ambiental nas ações de campo. O apoio de
          zoológicos e dos criadouros conservacionistas de jacutingas, por meio
          do fornecimento de aves para serem soltas, é fundamental para o
          sucesso do projeto. Além disso, graças ao trabalho desenvolvido pela
          SAVE Brasil, a jacutinga foi elencada como uma das 25 espécies
          prioritárias para a conservação, a partir de um acordo de cooperação
          técnica entre a Associação de Zoológicos e Aquários do Brasil (AZAB),
          o Ministério do Meio Ambiente e o ICMBio, para a condução do{" "}
          <i>studbook</i> da espécie. Os studbooks são a ferramenta mais
          importante na gestão científica de populações ex situ de animais
          silvestres, assegurando tamanho suficiente, estabilidade demográfica e
          alto nível de diversidade genética. O Parque das Aves é o{" "}
          <i>studbook keeper</i> da jacutinga.{" "}
        </P>
        <P>
          O projeto realizou a primeira soltura em junho de 2016 e, até o
          momento, foram 50 jacutingas soltas na Serra da Mantiqueira, no
          distrito de São Francisco Xavier, seis na Serra do Mar e duas na
          Reserva Ecológica de Guapiaçu, totalizando 58 indivíduos.
        </P>
        <P>
          As aves são monitoradas por transmissores via rádio, idas a campo e/ou
          através da participação da comunidade local, sob o incentivo da
          prática da observação de aves.
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
  const { number, legend, size, objectFit, png } = props;
  const image = !png
    ? require(`public/jacucara/figs/${number}.jpg`)
    : require(`public/jacucara/figs/${number}.png`);
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

function Logo(props) {
  const { number, legend, size, objectFit, website } = props;
  const image = require(`public/jacucara/logos/${number}.png`);
  // const image = {default:{height:1,width:1}}

  const fsize =
    number === "CNCFlora" || number === "AZAB" || number === "AZAB"
      ? 30
      : number === "OAMA"
      ? 90
      : 50;

  return (
    <Link href={website} target="_blank">
      <div className="cursor-pointer">
        {/* <div  className={` relative w-full ${size==="large"?"h-large":"h-96 sm:h-medium"}`}> */}
        <Image
          objectFit={"contain"}
          height={fsize}
          width={fsize * (-image.default.width / -image.default.height)}
          src={image}
        />
        {/* </div> */}
      </div>
    </Link>
  );
}

const logos = [
  {
    name: "AZAB",
    website: "https://www.azab.org.br/",
  },
  { name: "Aves Argentinas", website: "https://www.avesargentinas.org.ar/" },

  { name: "CNCFlora", website: "http://cncflora.jbrj.gov.br/portal" },
  { name: "JBRJ", website: "https://www.gov.br/jbrj/pt-br" },
  { name: "OAMA", website: "https://oama.eco.br" },

  { name: "Parque das Aves", website: "https://www.parquedasaves.com.br/" },
  { name: "save", website: "http://savebrasil.org.br/" },
  { name: "PN Iguaçu", website: "https://cataratasdoiguacu.com.br/" },
  { name: "cemave icmbio", website: "https://www.gov.br/icmbio/pt-br" },
];

const Logos = () => {
  return (
    <div className="w-100 grid grid-cols-2 p-12 md:p-0 md:grid-cols-10 gap-4 items-center">
      {logos.map((logo) => (
        <div className="flex justify-center">
          <Logo website={logo.website} number={logo.name}></Logo>
        </div>
      ))}
    </div>
  );
};

const pags = [
  { name: "doc", website: "https://www.youtube.com/watch?v=FtL8dOPeu6U" },
  {
    name: "wikiaves jacutinga",
    website: "https://www.wikiaves.com.br/wiki/jacutinga",
  },
  {
    name: "folder",
    website:
      "https://oama.eco.br/publicacoes/files/informativo%20de%20distribui%C3%A7%C3%A3o%20-%20Ju%C3%A7ara.pdf",
  },

  {
    name: "colorir jacutinga",
    website:
      "https://wwfbr.awsassets.panda.org/downloads/encarte_iguacu_jacutinga_a4_final_pt.pdf",
  },
  {
    name: "news",
    website:
      "https://midianinja.org/news/a-contribuicao-do-cultivo-do-acai-jucara-para-a-nutricao-e-preservacao-ambiental-no-sul-do-pais/",
  },
  {
    name: "rehab",
    website:
      "https://blog.parquedasaves.com.br/2022/08/como-as-jacutingas-do-parque-das-aves-aprendem-a-viver-na-floresta/",
  },
  {
    name: "cncflora",
    website:
      "http://cncflora.jbrj.gov.br/portal/pt-br/profile/Euterpe%20edulis",
  },

  {
    name: "palmito_legal",
    website: "https://youtu.be/BORRYwKCkdA",
  },

  {
    name: "livro_jucara",
    website: "https://oama.eco.br/publicacoes/files/livro_jucara.pdf",
  },
];

const Pags = () => {
  return (
    <div className="grid grid-cols-1 p-12 md:p-0 md:grid-cols-3 gap-4 items-center">
      {pags.map((logo) => (
        <div className="flex justify-center">
          <Pag website={logo.website} number={logo.name}></Pag>
        </div>
      ))}
    </div>
  );
};

function Pag(props) {
  const { number, legend, size, objectFit, website } = props;
  const image = require(`public/jacucara/pags/${number}.png`);
  // const image = {default:{height:1,width:1}}

  const fsize = 500;
  return (
    <Link href={website} target="_blank">
      <div className="cursor-pointer">
        {/* <div  className={` relative w-full ${size==="large"?"h-large":"h-96 sm:h-medium"}`}> */}
        <Image
          objectFit={"contain"}
          height={fsize}
          width={fsize * (-image.default.width / -image.default.height)}
          src={image}
        />
        {/* </div> */}
      </div>
    </Link>
  );
}
