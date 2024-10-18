import DefaultLayout from '@layouts/default';
import { SmallHero } from '@includes/small-hero';
import Title from '@includes/title';
import Head from 'next/head';
import Link from 'next/link';
import { PostAuthorPost } from '@includes/new_post_author';
import { urlFor } from '../pages/blog/index';
import Image from 'next/legacy/image';
import BlockContent from '@sanity/block-content-to-react';
import { PortableText } from 'next-sanity';

export default function PostLayout(props) {
  console.log(props);
  return (
    <DefaultLayout>
      <SmallHero img_src={urlFor(props?.mainImage).url()} />

      <Head>
        <title>{props.title}</title>
      </Head>
      <article className='mx-auto w-3/4 sm:max-w-4xl'>
        <Title title={props.title}></Title>
        <PostAuthorPost {...props}></PostAuthorPost>
        <PortableText
          value={props.body}
          components={myPortableTextComponents}
        />

        {/* <div
          className='blog-content container mx-auto mb-2 max-w-4xl list-disc text-gray-600 md:px-0'
          dangerouslySetInnerHTML={{ __html: props.content }}
        /> */}
      </article>
    </DefaultLayout>
  );
}

const myPortableTextComponents = {
  types: {
    imageWithAlt: ({ value }) => {
      return (
        <div className='mb-8 flex flex-col items-center '>
          <div className='relative h-[300px] w-full'>
            <Image
              layout='fill'
              src={urlFor(value.image).url()}
              alt={value.alt}
              objectFit='cover'
            />
          </div>
          <p className='blog-content container mx-auto mb-2 max-w-4xl list-disc text-gray-600 md:px-0'>
            {value.caption}
          </p>
        </div>
      );
    },
    block: ({ value }) => {
      console.log(value);
      return <p className='mb-4 text-lg'>{value.children[0]?.text}</p>;
    },
  },
  marks: {
    link: ({ children, value }) => {
      const { href } = value;
      return <a href={href}>{children}</a>;
    },
  },
};

const removeSpace = (string) => string.replace(/\s/g, '');
