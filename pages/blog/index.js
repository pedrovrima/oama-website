import DefaultLayout from '@layouts/default';
import Link from 'next/link';
import { getConfig, getAllPosts } from '@api';
import { SmallHero } from '@includes/small-hero';
import Title from '@includes/title';
import Image from 'next/image';
import { PostAuthorCard } from '@includes/post_author';
import { client } from '../../sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default function Blog(props) {
  console.log(props.sanityPosts);
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <SmallHero img_src='heros/blog.jpg' />
      <Title title='Blog' />
      {/* <FirstPost post={props.posts[0]} /> */}
      <div className='mx-auto grid w-2/3 sm:grid-cols-3'>
        {props.sanityPosts?.result?.map(function (post, idx) {
          console.log(post);
          return (
            <>
              <SanityPost post={post} />
            </>
          );
        })}

        {props.posts.map(function (post, idx) {
          return (
            <>
              {/* {idx === 0 ? ( */}
              {/* "") : ( */}
              <OtherPost post={post} />
              {/* )} */}
            </>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const sanity = await fetch(
    'https://1tnejkhf.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%27blog%27%5D%7B...%2C+author-%3E%7D'
  ).then((res) => res.json());

  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
      sanityPosts: sanity,
    },
  };
}

const FirstPost = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className='mx-auto mb-4 mt-8 flex w-1/2  cursor-pointer bg-black shadow-2xl'>
        <div className='w-1/3 rounded-xl'>
          <Image
            className=''
            layout='responsive'
            width={120}
            objectFit='cover'
            height={150}
            src={`/blog/${post.hero}`}
          ></Image>
        </div>
        <div className='flex flex-col  justify-between  px-8 py-4'>
          <p className='text-4xl font-bold'>{post.title}</p>
          <div className='mt-2'>
            <PostAuthorCard {...post}></PostAuthorCard>
          </div>
        </div>
      </div>
    </Link>
  );
};

const OtherPost = ({ post }) => {
  return (
    <Link href={`/blog/old/${post.slug}`}>
      <div className='mx-2 mb-4 mt-8 flex cursor-pointer flex-col rounded-lg shadow-2xl'>
        <div className=' '>
          <Image
            className='rounded-sm '
            layout='responsive'
            width={30}
            objectFit='cover'
            height={20}
            src={`/blog/${post.hero}`}
          ></Image>
        </div>
        <div className='flex h-full  flex-col justify-between  px-8 py-4'>
          <p className='text-4xl font-bold'>{post.title}</p>
          <div className='mt-2'>
            <PostAuthorCard {...post}></PostAuthorCard>
          </div>
        </div>
      </div>
    </Link>
  );
};

const SanityPost = ({ post }) => {
  console.log(post);
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <div className='mx-2 mb-4 mt-8 flex cursor-pointer flex-col rounded-lg shadow-2xl'>
        <div className=' '>
          {post.mainImage && (
            <Image
              className='rounded-sm '
              layout='responsive'
              width={30}
              objectFit='cover'
              height={20}
              src={urlFor(post.mainImage).url()}
            ></Image>
          )}
        </div>
        <div className='flex h-full  flex-col justify-between  px-8 py-4'>
          <p className='text-4xl font-bold'>{post.title}</p>
          <div className='mt-2'>
            <SanityAuthor author={post.author} date={post.publishedAt} />
          </div>
        </div>
      </div>
    </Link>
  );
};

const SanityAuthor = ({ author, date }) => {
  return (
    <div class='mt-8 flex flex-wrap items-center   md:flex-row'>
      <div class=' mr-6 w-3/12 rounded-full shadow-lg lg:w-2/12'>
        <div>
          <Image
            alt={`foto de ${author}`}
            className='rounded-full'
            layout='responsive'
            src={urlFor(author?.image).width(50).height(50).url()}
            width={50}
            objectFit='cover'
            height={50}
          ></Image>
        </div>
      </div>
      <div className='flex flex-col'>
        <p className='text-lg font-bold'>{author.name}</p>
        <p className='text-md'>{new Date(date)?.toLocaleDateString('pt-BR')}</p>
      </div>
    </div>
  );
};
