import Link from 'next/link'
import cn from 'classnames'
import dayjs from '../lib/day'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

export default function BlogPostCard({ gradient, slug, title, updatedAt }) {
  const formatDate = date => {
    if (dayjs.utc().isSame(dayjs.utc(date), 'year')) {
      return dayjs.utc(date).format('MM-DD')
    } else {
      return dayjs.utc(date).format('YYYY-MM-DD')
    }
  }

  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = data?.total

  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={cn(
          'w-full transform rounded-xl bg-gradient-to-r p-1 transition-all hover:scale-[1.02] md:w-1/3',
          gradient
        )}
      >
        <div className="flex h-full flex-col justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-900">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="mb-6 w-full text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:mb-10 md:text-lg">
              {title}
            </h4>
          </div>
          <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            <span className="capsize ml-1 align-baseline font-mono text-md truncate">
              {views ? new Number(views).toLocaleString() : '–––'} Views
              {/* {formatDate(updatedAt)} If date is wanted instead */}
            </span>
          </div>
        </div>
      </a>
    </Link>
  )
}
