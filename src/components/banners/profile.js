import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faTableList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ProfileLogo from '../logos/profileLogo';

const ProfileBanner = () => {
    return (
        <section className="text-white bg-gray-900">
        <div className='flex justify-center'>
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
                    <div className="block h-full p-4 mt-2 border border-gray-700 rounded-lg hover:border-pink-600">
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
        </section>
    )
}

export default ProfileBanner;