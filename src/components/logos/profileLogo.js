import React from 'react';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const ProfileLogo = ({ color = "text-white" }) => {
    return (
        <Link href="/">
            <a>
            <div className={`flex t w-full ${color}`}>
                <div className='m-[0.2rem]'>
                    <FontAwesomeIcon className='w-6 h-6' icon={faCode} />
                </div>
                <div className='font-dancingScript text-xl font-bold'>Veera</div>
                <div className='font-patrickHand text-[14px] mt-[0.4rem] ml-[0.4rem]'>...Bhargava Reddy. Obulareddy</div>
            </div>
            </a>
        </Link>
    )
}

export default ProfileLogo;