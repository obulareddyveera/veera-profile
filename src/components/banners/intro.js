import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const IntroBanner = () => {
    return (
        <section className="text-white bg-gray-900">
            <div className="max-w-screen-xl px-4 py-32 mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="avatar">
                        <div className="w-24 mask mask-hexagon">
                            <Image width={"100%"} height={"100%"} src="/images/profile.jpeg" />
                        </div>
                    </div>
                    <h4 className="font-dancingScript text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                        Javascript Full-Stack Developer.
                    </h4>
                    <p className="font-patrickHand sm:block text-xs">
                        Node.js (Backend) + React.JS (FrontEnd)
                    </p>
                    <p className="font-dancingScript max-w-xl mx-auto mt-4 sm:leading-relaxed text-md sm:text-xl">
                        Technically highly motivated web-application developer.
                    </p>
                    <p className='font-patrickHand'>
                        I am skilled at Javascript with Node.js platform based Express.js, Next.js, Gatsby, GraphQL server side frameworks, along with HTML5, CSS3, bootstrap V4-5, materializedCSS, tailwindcss, react.js, redux, mobx front end skills.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <button className='btn btn-primary btn-sm'>
                            <span> <FontAwesomeIcon className='w-3 h-3 mr-1' icon={faDownload} /> </span> Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroBanner;