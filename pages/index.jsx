import Head from 'next/head'
import Link from 'next/link'
import { allBlogs } from '../.contentlayer/generated'
import BlogPostCard from '../components/BlogPostCard'
import Container from '../components/Container'
import ProjectPostCard from '../components/ProjectPostCard'

const mostRecentPostsGradients = [
  'from-[#D8B4FE] to-[#818CF8]',
  'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]',
  'from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
]

export async function getStaticProps() {
  const mostRecentPostsData = allBlogs
    .sort((prevBlog, nextBlog) => {
      return new Date(nextBlog.updatedAt) - new Date(prevBlog.updatedAt)
    })
    .slice(0, 3)

  return {
    props: {
      mostRecentPostsData,
    },
  }
}

export default function Home({ mostRecentPostsData }) {
  return (
    <Container>
      <Head>
        <title>Khai Chuen | Etching my life to a bunch of ones and zeros.</title>
      </Head>

      <div className="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-700 pb-16">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col sm:pr-8">
            <h1 className="font-jetbrains mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            $ Khai Chuen<span className="text-green-400 blink">_</span>
            </h1>
            <h2 className="mb-4 font-semibold text-gray-700 dark:text-gray-200">
              Average student by day, average person by night.
            </h2>
            <p className="mb-16 text-gray-600 dark:text-gray-300">
              I’m also a <i>data and visualization enthusiast</i> and love making decision from facts and data.
              Proficient in <span className="font-mono font-bold text-orange-400">Python</span> and eager to learn new
              languages and frameworks.
            </p>
          </div>
          <div className="relative mb-8 mr-auto w-[90px] flex-none select-none sm:mb-0 sm:w-[122px]">
            <img
              className="relative rounded-full"
              alt="Khai Chuen"
              height={256}
              width={256}
              src="/images/Hero.jpeg"
            />
          </div>
        </div>
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">Latest posts</h3>
        <div className="flex w-full flex-col gap-6 md:flex-row">
          {mostRecentPostsData.map(({ slug, title, updatedAt }, idx) => (
            <BlogPostCard
              key={slug}
              title={title}
              slug={slug}
              updatedAt={updatedAt}
              gradient={mostRecentPostsGradients[idx]}
            />
          ))}
        </div>
        <Link href="/blog">
          <a className="mt-8 flex h-6 items-center text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          Read all posts
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="ml-1 h-6 w-6">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
        <h3 className="mb-1 mt-16 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          Projects
        </h3>
        <p className="mb-6 text-md text-gray-600 dark:text-gray-400">I drink black coffee. The fuel for code.</p>
        <ProjectPostCard
          href="https://github.com/yapkhaichuen/Daily-Covid-Report"
          index="01"
          title="Daily Covid Report"
          description="This project aims to generate a simple report about the current Covid-19 cases and deaths in Malaysia. Results are delayed by one day, data is provided by the Ministry of Health Malaysia Covid-19 public data."
        />
      </div>
    </Container>
  )
}
