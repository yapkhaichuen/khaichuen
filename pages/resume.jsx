import Head from 'next/head'
import Container from '../components/Container'
import Link from 'next/link'
export default function Resume() {
  const metaTitle = 'Resume'

  return (
    <>
      <Head>
        <title>Khai Chuen | {metaTitle}</title>
      </Head>
      <Container>
        <div className="mx-auto mb-16 max-w-2xl ">
          <div className="flex justify-center">
            <img className=" rounded-full" alt="Khai Chuen" height={128} width={128} src="/images/Hero.jpeg" />
          </div>

          <h1 className="mb-4 text-center text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            Yap Khai Chuen
          </h1>
          <h3 className="text-2xl font-semibold">Student</h3>
          <div className=" divide-gray-200 dark:divide-gray-800">
            A am a student currently studying in Chung Ling High School, Penang Malaysia. I am a data & visualization
            enthusiast and I like to make decision from facts and data.
          </div>
          <div className="mt-4 border-t-2">
            <h1 className="text-2xl ">Skills</h1>
            <div className=" divide-gray-200 dark:divide-gray-800">
              <span className="font-semibold ">Tools & Technologies</span>
              <br />
              Analytical skills • Bash • BI Tools • Docker • Excel • git • PowerShell • Python • VS Code
            </div>
          </div>
          <div className="mt-4 border-t-2">
            <h1 className="text-2xl ">Recognition</h1>
            <div className=" divide-gray-200 dark:divide-gray-800">
              <Link href="https://www.credly.com/badges/18b60751-622b-41b9-8d9e-1ec7efbf7ea7/embedded" passHref>
              <img
                className="hover:cursor-pointer"
                src="/resume/cert.png"
                width={140}
                height={140}
                quality={100}
                alt="Certificate"
              />
              </Link>
              <p className="text-sm">Google • Certified 2021</p>

            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
