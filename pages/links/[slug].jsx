import PostLayout from '@layouts/new_post';
import { getPostBySlug, getAllPosts } from '@api';
import { urlFor } from 'pages/blog';
import Footer from '@includes/footer';

export default function Post(props) {
  console.log(props);
  return <LinkTreeLayout {...props} />;
}

export async function getStaticProps(context) {
  const linktree = await fetch(
    `https://1tnejkhf.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%27linkTree%27+%26%26+slug.current+%3D%3D+%24slug+%5D%0A%7B...%2Clinks%5B%5D-%3E%7D%0A&%24slug=%22${context.params.slug}%22`
  ).then((res) => res.json());
  if (!linktree) {
    return {
      notFound: true,
    };
  }
  return {
    props: linktree.result[0],
  };
}

export async function getStaticPaths() {
  let posts = await fetch(
    'https://1tnejkhf.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%27linkTree%27+%5D%0A%0A'
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

const LinkTreeLayout = (props) => {
  console.log(props);
  const image = urlFor(props.headerImage).url();
  return (
    <div>
      <div className='min-h-[90vh] bg-[url("/proaves2/pattern3.png")] bg-[length:97px] pb-12'>
        <div className='mx-auto  max-w-2xl px-8 md:px-16'>
          <div className=' mb-12  flex flex-col items-center'>
            <img className='mb-4 w-[200px]' src={image} alt={props.title} />
            <p className='mb-4 text-2xl font-bold'>{props.title}</p>
            <p className='text-lg'>{props.description}</p>
          </div>
          <div className='flex flex-col items-center '>
            {props.links.map((link) => (
              <a
                disabled={!link.url}
                className={`group m-2 flex w-full  items-center justify-normal rounded-full border-2 border-gray-900 bg-white bg-opacity-70 py-2 pl-2 pr-6 text-left text-gray-900 shadow-md transition-all duration-300 hover:scale-105 hover:bg-opacity-100 hover:shadow-lg ${
                  !link.url
                    ? 'pointer-events-none opacity-50 hover:scale-100 hover:opacity-50'
                    : ''
                }`}
                key={link._key}
                href={link.url}
                target='_blank'
              >
                {link.image && (
                  <img
                    className='mr-2 w-[50px] rounded-full transition-all duration-300 '
                    src={urlFor(link.image).url()}
                  />
                )}
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer noMargin />
    </div>
  );
};
