import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FPCarousel = (props) => {
  const fotos = [
    {
      pic: "/carousel/1.jpg",
      legend: "Portfólio OAMa",
      link: "/publicacoes/files/Portfolio_OAMa.pdf",
      legendText:
        "Conheça e compartilhe nossos objetivos, projetos, programas e conquistas.",
    },
    {
      pic: "/carousel/2.jpg",
      legend: "Campanha Jacuçara",
      link: "/jacucara",
      legendText:
        "Uma ação pela divulgação de duas espécies ameaçadas e exclusivas da Mata Atlântica: a jacutinga e a palmeira-juçara.",
    },
    {
      pic: "/carousel/3.jpg",
      legend: "Campanha Pró-Aves",
      link: "/proaves",
      legendText:
        "Aprenda sobre seis impactos que a humanidade gera sobre as aves e o que nós podemos fazer para mitigá-los.",
    },
    {
      pic: "/carousel/4.jpg",

      legend: "Apoio Comunitário",
      link: "/apoie",
      legendText:
        "Essa é a força motora que dá vida às nossas ações. Junte-se ao nosso bando pela Conservação com Ciência.",
    },
  ];

  return (
    <div className="flex group h-100 cursor-pointer justify-center items-center sm:px-8">
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
        className="mt-2 bg-gray-300 mb-8 sm:mb-4 w-full  h-96"
      >
        {fotos.map((img) => (
          <Link href={img.link}>
            <div className="h-96 w-full sm:h-96  relative">
              <Image
                alt={img.legend}
                layout="fill"
                objectFit="cover"
                src={img.pic}
              ></Image>
              <div className="absolute h-full w-full bg-gradient-to-b to-gray-900 via-transparent  from-transparent  t-0"></div>
              <div className="flex-col items-start  px-2 md:px-12 w-full flex absolute pb-8 md:pb-12 bottom-0 justify-start">
                <p className=" font-bold text-white text-3xl md:text-6xl">
                  {img.legend}
                </p>
                <p className="text-left  text-white text-lg md:text-xl">
                  {img.legendText}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export { FPCarousel };
