import matter from 'gray-matter'
import {marked} from 'marked'
import yaml from 'js-yaml'

export async function getAllPosts() {
  const context = require.context('../_posts/', false, /^\.\/.*\.mdx$/)
  const posts = []
  console.log(context.keys().length)
  for(const key of context.keys()){
    const post = key.slice(2);
    console.log("here",key)
    const content = await import(`../_posts/${post}`);
    const meta = matter(content.default)
    const hero = meta.data.hero? meta.data.hero : "default.jpg"
    posts.push({
      slug: post.replace('.mdx',''),
      ...meta.data,
      hero
    })
  }
  console.log(posts)
  return(posts);
}



export async function getPostBySlug(slug) {
  const fileContent = await import(`../_posts/${slug}.mdx`)
  const meta = matter(fileContent.default)
  console.log(marked)
  const content = marked(meta.content)    
  return {
    ...meta.data,
    content: content
  }
}


export async function getConfig() {
  const config = await import(`../config.yml`)
  return yaml.safeLoad(config.default)
}


