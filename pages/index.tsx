import TypingAnimation from '@/components/typing'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elia Mkumbo | Home portfolio page</title>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="I am a web developer who specializes in creating web applications with React, Next.js, HTML, and CSS. I also have experience with Python, TypeScript, Scikit-learn, and Spacy for machine learning and NLP tasks. Visit my portfolio to learn more about my work and experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Facebook tags */}
        <meta property="og:title" content="Elia Mkumbo&#39;s Portfolio - Web Development &amp; Machine Learning" />
        <meta property="og:description" content="I am a web developer who specializes in creating web applications with React, Next.js, HTML, and CSS. I also have experience with Python, TypeScript, Scikit-learn, and Spacy for machine learning and NLP tasks. Visit my portfolio to learn more about my work and experience." />
        <meta property="og:image" content="/img/social_preview.jpg" />
        <meta property="og:url" content="https://www.mkumboelia.netlify.app" />
        <meta property="og:type" content="website" />
        {/* End Facebook tags */}
        {/* Twitter tags */}
        <meta name="twitter:creator" content="Elia Mkumbo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Elia Mkumbo&#39;s Portfolio - Web Development &amp; Machine Learning" />
        <meta name="twitter:description" content="I am a web developer who specializes in creating web applications with React, Next.js, HTML, and CSS. I also have experience with Python, TypeScript, Scikit-learn, and Spacy for machine learning and NLP tasks. Visit my portfolio to learn more about my work and experience." />
        <meta property="twitter:image" content="/img/social_preview.jpg" />
        {/* End Twitter tags */}
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-sm mx-auto text-center sm:max-w-5xl">
          <div className='relative mx-auto border-2 border-gray-900 rounded-full w-fit dark:border-gray-50'>
            <h3 className="absolute bottom-0 left-0 right-0 mx-auto mt-2 font-bold translate-y-1 rounded text-md bg-gray-950 text-gray-50">Elia Mkumbo</h3>
            <Image src='/img/elia.jpg' alt='Elia Profile' width={0} height={0} sizes='100vw' className='w-32 h-32 mx-auto rounded-full sm:w-44 sm:h-44' />
          </div>
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-5xl dark:text-gray-50 sm:mb-8">I&#39;m a <TypingAnimation messages={['  Python', ' Typescript', ' Javascript', ' Machine Learning']} /> Developer</h1>
          <p className="mb-12 text-lg text-gray-700 sm:text-2xl dark:text-gray-400">I specialize in web development using React and Next.js, and I&#39;m also skilled in machine learning with scikit-learn and NLP with Spacy.</p>
          <div className='space-y-2'>
            <Link href="/projects" className="block px-5 py-2 mx-auto bg-blue-500 rounded w-fit text-gray-50 sm:px-8 hover:bg-blue-700">View My Projects</Link>
            <Link href="/activity" className="block px-5 py-2 mx-auto bg-gray-700 rounded w-fit text-gray-50 sm:px-8 hover:bg-blue-700">View My Code Activity</Link>
          </div>
          <div className="flex items-center justify-center mt-12">
            <Link href="https://github.com/Era360" target='_blank' className="mr-16 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/elia-mkumbo-799336213/" target='_blank' className="mr-16 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </Link>
            <Link href="https://twitter.com/eliah_mkumbo" target='_blank' className="text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
