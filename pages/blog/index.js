import DefaultLayout from "@layouts/default";
import Link from "next/link";
import { getConfig, getAllPosts } from "@api";
import { SmallHero } from "@includes/small-hero";
import Title from "@includes/title";
import Image from "next/image";
import {PostAuthorCard} from "@includes/post_author";

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <SmallHero img_src="heros/blog.jpg" />
      <Title title="Blog" />
      {/* <FirstPost post={props.posts[0]} /> */}
      <div className="w-2/3 mx-auto grid sm:grid-cols-3">
        {props.posts.map(function (post, idx) {
          console.log(post);
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
  const allPosts = await getAllPosts();
  console.log(allPosts)
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  };
}

const FirstPost = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="w-1/2 bg-black flex cursor-pointer shadow-2xl  mx-auto mt-8 mb-4">
        <div className="w-1/3 rounded-xl">
          <Image
            className=""
            layout="responsive"
            width={120}
            objectFit="cover"
            height={150}
            src={`/blog/${post.hero}`}
          ></Image>
        </div>
        <div className="flex flex-col  justify-between  px-8 py-4">
          <p className="font-bold text-4xl">{post.title}</p>
          <div className="mt-2">
            <PostAuthorCard {...post}></PostAuthorCard>
          </div>
        </div>
      </div>
    </Link>
  );
};

const OtherPost = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="flex flex-col rounded-lg cursor-pointer shadow-2xl mx-2 mt-8 mb-4">
        <div className=" ">
          <Image
            className="rounded-sm "
            layout="responsive"
            width={30}
            objectFit="cover"
            height={20}
            src={`/blog/${post.hero}`}
          ></Image>
        </div>
        <div className="flex flex-col  h-full justify-between  px-8 py-4">
          <p className="font-bold text-4xl">{post.title}</p>
          <div className="mt-2">
            <PostAuthorCard {...post}></PostAuthorCard>
          </div>
        </div>
      </div>
    </Link>
  );
};
