import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/Container'

export default function Custom404() {
  return (
    <Container>
      <Head>
        <title>Khai Chuen | 404</title>
      </Head>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          404 – Page Not Found
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Please check if this page exists.
        </p>
        <Link href="/">
          <a className="btn">Go Back Home</a>
        </Link>
      </div>
    </Container>
  )
}
