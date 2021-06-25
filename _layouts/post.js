import DefaultLayout from "@layouts/default";
import { SmallHero } from "@includes/small-hero";
import Title from "@includes/title";
import Head from "next/head";
import Link from "next/link";
import {PostAuthorPost} from "@includes/post_author";

import Image from "next/image";

export default function PostLayout(props) {
  console.log(props);
  return (
    <DefaultLayout>
      <SmallHero img_src={`blog/${props.hero?props.hero:"default.jpg"}`} />

      <Head>
        <title>{props.title}</title>
      </Head>
      <article className="w-3/4 sm:max-w-4xl mx-auto">
        <Title title={props.title}></Title>
        <PostAuthorPost {...props}></PostAuthorPost>
        <div className="blog-content list-disc container max-w-4xl mx-auto text-gray-600 md:px-0 mb-2" dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>

    </DefaultLayout>
  );
}

const removeSpace = (string) => string.replace(/\s/g, "");
