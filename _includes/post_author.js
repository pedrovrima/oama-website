import Image from "next/legacy/image";

export function PostAuthorCard(props) {
  return (
    <div class="flex md:flex-row mt-8 items-center   flex-wrap">
      <div class=" shadow-lg rounded-full w-3/12 lg:w-2/12 mr-6">
        <div>
          <Image
            alt={`foto de ${props.author}`}
            className="rounded-full"
            layout="responsive"
            src={`/people/${props.author.replace(/\s+/g, "")}.jpg`}
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
}

export function PostAuthorPost(props) {
  return (
    <div class="flex md:flex-row my-8 items-center   flex-wrap">
      <div class=" shadow-lg rounded-full    w-2/12 lg:w-1/12 mr-6">
        <div>
          <Image
            alt={`foto de ${props.author}`}
            className="rounded-full"
            layout="responsive"
            src={`/people/${props.author.replace(/\s+/g, "")}.jpg`}
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
}
