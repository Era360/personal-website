import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

function Projects() {

    const projects = [
        {
            title: "Sarufi Playground",
            description:
                "A community website for people to test bots created with sarufi platform",
            image: "/img/sarufi_playground.png",
            link: "https://playground.sarufi.io/community",
        },
        {
            title: "ERP Web Application",
            description:
                "A fully functional ERP Web App built with React and Firebase",
            image: "/img/amjoldan.png",
            link: "http://am-joldan.web.app/",
        },
        {
            title: "A Quiz Web App",
            description:
                "A Web Application for testing your knowledge on different categories",
            image: "/img/era_quiz.png",
            link: "https://era-nemd.web.app/",
        },
        {
            title: "Named Entity Recognition Model",
            description:
                "An NER Model for spoting out Entities in Swahili texts using Python and Spacy",
            image: "/img/sarufi_playground.png",
            link: "https://example.com/project-2",
        }
    ];

    return (
        <>
            <Head>
                <title>Elia Mkumbo | Projects page</title>
                <meta name="description" content="Projects page for Elia Mkumbo's Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-screen">
                <h2 className="text-4xl font-bold text-center py-8">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[80vh] p-5 mx-16 overflow-y-scroll">
                    {projects.map((project, index) => (
                        <a
                            href={project.link}
                            target='_blank'
                            key={index}
                            className="border-2 dark:border-none rounded-lg hover:shadow-xl hover:-translate-y-2 transition-transform"
                        >
                            <Image src={project.image} width={0} height={0} sizes='100vw' className='w-full' alt={project.title} />
                            <div className="p-4">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects