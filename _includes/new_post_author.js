import Image from 'next/legacy/image';
import { urlFor } from '../pages/blog/index';

export function PostAuthorCard(props) {
  return (
    <div class='mt-8 flex flex-wrap items-center   md:flex-row'>
      <div class=' mr-6 w-3/12 rounded-full shadow-lg lg:w-2/12'>
        <div>
          <Image
            alt={`foto de ${props.author.name}`}
            className='rounded-full'
            layout='responsive'
            src={props.author.image && urlFor(props.author.image).url()}
            width={50}
            objectFit='cover'
            height={50}
          ></Image>
        </div>
      </div>
      <div className='flex flex-col'>
        <p className='text-lg font-bold'>{props.author.name}</p>
        <p className='text-md'>
          {new Date(props.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export function PostAuthorPost(props) {
  return (
    <div class='my-8 flex flex-wrap items-center   md:flex-row'>
      <div class=' mr-6 w-2/12    rounded-full shadow-lg lg:w-1/12'>
        <div>
          <Image
            alt={`foto de ${props.author.name}`}
            className='rounded-full'
            layout='responsive'
            src={props.author.image && urlFor(props.author.image).url()}
            width={50}
            objectFit='cover'
            height={50}
          ></Image>
        </div>
      </div>
      <div className='flex flex-col'>
        <p className='text-lg font-bold'>{props.author.name}</p>
        <p className='text-md'>
          {new Date(props.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
