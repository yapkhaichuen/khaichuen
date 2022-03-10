import dayjs from '../lib/day'
import Container from '../components/Container'
import ViewCounter from '../components/ViewCounter';

import Link from 'next/link'
export default function BlogLayout({ blog, children }) {
  const formatDate = date => {
    return dayjs.utc(date).format('MMM DD, YYYY')
  }


  return (
    <Container>
      <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-jetbrains tracking-tight text-black dark:text-white md:text-5xl">{blog.title}</h1>
        <div
          data-nosnippet
          className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center"
        >
          <div className="flex flex-col items-start justify-between w-full mt-1 md:flex-row md:items-center">
            <p className="text-sm text-gray-700 dark:text-gray-300"> {''} Yap Khai Chuen • {formatDate(blog.updatedAt)}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-mono"><ViewCounter slug={blog.slug} />{''}</p>
          </div>
        </div>
        <div data-nosnippet className="prose mt-4 w-full max-w-none dark:prose-dark">
          {children}
        </div>
        <Link href="/blog">
          <a className="mt-3 flex h-6 items-center text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="mr-1 h-6 w-6 rotate-180">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}

                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
            Other Posts
          </a>
        </Link>
      </article>

    </Container>
  )
}
