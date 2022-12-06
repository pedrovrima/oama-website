import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

const EPCarousel = (props) => {
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
    <div className="flex group cursor-pointer justify-center items-center sm:px-8">
      <Carousel
        showArrows={true}
        showStatus
        autoPlay
        swipeable
        emulateTouch
        infiniteLoop
        showThumbs={false}
        stopOnHover
        transitionTime={600}
        className="mt-2 bg-gray-300 mb-8 sm:mb-4 h-96 w-full sm:h-96 my-auto"
      >
        {fotos.map((img) => (
          //   <Link href={img.link}>
          <div className="h-96 w-full sm:h-96  relative">
            <Image
              alt={img.legend}
              layout="fill"
              objectFit="cover"
              src={img.pic}
            ></Image>
            <div className="w-full bg-gradient-to-b from-cyan-500 to-blue-500 flex absolute bottom-12 justify-start">
              <p className=" text-white text-6xl">{img.legend}</p>
            </div>
          </div>
          //   </Link>
        ))}
      </Carousel>
    </div>
  );
};

export { EPCarousel };
