import Head from 'next/head'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allBlogs } from '../../.contentlayer/generated'
import BlogLayout from '../../layouts/blog'
import Comment from '../../components/Comment'

export async function getStaticPaths() {
  return {
    paths: allBlogs.map(p => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find(blog => blog.slug === params.slug)

  return {
    props: {
      blog,
    },
  }
}

function RoundedImage(props) {
  return <img alt={props.alt} className="rounded-lg" {...props} />
}

export default function Blog({ blog }) {
  const Component = useMDXComponent(blog.body.code)


  return (
    <BlogLayout blog={blog}>
      <Head>
        <title>{blog.title}</title>
        <meta property="og:image" content={blog.opengraph} />
        <meta content={blog.description} name="description" />
        <meta property="og:title" content={`${blog.title} | Khai Chuen`} />
      </Head>
      <article>
        <Component components={{ Image: RoundedImage }} />
      </article>
      <Comment />



    </BlogLayout>
  )
}
