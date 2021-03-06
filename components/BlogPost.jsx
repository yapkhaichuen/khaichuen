import Link from 'next/link'

export default function BlogPost({ description, slug, title }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full transform transition-all ">
        <div className="mb-8 w-full">
          <div className="flex flex-col justify-between md:flex-row">
            <h3 className="mb-1 w-full transform font-medium font-jetbrains text-lg text-gray-900 underline-offset-2 decoration-slate-400 transition-all hover:underline dark:text-gray-100 md:text-lg">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  )
}
