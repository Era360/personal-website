import Head from "next/head"

function CodeActivity() {
    return (<>
        <Head>
            <title>Elia Mkumbo | Code Activity portfolio page</title>
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
        <div className='h-screen text-gray-900 dark:text-gray-50'>
            <h2 className="text-2xl font-bold text-center sm:text-4xl py-7">Coding Activity</h2>
            {/* <h3 className='text-4xl font-semibold'>Coding Activity</h3> */}
            <figure className='w-11/12 mx-auto sm:w-3/4'>
                <embed className='rounded-lg' src="https://wakatime.com/share/@Era360/12b8b8db-73a0-48be-849f-b2c1a91b0d9e.svg"></embed>
            </figure>
        </div>
    </>
    )
}

export default CodeActivity