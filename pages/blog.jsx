import Head from 'next/head'
import { allBlogs } from '../.contentlayer/generated'
import BlogPost from '../components/BlogPost'
import Container from '../components/Container'
import Link from 'next/link'
import { useState } from 'react'
export default function Blog({ allBlogs }) {
  const metaTitle = 'Blog'
  const metaDesc = 'Documenting my learning journey along the way.'

  const sortedPostsData = allBlogs
    .sort((prevBlog, nextBlog) => {
      return new Date(nextBlog.updatedAt) - new Date(prevBlog.updatedAt)
    })

  const [query, handleChange] = useState("")

  const filteredPostsData = sortedPostsData.filter(post => {
    return post.title.toLowerCase().includes(query.toLowerCase()) || post.description.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <>
      <Head>
        <title>Khai Chuen | {metaTitle}</title>
        <meta content={metaDesc} name="description" />
        <meta property="og:title" content={`${metaTitle}`} />
      </Head>
      <Container>
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">{metaTitle}</h1>
          <p className="mb-4 text-gray-600 dark:text-gray-400">{metaDesc}</p>
          <div className="relative w-full mb-6">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search articles"
            className="px-4 pr-8 py-2 border border-gray-200 dark:border-gray-900 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 dark:focus:border-gray-500 dark:border-gray-600 border-2"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
          <div data-nosnippet className="flex flex-col">
            {filteredPostsData.map(blog => (
              <BlogPost key={blog.title} {...blog} />
            ))}
            {/* If no results display "No posts found" */}
            {filteredPostsData.length === 0 && (
                <p className="w-full transform font-medium font-jetbrains text-lg text-gray-900 underline-offset-2 decoration-slate-400 transition-all hover:underline dark:text-gray-100 md:text-l mb-4">No posts found</p>
            )}
          </div>
          <Link href="/">
          <a className="mt-2 flex h-6 items-center text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="mr-1 h-6 w-6 rotate-180">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}

                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
            Go Back Home
          </a>
        </Link>


        </div>
      </Container>
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      allBlogs,
    },
  }
}
