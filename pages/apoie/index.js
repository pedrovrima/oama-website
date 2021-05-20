import Nav from "../../components/nav";
import { useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Image from "next/image";

export default function Apoie() {
  const initialOptions = {
    "client-id":
      "Ab2lPDlKKAMdeKZpmz1wFW2_HYyjuhm1rzPjz3nAleWM4PaAEu5U6TNKwBzMee9NJzJHCpq1qA1hr0rx",
    // currency: "BRL",
    intent: "subscription",
    vault: "true",
    // locale: "en_US",
    "enable-funding": "card",
  };

  const paypal = useRef();

  // useEffect(()=>{
  //   window.paypal
  //     .Buttons({
  //       createOrder: (data, actions, err) => {
  //         return actions.order.create({
  //           intent: "CAPTURE",
  //           purchase_units: [
  //             {
  //               description: "Cool looking table",
  //               amount: {
  //                 value: 650.0,
  //               },
  //             },
  //           ],
  //         });
  //       },
  //       onApprove: async (data, actions) => {
  //         const order = await actions.order.capture();
  //         console.log(order);
  //       },
  //       onError: (err) => {
  //         console.log(err);
  //       },
  //     })
  //     .render(paypal.current);
  // },[])

  return (
    <div className="pb-32">
      <Nav />
      <div className=" relative hero-small md:hero min-h-1/2">
        <div className="pt-32 lg:pb-16 md:pb-16 h-full  justify-items-center items-center">
          <div className="absolute top-0 h-full w-full">
            <Image
              // className="h-32"
              src="/_FR_7083.jpg"
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
        <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
          Apoie{" "}
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="container max-w-4xl mx-auto ">
          <p class="text-gray-600 px-8 md:px-0 mb-2">
            O OAMa é uma iniciativa sem fins lucrativos e independente, que só é
            viável graças à energia, dedicação e colaboração de pessoas que
            acreditam que, juntos, podemos fazer diferença.
          </p>
          <p class="text-gray-600 px-8 md:px-0 mb-2">
            {" "}
            Toda doação feita para o OAMa é direcionada para a realização de
            nossos projetos de pesquisa e de educação. Tornando-se um filiado ou
            fazendo uma doação para o OAMa, você está apoiando a conservação de
            aves e habitats brasileiros com base em pesquisas científicas. Sua
            participação será extremamente apreciada pelo OAMa, e nós nos
            comprometemos em transformar a sua colaboração em pesquisa,
            conhecimento e conservação!
          </p>

          <p class="text-gray-600 px-8 md:px-0 mb-8">
            {" "}
            As doações são processadas pelo PayPal. Utilize o botão abaixo para
            abrir a plataforma de doação. Caso queira se tornar um{" "}
            <strong>filiado</strong>, marque a opção{" "}
            <strong>"Fazer desta uma doação mensal"</strong>.
          </p>
          {/* <div className="md:grid md:grid-cols-2">
            <div className="flex flex-col mb-8 items-center">
              <h3 className="text-3xl w-full font-bold text-center mb-8 text-gray-800">
                Doação
              </h3>
              <div class="mt-1 relative rounded-md shadow-lg">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-md">R$</span>
                </div>
                <input
                  pattern="[0-9]*"
                  inputmode="numeric"
                  placeholder="0,00"
                  className="border-2 px-4  text-right text-lg text-gray-600 p-1 w-48 border-amber-300 rounded-lg"
                ></input>
              </div>
            </div>
            <div className="flex flex-col mb-8 items-center">
              <h3 className="text-3xl w-full font-bold text-center mb-8 text-gray-800">
                Filie-se
              </h3>
              <div class="mt-1 relative rounded-md shadow-lg">
                <select
                  placeholder="Escolha seu plano"
                  className="border-2 px-4  text-center text-lg text-gray-600 p-1 w-64 border-amber-300 rounded-lg"
                >
                  <option value="15,00">Tico-tico - R$ 15,00</option>
                  <option value="30,00">Saí-andorinha - R$ 30,00</option>
                  <option value="60,00">Saíra-sete-cores - R$ 60,00</option>
                  <option value="120,00">Saíra-amarela - R$ 120,00</option>
                  <option value="320,00">Tangará-dançarino - R$ 320,00</option>
                  <option value="500,00">Gavião-pega-macaco - R$ 500,00</option>
                </select>
              </div>
            </div>
            <div ref={paypal}></div> */}
          <div className="flex justify-center">
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_top"
            >
              <input
                type="hidden"
                name="hosted_button_id"
                value="3KT992QCB6TKJ"
              />
              <input
                type="submit"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                className="mx-auto lg:mx-0 mr-2 hover:underline bg-yellow-400 text-gray-800 font-bold rounded-full mt-0 py-2  px-8 shadow cursor-pointer focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
                value="Doe"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_BR/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
