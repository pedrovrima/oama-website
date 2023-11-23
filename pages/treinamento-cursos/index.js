import Nav from "@includes/nav";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Footer from "@includes/footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";


export default function Treinamento() {
  return (
    <>
      <div className="pb-32">
        <Head>
          <title>Treinamento e Cursos</title>
        </Head>

        <Nav />
        <div className="relative hero-small md:hero min-h-1/2">
          <div className="items-center h-full pt-32 lg:pb-16 md:pb-16 justify-items-center">
            <div className="absolute top-0 w-full h-full">
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
        <div className="w-3/4 mx-auto sm:max-w-6xl">
          <div className="mt-16">
            <div className="mb-24">
              <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
                Cursos e Treinamento{" "}
              </h1>

              <div class="w-full">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t mb-6" />
              </div>
              <p className="text-gray-600 sm:p-12 text-md sm:text-lg">
                A capacitação e o treinamento de profissionais para o emprego de
                técnicas de estudo e pesquisa em Ornitologia são essenciais para
                a qualidade dos trabalhos desenvolvidos e dos dados coletados,
                como também para o bem-estar dos animais estudados. Para nós,
                promover oportunidades de capacitação técnica é uma forma de
                contribuir para o desenvolvimento de ciência de qualidade no
                Brasil. Por isso, elaboramos e oferecemos cursos em nossas áreas
                de especialidade técnica.  Promovemos, através de parcerias,
                cursos também em áreas relacionadas à ornitologia, conservação e
                observação de aves.  Além de cursos, oferecemos oportunidade de
                treinamento de longo-prazo e intensivo em técnicas de
                monitoramento de avifauna através de nosso programa de
                voluntariado de treinamento.  Saiba mais sobre os cursos e sobre
                nosso programa de treinamento aqui. 
              </p>
            </div>
          </div>

          <div className="">
            <div className="relative hidden w-full sm:block sm:h-medium">
              <Image
                objectFit="contain"
                // width={100}
                // height={100}
                src="/treinamento-cursos/1.png"
                layout="fill"
              />
            </div>
           
            <h2 className="w-full mb-5 text-3xl font-bold leading-tight text-center text-gray-800 sm:mb-3">
              Chamadas e inscrições abertas
            </h2>

            <TrainingCarousel></TrainingCarousel>
            <Accordion collapsible>
      <AccordionItem>
        <h3 className="font-bold mb-5 text-gray-600 sm:p-12 text-lg sm:text-lg text-center bg-gray ">
          <AccordionButton>VII BBMA - Bird Banding and Molt Analysis Workshop - Curso internacional de anilhamento de aves e análise de muda 
            <div className="">
              <Image
               
                width={25}
                height={25}
                src="/treinamento-cursos/drop.png"
                
              />
            </div></AccordionButton>
        </h3>

        <AccordionPanel>
        <br></br>

        <p className="text-gray-600 sm:p-12 text-md sm:text-lg">O sétimo de Anilhamento de Aves e Análise de Muda (Bird Banding and Molt Analysis - BBMA VII) acontecerá de 17 a 24 de março de 2024 no Instituto Alto Montana, próximo a Itamonte, MG, na encosta norte da Serra da Mantiqueira, Mata Atlântica brasileira. A iniciativa é promovida pela Universidade Federal do Rio Grande do Sul (UFRGS) e pelo Observatório de Aves da Mantiqueira (OAMa), com apoio do Michigan Technological University (MTU) e da Universidade Federal do Rio Grande (FURG). Motivados pelo crescente número de anilhadores de aves no Brasil e pelo potencial dos sistemas de classificação de idade baseados na análise de muda para melhorar a qualidade dos dados de anilhamento, pretendemos 1) promover o melhor domínio possível das habilidades básicas de anilhamento enquanto analisamos os ciclos de muda e o envelhecimento das aves do sub-bosque florestal na região da Mata Atlântica; e 2) contribuir para a formação de anilhadores profissionais, de mente aberta e testados em campo, que aplicarão suas habilidades aqui ou em qualquer outro lugar do mundo.</p>
        <br></br>
        <p className="text-gray-600 sm:p-12 text-md sm:text-lg">O programa do curso é voltado para anilhadores ativos, mas aceitamos candidatos com qualquer experiência, de qualquer país e/ou nível de especialização. Os instrutores de anilhamento Luiza Figueira (OAMa), Pedro Martins (OAMa) e Jared Wolfe (MTU) são todos certificados pelo North American Banding Council. Márcio Repenning (FURG) tem vinte anos de experiência em anilhamento e mais de trinta publicações sobre ecologia, comportamento e evolução de aves. Os quatro instrutores anilharam em conjunto mais de 50 mil aves. Eles possuem profundo conhecimento da avifauna sul-americana e trabalharão com uma equipe de jovens ornitólogos auxiliados por Gonçalo Ferraz. O curso do BBMA deste ano será bilíngue, com aulas ministradas em português e inglês; no entanto, o conteúdo deve ser acessível a qualquer pessoa que consiga comunicar em inglês, espanhol ou português.</p>
        <br></br>
        <p className="text-gray-600 sm:p-12 text-md sm:text-lg">A remuneração dos instrutores será custeada pelas respectivas instituições, mas será necessário cobrar uma taxa de R$ 1.900, pagável ao Instituto Alto Montana, para hospedagem e alimentação durante todo o curso. Esta taxa também cobre o transporte de e para Resende, a cidade mais próxima com terminal rodoviário de longa distância. A aplicação para se candidatar a uma vaga no curso é gratuita e poderemos oferecer apoio parcial, dependendo do resultado dos pedidos de subsídios em andamento. O curso matriculará 16 alunos.</p>
        <br></br>
        <p className="text-gray-600 sm:p-12 text-md sm:text-lg">PARA SE INSCREVER: Preencha o formulário disponível em <a href="https://ferrazlab.org/workshops" className="fc-blue"> https://ferrazlab.org/workshops </a> para enviar um link para seu currículo e uma breve carta (em português, inglês ou espanhol) descrevendo sua experiência anterior com anilhamento de aves e explicando por que este curso é relevante para você. Aceitaremos inscrições até 15 de dezembro de 2023 e as analisaremos prontamente, para retornarmos até sexta-feira, 23 de dezembro de 2023. Em caso de dúvidas, escreva para Gonçalo Ferraz em goncalo.ferraz@ufrgs.br. Estamos ansiosos para encontrá-lo em campo!</p>

        </AccordionPanel>
      </AccordionItem>
      </Accordion>


            <div className="relative w-full h-medium sm:h-medium">
              <Image
                objectFit="contain"
                // width={100}
                // height={100}
                src="/treinamento-cursos/1.png"
                layout="fill"
              />
            </div>
            {/*<div className=''>
            <div className='relative hidden w-full sm:block sm:h-medium'>
              <Image
                objectFit='contain'
                // width={100}
                // height={100}
                src='/treinamento-cursos/1.png'
                layout='fill'
              />
            </div>
            <div className='relative h-medium w-full sm:hidden'>
              <Image
                objectFit='contain'
                // width={100}
                // height={100}
                src='/treinamento-cursos/1-mobile.png'
                layout='fill'
              />
            </div>
  </div>*/}

    
    
        <h3 className="font-bold text-gray-600 sm:p-12 text-lg sm:text-lg text-center">
          Programa de treinamento em monitoramento de avifauna do OAMa - Treinamento de longa-duração e imersão com residência na EP-OAMa
        </h3>
        <br></br>
        <p className="text-gray-600 sm:p-12 text-md sm:text-lg">Este treinamento tem o objetivo de capacitar ornitólogos na coleta de dados de campo com qualidade técnica e ética profissional. Visamos criar oportunidades de treinamento intensivo, de imersão e de longo-prazo para ornitólogos de campo no Brasil.</p>
        <br></br>
        <p className="text-gray-600 sm:p-12 text-md sm:text-lg">Este programa de treinamento foi estruturado utilizando o programa de treinamento e monitoramento com anilhamento de aves do Klamath Bird Observatory como base. Adaptamos o modelo para a nossa realidade local, e seguimos as diretrizes do ICMBio/CEMAVE e a legislação ambiental brasileira. O currículo do programa inclui aulas teóricas e muita atividade prática focadas nas técnicas de captura-marcação-recaptura com redes de neblina e anilhamento de aves de sub-bosque e de censos com pontos fixos. O treinamento acontece presencialmente e requer dedicação exclusiva e residência na Estação de Pesquisa do OAMa (EP-OAMa), localizada na Reserva Particular do Patrimônio Natural (RPPN) Fazenda Boa Vista, em Bocaina de Minas/MG, Serra da Mantiqueira.</p>
        <br></br>
        
        <h3 className="font-bold text-gray-600 sm:p-12 text-md sm:text-lg text-left">Equipe</h3>
        <br></br>
        <p className="text-gray-600 sm:p-12 text-md sm:text-lg">O programa é coordenado e supervisionado por Luiza Figueira (co-fundadora e diretora executiva do OAMa, anilhadora e treinadora certificada pelo NABC desde 2015, anilhadora sênior do CEMAVE e responsável técnica pelas licenças SISBIO e SNA-CEMAVE). </p>
        <br></br>
        <p className="text-gray-600 sm:p-12 text-md sm:text-lg">André Ayres (graduando em biologia, formado pelo próprio programa de treinamento do OAMa como anilhador e instrutor de monitoramento de avifauna) é o instrutor primário em 2024. André é a pessoa responsável diretamente pela dinâmica e acompanhamento diário dos trainees durante todo o treinamento.</p>
        <br></br>
        <p className="text-gray-600 sm:p-12 text-md sm:text-lg">O treinamento conta ainda com o apoio e participação oportuna de Danielle Santos, Otávio Rocha, Affonso Souza e Pedro Martins para a sua construção e realização. Danielle foi trainee OAMa e depois instrutora primária deste programa na edição anterior. Hoje Danielle é da equipe OAMa como colaboradora externa, anilhadora sênior pelo CEMAVE e mestranda pela UFRGS. Otávio é assistente de comunicação e divulgação científica do OAMa, mas se interessa e atua na área prática de monitoramento e treinamento também. Foi trainee OAMa e posteriormente participou do treinamento em monitoramento de avifauna pelo KBO (Oregon, EUA) também, sendo certificado como anilhador e treinador pelo NABC.  Affonso é coordenador de projetos OAMa, anilhador sênior do CEMAVE com experiência em monitoramento e pesquisa em campo. Pedro é co-fundador e coordenador de dados do OAMa, anilhador e treinador certificado pelo NABC.</p>
        <br></br>
        <p className="text-gray-600 sm:p-12 text-md sm:text-lg">Para 2024 oferecemos até 8 vagas de trainees, sendo quatro vagas para 3 meses e quatro vagas para 1 mês de duração.  O treinamento tem um custo de R$1200,00 mensais para participação. Este custo vai cobrir a hospedagem na estação de pesquisa, deslocamento para as atividades internas do programa, materiais usados durante o treinamento, e o acompanhamento de um instrutor em dedicação exclusiva para acompanhar e auxiliar os trainees durante toda a formação dos trainees. 
        Caso você queira participar deste ŕograma de treinamento mas não tenha como arcar com os custos, você pode se inscrever e pleitear uma bolsa ou desconto. Buscamos oferecer o máximo de gratuidades e descontos possíveis a cada ano. Essa possibilidade varia de acordo com os apoios que conseguimos para o programa ao longo do tempo. Acesse o edital de chamada completo para detalhes.</p>

        <div className="relative w-full sm:block sm:h-medium">
              <Image
                objectFit="contain"
                // width={100}
                // height={100}
                src="/treinamento-cursos/requisitos.png"
                layout="fill"
              />
        </div>
            
        <p className="text-gray-600 sm:p-12 text-md sm:text-lg"> Em caso de dúvidas, escreva-nos um e-mail para contato@oama.eco.br com o título “PROGRAMA DE TREINAMENTO - DÚVIDA”.</p>
        <br></br>
        <p className=" font-bold text-gray-500 sm:p-12 text-md sm:text-lg"> <a href="https://www.google.com/url?q=https://docs.google.com/document/d/1Gi3q8sruvoUSZYs-6MOB4Mu4hD4cjRWp/edit&sa=D&source=docs&ust=1700585060955312&usg=AOvVaw02nds_Cn1Qe7ByZXl6PJWf">Edital completo de chamada para Programa de Treinamento OAMa 2024</a></p>
        <br></br>
        <p className=" font-bold text-gray-500 sm:p-12 text-md sm:text-lg"><a href="https://docs.google.com/forms/d/1dogTsOBhTVd-_CAXsThwvbcunKl6CzdOshIvFZFVgW8/edit">Formulário e inscrição para Programa de treinamento OAMa 2024 </a> </p>

    <Accordion collapsible>
      <AccordionItem>
        <h3 className="mt-16 mb-8 text-2xl font-bold text-center">
          <AccordionButton>Trainees que já passaram pelo treinamento Oama
            <div >
              <Image               
                width={25}
                height={25}
                src="/treinamento-cursos/drop.png" />
            </div>
          </AccordionButton>
        </h3>

        <AccordionPanel>
        <br></br>
        <div className="w-full my-auto">
               <HallOfFame/> 
        </div>

        </AccordionPanel>
      </AccordionItem>
    </Accordion>
            
            {/* <div className="flex flex-col sm:flex-row"> */}
            
            {/*<h2 className="w-full mt-12 mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
              Cursos
            </h2>
            {/* <div className="flex flex-col mb-8 sm:flex-row ">
              <div class="w-full sm:w-1/3 p-2 sm:py-0 sm:px-6  my-auto">
                <div>
                  <Image
                    alt="Serra da Mantiqueira"
                    layout="responsive"
                    src="/treinamento-cursos/curso_muda.png"
                    width={400}
                    objectFit="cover"
                    height={400}
                  />
                </div>
              </div>
              <div className="w-full my-auto sm:w-2/3">
                <p className="text-lg font-bold text-gray-600">
                  Curso Online Análise de Mudas e Classificação de idade em Aves
                </p>
                <p className="font-bold text-gray-500 text-md">
                  Adiado para 5 e 6 de março 2022
                </p>
                <p className="font-bold text-gray-500 text-md">Online</p>
                <p className="text-gray-600 ">
                  O curso teórico de Análise de Muda e Classificação de Idade em
                  Aves (CAMCI) acontecerá de forma remota, totalmente online.
                  Nosso objetivo é introduzir o conhecimento básico sobre as
                  estratégias e padrões de muda de penas nas aves e como usar o
                  método WRP para classificação de idade (ou “molt based ageing
                  system”). Visamos também promover a padronização no uso de
                  terminologias e nomenclaturas para mudas e plumagens em aves,
                  e expandir a prática de classificação de idade de aves com
                  base na análise de mudas e plumagem entre os ornitólogos do
                  Brasil. O tema e o nível do curso pode interessar desde
                  estudantes de graduação até pesquisadores e professores que
                  tenham interesse no estudo de muda das aves e suas aplicações
                  para classificação de idade. Quem não é acadêmico mas é muito
                  curioso e gosta de observar aves e suas plumagens também está
                  convidado a participar. O curso será ministrado por Luiza
                  Figueira e Pedro Martins.{" "}

                  <a
                    href="https://www.sympla.com.br/curso-de-analise-de-mudas-e-classificacao-de-idade-em-aves__1452863"
                    target="_blank"
                    className="text-yellow-600 underline cursor-pointer"
                  >
                    Para inscrição e mais informações, acesse a plataforma do
                    curso
                  </a>
                  .
                </p>
              </div>
            </div>  */}
            {/* <div className="flex flex-col mb-8 sm:flex-row ">
              <div class="w-full sm:w-1/3 p-2 sm:py-0 sm:px-6  my-auto">
                <div>
                  <Image
                    alt="Serra da Mantiqueira"
                    layout="responsive"
                    src="/treinamento-cursos/muda_teorico.jpg"
                    width={400}
                    objectFit="cover"
                    height={400}
                  />
                </div>
              </div>
              <div className="w-full my-auto sm:w-2/3">
                <p className="text-lg font-bold text-gray-600">
                  II Curso Teórico de Análise de Mudas e Classificação de idade
                  em Aves
                </p>
                <p className="font-bold text-gray-500 text-md">
                  25 e 26 de junho de 2022
                </p>
                <p className="font-bold text-gray-500 text-md">Online</p>
                <p className="text-gray-600 ">
                  <span className="font-bold">
                    Inscrições e mais informações
                    <span className="text-yellow-600 underline cursor-pointer">
                      <a href="https://www.sympla.com.br/ii-curso-de-analise-de-muda-e-classificacao-de-idade-em-aves__1587958">
                        {" "}
                        aqui.{" "}
                      </a>
                    </span>{" "}
                    <br />
                  </span>
                  Nosso objetivo com o CAMCI é introduzir o conhecimento básico
                  (e super importante!) sobre as estratégias e padrões de muda
                  de penas nas aves e como usar o método WRP para classificação
                  de idade (ou “molt based ageing system”). Visamos também
                  promover a padronização no uso de terminologias e
                  nomenclaturas para mudas e plumagens em aves, e expandir a
                  prática de classificação de idade de aves com base na análise
                  de mudas e plumagem entre os ornitólogos do Brasil.
                  <br /> Luiza Figueira e Pedro Martins, Co-Fundadores do
                  Observatório de Aves da Mantiqueira, tem treinamento pelo Bird
                  Banding and Molt Analysis Workshop e há quase 10 anos vêm
                  aplicando a prática de análise de muda e classificação de
                  idade em diversos projetos e, atualmente, na Serra da
                  Mantiqueira. Se você é da Ornitologia e se interessa pelo
                  ciclo de vida, história natural, demografia, fisiologia ou
                  evolução das aves, esse curso é para você. O tema e o nível do
                  curso pode interessar desde estudantes de graduação até
                  pesquisadores e professores que tenham interesse no estudo de
                  muda das aves e suas aplicações para classificação de idade.
                  Quem não é acadêmico, mas é muito curioso e gosta de observar
                  aves e suas plumagens também está convidado a participar!
                </p>
              </div>
            </div>

            <div className="flex flex-col mb-8 sm:flex-row">
              <div class="w-full sm:w-1/3 p-2 sm:py-0 sm:px-6  my-auto">
                <div>
                  <Image
                    alt="Serra da Mantiqueira"
                    layout="responsive"
                    src="/treinamento-cursos/anilhamento_teorico.jpg"
                    width={400}
                    objectFit="cover"
                    height={400}
                  />
                </div>
              </div>
              <div className="w-full my-auto sm:w-2/3">
                <p className="text-lg font-bold text-gray-600">
                  II Curso Teórico Básico de Anilhamento - OAMa + Aves de Noronha
                </p>
                <p className="font-bold text-gray-500 text-md">
                  09 e 10 de julho de 2022
                </p>
                <p className="font-bold text-gray-500 text-md">Online</p>
                <p className="text-gray-600 ">
                  <span className="font-bold">
                    Inscrições e mais informações
                    <span className="text-yellow-600 underline cursor-pointer">
                      <a href="https://www.sympla.com.br/ii-curso-de-anilhamento-teorico__1588058">
                        {" "}
                        aqui.{" "}
                      </a>
                    </span>{" "}
                    <br />
                  </span>
                  Quer aprender sobre anilhamento ou se atualizar no assunto?
                  Neste curso exclusivamente teórico, abordaremos desde uma
                  introdução até uma revisão aprofundada sobre as aves com
                  pulseiras. Fundamental no monitoramento da avifauna e em
                  pesquisas com identificação do indivíduo, o anilhamento é um
                  método de estudo de grande importância para a conservação das
                  espécies. Por ser um método com manipulação das aves, sempre
                  existe um risco, e por isso a capacitação técnica e
                  aperfeiçoamento constante são indispensáveis para a segurança
                  das aves e qualidade dos dados!
                  <br />
                  Neste curso, Luiza Figueira e Cecília Licarião vão dialogar
                  sobre aplicações do anilhamento na pesquisa e conservação,
                  segurança e cuidados com as aves, técnicas de captura das
                  aves, qualidade e interpretação dos dados coletados e
                  oportunidades de treinamento. Essas duas já voaram longas
                  distâncias e tem muito o que compartilhar. Vem com a gente?
                </p>
              </div>
            </div> */}

            {/*<div className="flex flex-col mb-8 sm:flex-row">
              <div class="w-full sm:w-1/3 p-2 sm:py-0 sm:px-6  my-auto">
                <div>
                  <Image
                    alt="Serra da Mantiqueira"
                    layout="responsive"
                    src="/treinamento-cursos/anilhamento_ii.png"
                    width={400}
                    objectFit="cover"
                    height={400}
                  />
                </div>
          </div> */}
              {/*<div className="w-full my-auto sm:w-2/3">
                <p className="text-lg font-bold text-gray-600">
                  II Curso Prático Básico de Anilhamento
                </p>
                <p className="font-bold text-gray-500 text-md">
                  Data a definir{" "}
                </p>
                <p className="font-bold text-gray-500 text-md">
                  Estação de Pesquisa OAMa
                </p>
                <p className="text-gray-600 ">

                  {/* <span className="font-bold">
                    Inscrições e mais informações
                    <span className="text-yellow-600 underline cursor-pointer">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqP_kWyAk16zeBcMPHRbvSMw76nP82fxOHEs5G4IRNf0z95w/viewform">
                        {" "}
                        aqui.{" "}
                      </a>
                    </span>{" "}
                    <br />
                  </span> 
                  O curso tem como objetivo apresentar, na prática e experiência
                  em campo, técnicas seguras e apropriadas para 1. a manipulação
                  adequada das aves durante a extração das redes de neblina e
                  coleta de dados; 2. o manejo de uma estação de anilhamento
                  visando a prevenção de injúrias e estresse das aves; 3. a
                  aplicação e ajustes de anilhas; 4. a familiarização com os
                  tipos de dados coletados e como coletá-los, dentre outros
                  temas pertinentes. Focamos nos passeriformes e nas redes de
                  neblina como método de captura. Sendo esse um curso
                  condensado, não será apresentada a parte teórica completa,
                  <span className="font-bold">
                    {" "}
                    portanto é pré-requisito indispensável ter realizado o
                    Módulo Teórico!
                  </span>{" "}
                  Ressaltamos que, pela curta duração, este curso, por si só,
                  não habilita ninguém a se tornar um anilhador, nem garante um
                  registro de anilhador sênior com o CEMAVE.
                  <br />
                  <span className="font-bold">
                    Não é necessária experiência prática prévia.
                  </span>{" "}
                  Todos os alunos receberão instruções, acompanhamento
                  individual, comentários construtivos e terão oportunidades de
                  extrair aves da rede, de anilhar e de coletar dados. No
                  entanto, a quantidade de prática que cada aluno será capaz de
                  fazer depende da taxa de captura das aves durante os dias de
                  campo. A prática de cada aluno também é dependente da
                  segurança das aves. Nenhuma ave será colocada em risco para
                  priorizar a experiência prática dos alunos. Dessa forma, caso
                  haja a necessidade, os instrutores do curso poderão intervir a
                  qualquer momento para garantir o bem estar dos animais.
                  Seguimos o código de ética e recomendações de práticas pelo
                  NABC e CEMAVE.
                  <br />O curso será ministrado por Luiza Figueira, Pedro
                  Martins e Affonso Souza.
                </p>
              </div>
            </div>

            <div className="flex flex-col mb-8 sm:flex-row">
              <div class="w-full sm:w-1/3 p-2 sm:py-0 sm:px-6  my-auto">
                <div>
                  <Image
                    alt="Serra da Mantiqueira"
                    layout="responsive"
                    src="/treinamento-cursos/muda_iii.png"
                    width={400}
                    objectFit="cover"
                    height={400}
                  />
                </div>
              </div>
              <div className="w-full my-auto sm:w-2/3">
                <p className="text-lg font-bold text-gray-600">
                  III Curso Prático de Análise de Mudas e Classificação de idade
                  em Aves
                </p>
                <p className="font-bold text-gray-500 text-md">
                  {/* 19 a 22 de fevereiro de 2023  Data a definir.
                </p>
                <p className="font-bold text-gray-500 text-md">
                  Estação de Pesquisa OAMa
                </p>
                <p className="text-gray-600 ">
                  {/* <span className="font-bold">
                    Inscrições e mais informações
                    <span className="text-yellow-600 underline cursor-pointer">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqP_kWyAk16zeBcMPHRbvSMw76nP82fxOHEs5G4IRNf0z95w/viewform">
                        {" "}
                        aqui.{" "}
                      </a>
                    </span>{" "}
                    <br />
                  </span> 
                  Neste curso, vamos ter a oportunidade de colocar em prática o
                  conteúdo que foi apresentado durante{" "}
                  <span className="font-bold">
                    Módulo Teórico, que é pré-requisito indispensável para a
                    participação!
                  </span>{" "}
                  Pela curta duração, focaremos o máximo na prática, de forma
                  que cada aluno deverá chegar já com o conhecimento teórico
                  básico sobre o tema. Trabalharemos em campo a análise de muda
                  e características de penas, reconhecimento de grupos de penas,
                  identificação e registro de penas em muda, análise de
                  plumagens, reconhecimento e descrição de limite de muda,
                  coleta de dados complementares para determinação de idade e
                  aplicação de códigos WRP.
                  <br />
                  Não trabalharemos técnicas de extração de aves das redes,
                  contenção e manipulação de aves, aplicação de anilhas e outras
                  práticas básicas do anilhamento de aves. As extrações das aves
                  das redes e aplicações de anilhas serão feitas exclusivamente
                  pela equipe interna do curso (instrutores e assistentes).
                  Assim, otimizamos o tempo dedicado à análise de muda, plumagem
                  e dados complementares, e damos maior foco à classificação de
                  idade das aves. Nenhuma ave será colocada em risco para
                  priorizar a experiência prática dos alunos. Dessa forma, caso
                  haja a necessidade, os instrutores do curso poderão intervir a
                  qualquer momento para garantir o bem estar da ave. Seguimos o
                  código de ética e recomendações de práticas pelo NABC e
                  CEMAVE.
                  <br />O curso será ministrado por Luiza Figueira, Pedro
                  Martins e Affonso Souza.
                </p>
              </div>
            </div>

            {/* <h2 className="w-full mt-12 mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
              Em Breve
            </h2>
            <ul className="p-12 text-lg">
              <li className="list-disc">
                Curso prático de anilhamento - foco em Passeriformes
              </li>
              <li className="list-disc">
                Curso prático de análise de muda e classificação de idade em
                aves
              </li>
            </ul> */}
            <h2 className="w-full mt-12 mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
              Cursos Concluídos
            </h2>
            <ul className="p-12 text-lg">
              <li className="list-disc">
                I Curso de bioacústica de aves -2023 - presencial
              </li>
              <li className="list-disc">
                I Curso de bordado - conectando arte e conservação - 2023 - Presencial
              </li>
              <li className="list-disc">
                I Curso de identificação de cogumelos - 2023 - Presencial
              </li>
              <li className="list-disc">
                III Curso Teórico Básico de Anilhamento com Aves de Noronha - 2023 - Online
              </li>
              
              <li className="list-disc">
                III Curso Teórico de Análise de Mudas e Classificação de idade em Aves - 2023 - Online
              </li>
              <li className="list-disc">
                II Curso Prático de Análise de Mudas e Classificação de idade em
                Aves - 2022 - Presencial
              </li>
              <li className="list-disc">
                I Curso Prático Básico de Anilhamento - 2022 - Presencial
              </li>
              <li className="list-disc">
                II Curso Teórico Básico de Anilhamento com Aves de Noronha -
                2022 - Online
              </li>
              <li className="list-disc">
                II Curso Teórico de Análise de Mudas e Classificação de idade em
                Aves - 2022 - Online
              </li>
              <li className="list-disc">
                Curso de Fotografia de Aves com Birds Atlantic - 2022 -
                Presencial
              </li>
              <li className="list-disc">
                I Curso Teórico Básico de Anilhamento com Aves de Noronha - 2021
                - Online{" "}
              </li>
              <li className="list-disc">
                I Curso Análise de Muda e Classificação de Idade em Aves - 2019
                - Presencial
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const TrainingCarousel = () => (
  <div className="flex items-center justify-cente cursor-pointer group h-full sm:px-8">
    <Carousel
      showArrows={true}
      showStatus={false}
      autoPlay
      swipeable
      emulateTouch
      infiniteLoop
      // showThumbs={false}
      stopOnHover
      transitionTime={600}
      className="w-full mt-2 mb-8 sm:mb-4 h-full"
    >
      {Array.from({ length: 2 }, (_, i) => i + 1).map((num) => {
        return (
          <div  className="relative w-full h-full sm:h-96">
            <Image
              className="bg-black"
              layout="fill"
              
              objectFit="contain"
              src={`/treinamento-cursos/carousel/${num}.jpg`}
            ></Image>
          </div>
        );
      })}
    </Carousel>
  </div>
);

const HallOfFame = () => {
  return (
    <>
      {trainees.map((trainee, i) => {
        return (
          <div
            class={`mb-8  justify-around items-center   relative`}
            
          >
            <div class="w-3/5 shadow-lg rounded-full  sm:w-1/6 m-2 ">
              
            </div>

            <div class="w-full sm:w-4/6 p-2">
              <h3 class="text-2xl text-justify-center text-gray-800 font-bold leading-none mb-2">
                {trainee.name}
              </h3>
              <h4 class="text-xl text-justify-center text-gray-600 font-bold leading-none mb-3">
                {trainee.basic_info}
                <br />
                {trainee.time}
                <br />
                {trainee.birds}
              </h4>

              <p class="text-gray-600 ">{trainee.quote}</p>
              
            </div>
          </div>
        );
      })}
    </>
  );
};

const trainees = [
  {
    name: "Otávio Rocha",
    basic_info: "Biólogo, 25 anos, Fortaleza (CE)",
    time: "Estadia de fevereiro a maio",
    birds: "90 aves processadas",
    quote:
      "“É inevitável não se apaixonar pela Mantiqueira, pelas aves e pelo trabalho de campo. Essa imersão transformou minha visão sobre esses animais e as possibilidades de pesquisa que podemos desenvolver.”",
    reel: "https://www.instagram.com/reel/CeMkv6QFYJM/?utm_source=ig_web_copy_link",
    img: "trainee otávio",
  },
  {
    name: "André Menini",
    basic_info: "Biólogo, 25 anos, Caieiras (SP)",
    time: "Estadia de fevereiro a maio",
    birds: "104 aves processadas",
    quote:
      "“O programa fez total diferença na minha formação, afinal de contas, não são muitas as oportunidades para aprender sobre a técnica de anilhamento da forma correta no Brasil e tenho a certeza que tive os melhores professores. Ser trainee no OAMa abriu minha cabeça para diversas possibilidades na ornitologia.”",
    reel: "https://www.instagram.com/reel/CeMkv6QFYJM/?utm_source=ig_web_copy_link",
    img: "trainee andré",
  },
  {
    name: "Danielle Santos",
    basic_info: "Bióloga, 23 anos, Palmas (TO)",
    time: "Estadia de março a julho",
    birds: "165 aves processadas",
    quote:
      "“O treinamento sem dúvidas foi uma oportunidade de iniciar na ornitologia com um preparo de altíssima qualidade. Cheguei no OAMa sem saber segurar uma ave com as mãos, e hoje, com as ótimas instruções que tive, sou capaz de capturar as aves e coletar os dados com segurança, agilidade e eficiência.”",
    reel: "https://www.instagram.com/reel/CgnKTKTlKnP/?utm_source=ig_web_copy_link",
    img: "trainee danielle",
  },
  {
    name: "João Victor Ferrari",
    basic_info: "Biólogo, 24 anos, São Borja (RS)",
    time: "Estadia de maio a julho",
    birds: "127 aves processadas",
    quote:
      "“Essa experiência agregou significativamente na minha formação, possibilitando adquirir novas habilidades e amadurecer as minhas decisões. Foi uma satisfação participar do programa de treinamento em monitoramento de avifauna do OAMa.”",
    reel: "https://www.instagram.com/reel/CkMTadOP-y0/?utm_source=ig_web_copy_link",
    img: "trainee joão",
  },
  {
    name: "Gabriela Inhesta",
    basic_info: "Bióloga, 24 anos, Curitiba (PR)",
    time: "Estadia de julho a setembro",
    birds: "41 aves processadas",
    quote:
      "“Estar imersa na natureza e no trabalho de campo com as aves é a realização de um grande sonho e essa foi com certeza a experiência mais bonita e enriquecedora que eu já vivi até então. Eu finalizo muito realizada e me sentindo de fato capacitada para exercer um trabalho de qualidade. “",
    reel: "https://www.instagram.com/reel/CkMVkpSvzbi/?utm_source=ig_web_copy_link",
    img: "trainee gabriela",
  },
  {
    name: "Luiz Felipe Gonzaga",
    basic_info: "Biólogo, 22 anos, Foz do Iguaçu (PR)",
    time: "Estadia de agosto a novembro",
    birds: "136 aves processadas",
    quote:
      "“Aprendi muito sobre a fauna local e novas metodologias, pretendo usar todo o conhecimento adquirido para novos projetos e consultoria. A estação de pesquisa é maravilhosa e me sinto muito feliz fazendo parte desta excelente equipe.”",
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },
  {
    name: "Victor Armando Sanchez Gonzales",
    basic_info: "Estudante de Ciências Ambientais, 27 anos, Barra Califórnia Sur (MX)",
    time: "Estadia de março a setembro",
    birds: "171 aves processadas",
    
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },

  {
    name: "André Basílio Ayres Tavares",
    basic_info: "Estudante de Ciências Biológicas, 29 anos, Niterói (RJ)",
    time: "Estadia de março a setembro",
    birds: "170 aves processadas",
    quote:
      "“Uma experiência enriquecedora e inspiradora, onde senti de fato estar contribuindo para a conservação das aves.”",
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },

  {
    name: "Natália Inácio de Almeida e Silva",
    basic_info: "Bióloga, 24 anos, Campinas (SP)",
    time: "Estadia de março a junho",
    birds: "108 aves processadas",
    quote:
      "“Participar do programa de treinamento do OAMa foi uma experiência transformadora, repleta de momentos memoráveis! O programa me ensinou como dar meus primeiros passos na ornitologia, sempre com responsabilidade, respeito e segurança com as aves, além do comprometimento com sua conservação.”",
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },

  {
    name: "Thalia Matos Aguiar Viana",
    basic_info: "Bióloga, 23 anos, São Luís (MA)",
    time: "Estadia de março a junho",
    birds: "87 aves processadas",
    quote:
      "“O treinamento para mim foi uma experiência essencial na minha carreira e realização no ramo da ornitologia. A partir desse programa de imersão eu tive a oportunidade de ter contato mais direto com as aves e estudá-las, além de que conheci pessoas incríveis com o mesmo amor por esses animais que me ensinaram muito e contribuíram imensamente para o meu crescimento.”",
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },

  {
    name: "Mariane Rodrigues Guedes",
    basic_info: "Bióloga, 27 anos, Itabuna (BA)",
    time: "Estadia de março a abril",
    birds: "27 aves processadas",
    quote:
      "“Entender a ética/técnicas do anilhamento foi umas das melhores experiências da minha vida. Hoje vivo uma nova etapa da minha vida em que sinto que cada gotinha de conhecimento que adquiri com o OAMa foram e são essenciais para a contrução e evolução da minha vida profissional e pessoal.”",
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },

  {
    name: "Patrícia dos Santos Ferreira",
    basic_info: "Bióloga, 28 anos, Campos do Jordão (SP)",
    time: "Estadia de junho a setembro",
    birds: "134 aves processadas",
    quote:
      "“Ter participado do programa de treinamento e monitoramento foi uma experiência muito enriquecedora na minha carreira como ornitóloga. Eu saio do OAMa com novas possibilidades, capacitada para lidar com a segurança das aves, adversidades no campo e com a mente repleta de conhecimento e  informações de qualidade. E o mais importante, segura e confiante sobre o meu trabalho.”",
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },

  {
    name: "Leonardo Wolff de Oliveira",
    basic_info: "Estudante de Biologia, 25 anos, Lages (SC)",
    time: "Estadia de junho a setembro",
    birds: "115 aves processadas",
    quote:
      "“Sou muito grato ao OAMa por essa experiência maravilhosa! Muitos aprendizados e vivências que me guiarão para o estudo da conservação da avifauna!”",
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },

  {
    name: "Caroline Brenda Berté",
    basic_info: "Bióloga, 31 anos, Foz do Iguaçu (PR)",
    time: "Estadia de junho a julho",
    birds: "18 aves processadas",
    quote:
      "“Foi uma experiência enriquecedora para mim, tanto profissional como pessoal. O meu primeiro contato com anilhamento e foi inesquecível.”",
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },

  {
    name: "Francisco Javier Contreras Molina",
    basic_info: "Professor e pesquisador, 43 anos, Falcón (VE)",
    time: "Estadia de junho a julho",
    birds: "18 aves processadas",
    quote:
      "“Conocer un grupo variado de expertos de diferentes disciplinas, regiones fue sin duda un gran aprendizaje, saber que todos se dedican a diferentes trabajos pero que coincidiamos en un tema es algo que quieres que se repita siempre. La estacion o casa de residencia muy acojedora, agradable con buenos servicios que facilitan la estadia alli y que hacen que uno se sienta en casa, aunque esta a dias de distancia. Muy agradecido siempre, esto ha sido una escuela maravillosa para mi, y me ha ayudara siempre a tomarlos como ejemplo y seran referencia para mis proyectos el resto de mi vida.”",
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },

  {
    name: "Tarso Natividade Ciolete",
    basic_info: "Biólogo, 31 anos, Contagem (MG)",
    time: "Estadia de agosto a setembro",
    birds: "44 aves processadas",
    quote:
      "“Minha experiência, embora curta, foi extremamente produtiva. Tive a oportunidade de aprender na prática técnicas e conceitos que fizeram de mim um biólogo melhor.”",
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },

  {
    name: "Daniela Ventura Del Puerto",
    basic_info: "Bióloga, 26 anos, Havana (CUB)",
    time: "Estadia de agosto a setembro",
    birds: "46 aves processadas",
    quote:
      "“Es un orgullo para mi decir que fui trainee OAMa. Mi primera experiencia anillando nuevas familias de aves neotropicales y conociendo el funcionamiento de un observatorio de aves en todos sus detalles. Estoy agradecida al equipo por las enseñanzas que me llevo a Cuba para multiplicar, incluidas un poco de portuñol!”",
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },

  {
    name: "Andreza de Freitas Nunes Oliveira",
    basic_info: "Bióloga, 26 anos, Fortaleza (CE)",
    time: "Estadia periódica de Março a Dezembro",
    birds: "72 aves processadas",
    quote:
      "“O treinamento foi um divisor de águas na minha formação. Saio de lá me sentindo muito mais segura e madura em relação ao trabalho em campo e aos dados coletados. A formação vai muito além do ensino de técnicas, que por si só já valeria muito, visto que são conhecimentos pouco difundidos no Brasil, mas é a preparação de um profissional de excelência por completo.”",
    reel: "https://www.instagram.com/reel/CmFQmvQPkjf/?utm_source=ig_web_copy_link",
    img: "trainee luiz",
  },
];
