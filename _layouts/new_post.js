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
  console.log(props.body);
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
      console.log(value);
      return (
        <div className='mb-8 flex flex-col items-center '>
          <div
            className='relative w-full'
            style={{
              aspectRatio:
                value.width && value.height
                  ? `${value.width} / ${value.height}`
                  : '16/9',
            }}
          >
            <Image
              layout='fill'
              src={urlFor(value.image).url()}
              alt={value.alt}
              objectFit='contain'
            />
          </div>
          <p className='blog-content container mx-auto mb-2 max-w-4xl list-disc text-gray-600 md:px-0'>
            {value.caption}
          </p>
        </div>
      );
    },

    block: ({ value }) => {
      console.log('Block value:', JSON.stringify(value, null, 2));
      if (value.style === 'normal') {
        return (
          <p className='text-md mb-4'>
            {value.children.map((child) => (
              <span
                key={child._key}
                className={`${
                  child.marks.includes('strong') ? 'font-bold' : ''
                } ${child.marks.includes('em') ? 'italic' : ''}`}
              >
                {child.text}
              </span>
            ))}
          </p>
        );
      }
      if (value.style === 'h2') {
        return (
          <h2 className='mb-2 pt-4 text-lg font-bold'>
            {value.children[0]?.text}
          </h2>
        );
      }
      return null;
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className='mb-4 list-disc pl-6'>{children}</ul>
    ),
    number: ({ children }) => (
      <ol className='mb-4 list-decimal pl-6'>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className='text-md'>{children}</li>,
    number: ({ children }) => <li className='text-md'>{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const { href } = value;
      return <a href={href}>{children}</a>;
    },
  },
};

const removeSpace = (string) => string.replace(/\s/g, '');
