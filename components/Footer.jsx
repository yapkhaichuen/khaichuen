import Link from 'next/link'

const ExternalLink = ({ children, href }) => (
  <a
    className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer data-nosnippet className="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
      <hr className="mb-8 w-full border border-gray-200 dark:border-gray-800" />
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
      <div className="flex flex-col space-y-4">
          <p className="font-semibold text-gray-700 dark:text-gray-200">
            Etching my life to a bunch of ones and zeros.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/yapkhaichuen">GitHub</ExternalLink>
          <ExternalLink href="https://www.twitter.com/KhaiYap">Twitter</ExternalLink>
        </div>

      </div>
    </footer>
  )
}
