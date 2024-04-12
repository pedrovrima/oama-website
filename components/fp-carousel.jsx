import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FPCarousel = (props) => {
  const fotos = [
    {
      pic: "/carousel/cursos.jpg",
      legend: "Cursos 2024",
      link: "/treinamento-cursos#curso2024",
      legendText:
        "Estão abertas as inscrições para os cursos OAMa 2024",
    },
    {
      pic: "/carousel/banner-percepcao.jpg",
      legend: "Pesquisa de Percepção",
      link: "https://bit.ly/4cfSNFs?r=qr",
      legendText:
        "A sua opinião importa, e nós queremos te ouvir!",
    },
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
    <div className="flex items-center justify-center cursor-pointer group h-100 sm:px-8">
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
        className="w-full mt-2 mb-8 bg-gray-300 sm:mb-4 h-96"
      >
        {fotos.map((img) => (
          <Link key={img.link} href={img.link}>
            <div className="relative w-full h-96 sm:h-96">
              <Image
                alt={img.legend}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                src={img.pic}
              ></Image>
              <div className="absolute w-full h-full bg-gradient-to-b to-gray-900 via-transparent from-transparent t-0"></div>
              <div className="absolute bottom-0 flex flex-col items-start justify-start w-full px-2 pb-8 md:px-12 md:pb-12">
                <p className="text-3xl font-bold text-white md:text-6xl">
                  {img.legend}
                </p>
                <p className="text-lg text-left text-white md:text-xl">
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
