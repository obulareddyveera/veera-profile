/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import { faBlogger, faGithub, faInternetExplorer, faLinkedin, faLinkedinIn, faMedium, faWeebly } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faFilePdf, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import ProfileLogo from '../logos/profileLogo';

const ResumeHeader = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center mt-4 border-b-2 border-b-white'>
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src="/images/profile.jpeg" alt="Veera Reddy" />
                    </div>
                </div>
                <div className='w-full border-t-2 border-t-white pt-2'></div>
                <div className='flex justify-center items-center m-2'>
                    <a href="https://www.cakeresume.com/s--8MD7uD0_FMzCKjO3h-nygQ--/veera-obulareddy" target="_blank" className='btn btn-sm'>
                        <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
                        <span className='m-1'>Resume</span>
                    </a>
                </div>
                <div className='grid grid-rows-2 grid-cols-2 gap-2'>
                    <a href="https://medium.com/@obulareddyveera" target="_blank" className="btn btn-sm btn-warning">
                        <FontAwesomeIcon icon={faMedium} className="w-3 h-3 m-1" />
                        <span className='m-1'>Medium</span>
                    </a>
                    <a href="/blog" className="btn btn-sm btn-primary">
                        <FontAwesomeIcon icon={faBlogger} className="w-3 h-3 m-1" />
                        <span className='m-1'>Blog</span>
                    </a>
                    <a href="https://github.com/obulareddyveera" target="_blank" className="btn btn-sm btn-secondary">
                        <FontAwesomeIcon icon={faGithub} className="w-3 h-3 m-1" />
                        <span className='m-1'>Github</span>
                    </a>
                    <a href="https://www.linkedin.com/in/veera-obulareddy-5955561a1/" target="_blank" className="btn btn-sm btn-info text-white">
                        <FontAwesomeIcon icon={faLinkedin} className="w-3 h-3 m-1" />
                        <span className='m-1'>Linked-In</span>
                    </a>
                </div>
                <div><ProfileLogo color={'text-gray-900'} /></div>
                <div className='font-patrickHand'>+91-8105555322</div>
                <div className='font-patrickHand'>obulareddy.veera@gmail.com</div>
                <div className='flex justify-center w-full'>
                    <div>
                        <FontAwesomeIcon className='w-4 h-4' icon={faMapLocationDot} />
                    </div>
                    <div className='ml-2 font-patrickHand'>Bangalore</div>
                </div>
            </div>
        </>
    )
}

export default ResumeHeader