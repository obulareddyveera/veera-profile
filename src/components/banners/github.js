import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faTableList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ProfileLogo from '../logos/profileLogo';

const GithubBanner = () => {
    return (
        <div
            className="bg-right bg-fixed top-0 left-20 md:h-[80vh] bg-[url('/images/github-projects-info-mobile.png')] md:bg-[url('/images/github-projects-info.png')] bg-no-repeat"
            style={{ backgroundSize: 'cover' }}
        >
            <div className='pb-[6rem] md:pb-0'>
            <div className='max-w-full md:max-w-[50vw] p-4'>
                <div className="block p-8 bg-gray-900 border border-gray-800 shadow-xl rounded-xl font-joan">
                    <div className='flex'>
                        <FontAwesomeIcon className='w-10 h-10 text-blue-400 mr-2' icon={faTableList} />
                        <h3 className="mt-3 text-xl font-bold text-white">Todo</h3>
                    </div>
                    <div className="m-4 text-gray-300 text-lg">
                        This application is developed to record notes.
                    </div>
                    <div className="m-4 text-gray-300 text-sm">
                        The application uses Next.js framework with PlanetScale database-as-a-service platform and Prisma ORM library to handle data manuplations.
                        The application UI is powered with React.js, tailwindcss added by server-side rendering technique.
                        The applications supports Google authentication. The application is deployed at vercel cloud platform.
                    </div>
                    <div className="mt-1 text-xs font-medium text-gray-300">
                        <div className="badge badge-primary m-1">Node.JS</div>
                        <div className="badge badge-secondary m-1">Next.JS</div>
                        <div className="badge badge-ghost m-1">Planetscale Database</div>
                        <div className="badge badge-ghost m-1">Prisma ORM</div>
                        <div className="badge badge-accent m-1">React.JS</div>
                        <div className="badge badge-accent m-1">React Context</div>
                    </div>
                </div>
            </div>

            <div className='max-w-full md:max-w-[50vw] p-4'>
                <article className="p-4 bg-gray-800 border border-gray-700 rounded-xl font-joan">
                    <div className="w-full grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2">
                        <ProfileLogo />
                        <div className='flex justify-center md:justify-end w-full mb-2'>
                            <a href="https://github.com/obulareddyveera" rel="noreferrer" target="_blank" className="btn btn-circle btn-sm mr-1 ml-1">
                                <FontAwesomeIcon className='w-4 h-4' icon={faGithub} />
                            </a>
                            <a href="https://twitter.com/ObulareddyVeera" rel="noreferrer" target="_blank" className="btn btn-circle btn-sm mr-1 ml-1">
                                <FontAwesomeIcon className='w-4 h-4' icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                    <div className="text-lg font-medium text-gray-300 m-4">
                        I have strong focus on javascript based web applications development.
                        I have proven experience in adopting new technology to meet customer needs.
                        I enjoys bringing value to clients via JavaScript-driven applications.
                    </div>
                    <div className="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600">
                        <h5 className="font-medium text-white">Back-end Development</h5>
                        <div className="mt-1 text-xs font-medium text-gray-300">
                            <div className="badge badge-primary m-1">Node.JS</div>
                            <div className="badge badge-secondary m-1">Express.JS</div>
                            <div className="badge badge-accent m-1">Gatsby.JS</div>
                            <div className="badge badge-ghost m-1">Next.Js</div>
                        </div>
                    </div>
                    <div className="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600">
                        <h5 className="font-medium text-white">Front-end Development</h5>
                        <div className="mt-1 text-xs font-medium text-gray-300">
                            <div className="badge badge-primary m-1">HTML5</div>
                            <div className="badge badge-secondary m-1">CSS3, Bootstrap v4-5, Tailwindcss</div>
                            <div className="badge badge-accent m-1">React.JS</div>
                            <div className="badge badge-ghost m-1">Redux, Mobx</div>
                        </div>
                    </div>
                </article>
            </div>
            </div>
        </div>
    )
}

export default GithubBanner;