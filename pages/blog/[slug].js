import PostLayout from '@layouts/new_post';
import { getPostBySlug, getAllPosts } from '@api';

export default function Post(props) {
  return <PostLayout {...props} />;
}

export async function getStaticProps(context) {
  const post = await fetch(
    `https://1tnejkhf.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%27blog%27+%26%26+slug.current+%3D%3D+%24slug+%5D%0A%7B...%2Cauthor+-%3E+%7D%0A&%24slug=%22${context.params.slug}%22`
  ).then((res) => res.json());
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: post.result[0],
  };
}

export async function getStaticPaths() {
  let posts = await fetch(
    'https://1tnejkhf.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%27blog%27%5D%7B...%2C+author-%3E%7D'
  ).then((res) => res.json());

  const paths = posts.result.map((post) => ({
    params: { slug: post.slug.current },
  }));
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
}
