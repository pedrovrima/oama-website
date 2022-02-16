import Nav from "@includes/nav";
import { useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Footer from "@includes/footer";

export default function CursoFoto() {
  return (
    <>
      <div className="pb-32">
        <Head>
          <title>Curso Fotografia - Birds Atlantic</title>
        </Head>

        <Nav />
        <div className=" relative hero-small md:hero min-h-1/2">
          <div className="pt-32 lg:pb-16 md:pb-16 h-full  justify-items-center items-center">
            <div className="absolute top-0 h-full w-full">
              <Image
                // className="h-32"
                src="/curso-fotos/hero.jpg"
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
              Curso Fotografia - Birds Atlantic{" "}
            </h1>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
          </div>
        </div>

        <div className="w-3/4 sm:max-w-4xl mx-auto">
        <h2 className="text-gray-700 pb-2 mt-8 font-bold text-2xl">
            {" "}
Sobre o curso          </h2>

          <p className="text-gray-700 pb-2">
            Esta atividade é voltada para fotógrafos e observadores de aves que
            buscam aprimorar ou iniciar seus registros fotográficos de natureza,
            com foco nas aves.
          </p>
          <div className=" py-2">
            <Image
              // className="h-32"
              src="/curso-fotos/pag/Pipraeidea melanonota.jpg"
              layout="responsive"
              width={"1600"}
              height={"800"}
              objectFit="cover"
              objectPosition="center"
              priority={true}
            ></Image>
          </div>
          <p className="text-gray-700 pb-2">
            O objetivo é que o participante domine os conceitos da fotografia
            com qualquer marca de equipamento, através de conhecimentos teóricos
            e práticos. Na parte prática o instrutor orientará de forma
            individual, respeitando a peculiaridade de cada
            equipamento/participante. Também iremos à campo e comedouro para
            treinar o que foi ensinado. No decorrer do workshop os alunos
            poderão tirar suas dúvidas particulares e aprender mais sobre sua
            câmera individualmente. Na parte teórica serão trabalhados os
            pilares da fotografia, e técnicas que facilitam na agilidade da
            configuração do equipamento. Além de composição e comportamento do
            fotógrafo.
          </p>
          <h2 className="text-gray-700 pb-2 mt-8 font-bold text-2xl">
            {" "}
            Instrutores
          </h2>
          <p className="text-gray-700 pb-2">
            O workshop será ministrado por Jorge Lucas Moreira e Karoline
            Zamluti, sócios da Birds Atlantic.
          </p>
          <p className="text-gray-700 pb-2">
            Jorge e Karoline são estudantes de turismo, e fotógrafos
            formados pela Cruz Vermelha Brasileira de Resende, RJ. São
            especialistas em fotografia de aves em movimento. Através da Birds
            Atlantic atuam no aviturismo desde 2018 na Mata Atlântica da região
            Sul Fluminense, com guiamentos para observação e fotografia de aves,
            oficinas/workshops e cursos de fotografia com ênfase aves, edição de
            imagens e fotografia do movimento/vôo das aves. Membros atuantes do
            COA Sul-Fluminense, organizam doações de exposição fotográfica de
            aves nas escolas da região, confeccionam folders de aves e
            borboletas da região, e organizam saídas para observação de aves com
            as crianças, a fim de promover a educação ambiental na sociedade.
          </p>
          <div className=" py-2">
            <Image
              // className="h-32"
              src="/curso-fotos/pag/Pyroderus scutatus.jpg"
              layout="responsive"
              width={"1600"}
              height={"800"}
              objectFit="cover"
              objectPosition="center"
              priority={true}
            ></Image>
          </div>

          <p className="text-gray-700 pb-2">
            Para conhecer melhor o trabalho da Birds Atlantic, siga-os no{" "}
            <a
              className="text-yellow-600 underline"
              href="https://www.facebook.com/birdsatlantic"
              target="_blank"
            >
              Facebook
            </a>{" "}
            e no{" "}
            <a
              className="text-yellow-600 underline"
              href="https://www.instagram.com/birdsatlantic"
              target="_blank"
            >
              Instagram
            </a>
            .
          </p>

          <h2 className="text-gray-700 pb-2 mt-8 font-bold text-2xl"> Local</h2>
          <p className="text-gray-700 pb-2 ">
            {" "}
            O curso ocorrerá na Estação de Pesquisa Refúgio da Boa Vista,
            localizada próximo ao vilarejo do Mirantão, Bocaina de Minas-MG
            (próximo a Visconde de Mauá - RJ).
          </p>
          <div className=" py-2">
            <Image
              // className="h-32"
              src="/fotos_ep/aerea.jpeg"
              layout="responsive"
              width={"1600"}
              height={"900"}
              objectFit="cover"
              objectPosition="top"
              priority={true}
            ></Image>
          </div>

          <p className="text-gray-700 pb-2 ">
            Para mais detalhes sobre o local de hospedagem, visite nossa{" "}
            <a className="text-yellow-600 underline  ">
              <Link target="_blank" href="/estacao-de-pesquisa">página</Link>
            </a>{" "}
            ou entre em contato pelo e-mail contato@oama.eco.br ou pelo{" "}
            <a className="text-yellow-600 underline ">
              <Link target="_blank" href="/whatsapp">WhatsApp</Link>
            </a>{" "}
            (+55 2499962-7394).
          </p>

          <h2 className="text-gray-700 pb-2 mt-8 font-bold text-2xl">
            {" "}
            Inscrições
          </h2>
          <p className="text-gray-700 pb-2">
            Para se inscrever no curso basta preencher <a className="text-yellow-600 underline" href="https://docs.google.com/forms/d/e/1FAIpQLSd8icWSirShGw8ZlN5RQE6bgA-cR0U_nTqlUpqmtI2raBNu8Q/viewform" target="_blank">este formulário</a> e enviar
            o comprovante de pagamento do valor total em anexo.{" "}
          </p>
          <p className="text-gray-700 pb-2"></p>
          <p className="text-gray-700 pb-2">
            A inscrição pode ser feita para uma ou duas pessoas por vez, sendo o
            quarto da hospedagem compartilhado entre as pessoas que se
            inscreverem por um mesmo formulário.{" "}
          </p>
          <ul className="text-gray-700 pb-2">
            <li>1 inscrito - valor total R$1.325,00</li>
            <li>
              2 inscritos dividindo quarto - valor total R$2.525,00 (R$1262,50
              cada)
            </li>
            <li>
              1 inscrito + 1 acompanhante* dividindo quarto - valor total de
              R$2.025,00
            </li>
            <p>
              *acompanhante são aqueles que participarão da hospedagem completa
              mas não das aulas práticas e teóricas do curso.{" "}
            </p>
          </ul>
          <p className="text-gray-700 pb-2">
            O valor do curso inclui a hospedagem na Estação de Pesquisa do OAMa
            durante todo o período do curso - 21 a 24 de abril de 2022 - e três
            refeições: café da manhã, almoço e janta.{" "}
          </p>
          <div className=" py-2">
            <Image
              // className="h-32"
              src="/curso-fotos/pag/Procnias nudicollis.jpg"
              layout="responsive"
              width={"1600"}
              height={"800"}
              objectFit="cover"
              objectPosition="center"
              priority={true}
            ></Image>
          </div>
          <h3 className="text-gray-700 font-bold mt-2 pb-2">
            Formas de pagamento:
          </h3>
          <ul className="text-gray-700 pb-2 list-disc">
            <li>
              Transferência/ depósito em conta corrente OAMa no Banco do Brasil
              - a vista
              <p className="px-2">Ag 0131-7<br/>
Cc 81487-3<br/>
CNPJ 357135120001-80<br/>
Observatório de Aves da Mantiqueira</p>
            </li>
            <li>
              PagSeguro (boleto, cartão de débito e crédito, parcelado. Clique
              nos links abaixo)
            </li>
            <ul class="ml-4 list-disc">
              <li>
                {" "}
                <a
                  href="https://pag.ae/7X-SZikEv"
                  target="_blank"
                  className="text-yellow-600 underline"
                >
                  Para um participante com quarto individual
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://pag.ae/7X-T3KtQt"
                  target="_blank"
                  className="text-yellow-600 underline"
                >
                  Para dois participantes dividindo quarto
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://pag.ae/7X-T6SACH"
                  target="_blank"
                  className="text-yellow-600 underline"
                >
                  Para um participante + um acompanhante dividindo quarto
                </a>
              </li>
            </ul>
          </ul>

          <h2 className="text-gray-700 pb-2 mt-8 font-bold text-2xl">
            Programação do curso
          </h2>
          <h3 className="text-gray-700 font-bold mt-2 pb-2">Quinta-feira</h3>
          <p> Check in a partir das 14hs</p>
          <table>
            <tr>
              <td
                style={{ verticalAlign: "top" }}
                className="text-gray-600 pr-8"
              >
                14:00-18:00
              </td>{" "}
              Acomodações e tempo livre para conhecer o espaço{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                18:00
              </td>{" "}
              Roda de conversa para apresentações do grupo, sobre o OAMa,
              fotografia de aves e o BirdsAtlantic{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                19:30
              </td>{" "}
              Jantar{" "}
            </tr>
          </table>

          <h3 className="text-gray-700 font-bold mt-2 pb-2">Sexta-feira </h3>
          <table>
            <tr>
              <td
                style={{ verticalAlign: "top" }}
                className="text-gray-600 pr-8"
              >
                06:00 - 8:00
              </td>{" "}
              Café da manhã e tempo livre para passarinhada{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                08:00 - 10:00
              </td>{" "}
              Aula e prática{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                10:00 - 10:30
              </td>{" "}
              Intervalo{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                10:30 - 12:00
              </td>{" "}
              Aula e prática{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                12:00 - 15:00{" "}
              </td>
              Almoço e tempo livre de descanso{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                15:00 - 17:30
              </td>{" "}
              Aula e prática
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                17:30 - 19:30
              </td>{" "}
              Tempo livre, conversas, dúvidas…
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                {" "}
                19:30{" "}
              </td>{" "}
              Janta
            </tr>
          </table>
          <h3 className="text-gray-700 font-bold mt-2 pb-2">Sábado </h3>
          <table>
            <tr>
              <td
                style={{ verticalAlign: "top" }}
                className="text-gray-600 pr-8"
              >
                06:00 - 8:00
              </td>{" "}
              Café da manhã e tempo livre para passarinhada{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                08:00 - 10:00
              </td>{" "}
              Aula e prática{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                10:00 - 10:30
              </td>{" "}
              Intervalo{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                10:30 - 12:00
              </td>{" "}
              Aula e prática{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                12:00 - 15:00{" "}
              </td>
              Almoço e tempo livre de descanso{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                15:00 - 17:30
              </td>{" "}
              Aula e prática
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                17:30 - 19:30
              </td>{" "}
              Tempo livre, conversas, dúvidas…
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                {" "}
                19:30{" "}
              </td>{" "}
              Janta
            </tr>
          </table>

          <h3 className="text-gray-700 font-bold mt-2 pb-2">Domingo</h3>
          <table>
            <tr>
              <td
                style={{ verticalAlign: "top" }}
                className="text-gray-600 pr-8"
              >
                06:00 - 8:00
              </td>{" "}
              Café da manhã e tempo livre para passarinhada{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                08:00 - 12:00
              </td>{" "}
              Caminhada de passarinhada e prática de fotografia{" "}
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                12:00 - 17:00{" "}
              </td>
              Almoço, tempo livre de descanso, conversa, dúvidas...{" "}
            </tr>

            <tr>
              <td style={{ verticalAlign: "top" }} className="text-gray-600">
                17:00{" "}
              </td>
              Check-out{" "}
            </tr>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
