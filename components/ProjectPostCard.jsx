
export default function ProjectPostCard({ index, description, href, title }) {
  return (
    <a className="flex transform transition-all hover:opacity-75" href={href} rel="noopener noreferrer" target="_blank">
      <div className="mr-6 text-left text-gray-500 dark:text-gray-400">{index}</div>
      <div className="mb-8 w-full">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">{title}</h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </a>
  )
}
