import { faGithub, faInternetExplorer, faMedium, faWeebly } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ProfileLogo from '../logos/profileLogo';

const ResumeHeader = () => {
    return (
        <>
            <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 border-t-1 border-b-2'>
                <div className='pb-2'>
                    <div><ProfileLogo color='text-black' /></div>
                    <div className='ml-4 font-patrickHand'>+91-8105555322</div>
                    <div className='ml-4 font-joan'>obulareddy.veera@gmail.com</div>
                </div>
                <div className='flex flex-col justify-center md:justify-end border-t-1 md:border-t-0'>
                    <div className='flex justify-center md:justify-end border-t-1 md:border-t-0'>
                        <button className="btn btn-sm m-1 btn-circle">
                            <FontAwesomeIcon icon={faInternetExplorer} className="w-4 h-4 m-1" />
                        </button>
                        <button className="btn btn-sm m-1 btn-circle">
                            <FontAwesomeIcon icon={faFilePdf} className="w-4 h-4 m-1" />
                        </button>
                    </div>
                    <div className='flex justify-center md:justify-end border-t-1 md:border-t-0'>
                        <button className="btn btn-sm m-1">
                            <FontAwesomeIcon icon={faMedium} className="w-4 h-4 m-1" />
                            <span className='m-1'>Medium</span>
                            <div className="badge badge-success">3</div>
                        </button>

                        <button className="btn btn-sm m-1">
                            <FontAwesomeIcon icon={faGithub} className="w-4 h-4 m-1" />
                            <span className='m-1'>Github</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResumeHeader