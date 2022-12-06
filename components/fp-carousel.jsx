import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

const FPCarousel = (props) => {
  const fotos = [
    {
      pic: "/fotos_ep/aerea.jpeg",
      legend: "Portfolio OAMa",
      link: "/publicacoes/files/Portfolio_OAMa.pdf",
    },
    {
      pic: "/jacucara/figs/1.jpg",
      legend: "Campanha Jacuçara",
      link: "/jacucara",
    },
    {
      pic: "/proaves/intro/fig2.jpg",
      legend: "Campanha Pró-Aves",
      link: "/proaves",
    },
    { pic: "/fotos_ep/piscina.jpg", legend: "Apoie", link: "/apoie" },
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
          <div className="h-96 w-full sm:h-96  relative">
            <Link href={img.link}>
              <Image
                alt={img.legend}
                layout="fill"
                objectFit="contain"
                src={img.pic}
              ></Image>
            </Link>

            <div className="w-full bg-gradient-to-b from-cyan-500 to-blue-500 flex absolute bottom-12 justify-start">
              <p className=" text-white text-6xl">{img.legend}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const EPCarousel = (props) => {
  const fotos = [
    { pic: "/fotos_ep/aerea.jpeg", legend: "Foto aérea da EP." },
    { pic: "/fotos_ep/frontal.jpg", legend: "Foto frontal da EP." },
    { pic: "/fotos_ep/lateral.jpg", legend: "Vista lateral da EP." },
    { pic: "/fotos_ep/piscina.jpg", legend: "Piscina Natural." },

    { pic: "/fotos_ep/acesso.jpg", legend: "Trilha de acesso à EP." },
    {
      pic: "/fotos_ep/noite.jpg",
      legend: "Vista noturna da EP, com Pedra Selada ao fundo.",
    },
  ];

  return (
    <div className="flex group h-100 w-72 justify-center items-center sm:px-8">
      <Carousel
        showArrows={true}
        showStatus
        autoPlay
        swipeable
        emulateTouch
        infiniteLoop
        className="mt-2 bg-gray-700 mb-8 sm:mb-4  h-72 w-full sm:h-96 my-auto"
      >
        {fotos.map((img) => (
          <div className="h-72 w-full sm:h-96  relative">
            <Image
              alt={img.legend}
              layout="fill"
              objectFit="contain"
              src={img.pic}
            ></Image>
            <div className="w-full flex absolute bottom-12 justify-center">
              <p className="w-1/3 opacity-80 sm:opacity-5 text-white bg-gray-700 rounded-md p-2 group-hover:opacity-80 ">
                {img.legend}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export { EPCarousel, FPCarousel };
