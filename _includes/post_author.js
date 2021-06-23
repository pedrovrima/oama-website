import Image from "next/image";

export default function PostAuthor (props)  {
  return (
    <div class="flex w-1/4 md:flex-row mb-1 justify-center items-center   flex-wrap">
      <div class="w-1/5 shadow-lg rounded-full   sm:w-1/8 m-2 sm:m-6">
        <div>
          <Image
            className="rounded-full"
            layout="responsive"
            src="/LuizaFigueira.jpg"
            width={50}
            objectFit="cover"
            height={50}
          ></Image>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-lg">{props.author}</p>
        <p className="text-md">{props.date}</p>
      </div>
    </div>
  );
};


