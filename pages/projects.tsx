import { useEffect, useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type ProjectsType = {
    title: string,
    description: string,
    image: string,
    link: string,
    category: "web" | "ml" | "open_source" | "game_dev"
}

const projects: ProjectsType[] = [{
    title: "Sarufi Playground",
    description:
        "A community website for people to test bots created with sarufi platform",
    image: "/img/sarufi_playground.png",
    link: "https://playground.sarufi.io/community",
    category: "web"
},
{
    title: "Find Bible Scripture",
    description:
        "A web app to help you find bible reference simply by typing a small story you remember",
    image: "/img/bible-scripture.png",
    link: "https://find-bible-scripture.netlify.app/",
    category: "web"
},
{
    title: "Space Pictures of the Day",
    description:
        "A simple web app utilizing NASA's API to show space pictures and description everyday",
    image: "/img/pic_of_the_day.png",
    link: "https://fredastro-13902.web.app/",
    category: "web"
},
{
    title: "ERP Web Application",
    description:
        "A fully functional ERP Web App built with React and Firebase",
    image: "/img/amjoldan.png",
    link: "http://am-joldan.web.app/",
    category: "web"
},
{
    title: "A Quiz Web App",
    description:
        "A Web Application for testing your knowledge on different categories",
    image: "/img/era_quiz.png",
    link: "https://era-nemd.web.app/",
    category: "web"
},
{
    title: "Named Entity Recognition Model",
    description:
        "An NER Model for spoting out Entities in Swahili texts using Python and Spacy",
    image: "/img/ner.png",
    link: "https://neurotech-hq-swahili-ner-spacy-app-vjem52.streamlit.app/",
    category: "ml"
},
{
    title: "Python Hand Tracking Module",
    description:
        "A Python module for tracking hand on the camera. It uses OpenCV and MediaPipe",
    image: "/img/hand_tracker.png",
    link: "https://github.com/Era360/handTrackerModule",
    category: "open_source"
},
{
    title: "Sarufi Python SDK",
    description:
        "A Python SDK to help you to interact with Sarufi (Chatbot creating platform)",
    image: "/img/sarufi_python.png",
    link: "https://github.com/Era360/sarufi-python-sdk",
    category: "open_source"
},
{
    title: "Help Dog Game",
    description:
        "A simple python game whereby the goal is to help a dog reach the bone faster.",
    image: "/img/help_dog.png",
    link: "https://github.com/Era360/Help-dog-game",
    category: "game_dev"
}
]

function Projects() {
    const [active_filter, setactive_filter] = useState<string>("all")
    const [to_show_data, setto_show_data] = useState<ProjectsType[]>([...projects])
    const filters: Array<{ id: string, title: string }> = [
        { id: "web", title: "Web Apps" },
        { id: "open_source", title: "Open Source Contribution" },
        { id: "ml", title: "Machine Learning" },
        { id: "game_dev", title: "Game Development  " }
    ]

    useEffect(() => {
        if (active_filter === "all") setto_show_data(projects)
        else setto_show_data(projects.filter(item => item.category === active_filter))
    }, [active_filter])

    return (
        <>
            <Head>
                <title>Elia Mkumbo | Projects portfolio page</title>
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
            <div className="h-screen text-gray-900 dark:text-gray-50">
                <h2 className="text-2xl font-bold text-center sm:text-4xl py-7">My Projects</h2>
                <ul className='hidden mx-auto mb-3 sm:flex w-fit'>
                    <li
                        onClick={() => setactive_filter("all")}
                        className={`${active_filter === "all" && "bg-gray-700"} rounded font-semibold px-2 ml-6 cursor-pointer hover:bg-gray-800 transition-all`}>All</li>
                    {
                        filters.map((filter, index) => <li
                            key={index}
                            onClick={() => setactive_filter(filter.id)}
                            className={`${active_filter === filter.id && "bg-gray-700 text-gray-50"} rounded font-semibold px-2 ml-6 cursor-pointer hover:text-gray-50 hover:bg-gray-800 transition-all`}
                        >
                            {filter.title}
                        </li>)
                    }
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[80vh] p-2 sm:p-5 mx-2 sm:mx-16 overflow-y-scroll">
                    {to_show_data.map((project, index) => (
                        <Link
                            href={project.link}
                            target='_blank'
                            id={project.title}
                            key={index}
                            className="h-fit border-2 dark:border dark:border-opacity-20 dark:p-0.5 dark:border-gray-50 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-transform"
                        >
                            <Image src={project.image} width={0} height={0} sizes='100vw' className='w-full rounded-t-lg' alt={project.title} />
                            <div className="p-2 sm:p-4">
                                <h3 className="mb-2 text-xl font-bold sm:text-2xl">{project.title}</h3>
                                <p className="text-gray-800 dark:text-gray-500">{project.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects