import PostLayout from '@layouts/post';
import { getPostBySlug, getAllPosts } from '@api';

export default function Post(props) {
  return <PostLayout {...props} />;
}

export async function getStaticProps(context) {
  const post = await getPostBySlug(context.params.slug);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: post,
  };
}

export async function getStaticPaths() {
  let paths = await getAllPosts();
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
