/* eslint-disable @next/next/no-img-element */
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faFlask, faTableList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import ProfileLogo from '../logos/profileLogo';

const GithubBanner = () => {
    return (
        <div
            className="bg-right bg-fixed top-0 left-20 h-fit bg-[url('/images/bg_ededed.png')] bg-no-repeat"
            style={{ backgroundSize: 'cover' }}
        >
            <div className='flex w-full h-full justify-center'>
            <div className="w-full p-2 rounded lg:w-1/3">
                <img className="w-full h-full" src="/images/gitReposBookmark.png" alt="image" />
            </div>
            </div>
            <div className='pb-[6rem] md:pb-0'>
                <div className='max-w-full md:max-w-[50vw] p-4'>
                    <a className="relative block p-8 border border-gray-100 shadow-xl rounded-xl bg-white" href="">
                        <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                            4.3
                        </span>

                        <div className="mt-4 text-gray-500 sm:pr-8">
                            <FontAwesomeIcon icon={faFlask} className="w-6 h-6" />

                            <h5 className="mt-4 text-xl font-bold text-gray-900">Science of Chemstry</h5>

                            <p className="hidden mt-2 text-sm sm:block">
                                You can manage phone, email and chat conversations all from a single mailbox.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GithubBanner;