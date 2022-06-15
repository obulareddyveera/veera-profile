import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProfileLogo = () => {
    return (
        <div className='flex text-white'>
            <div className='m-[0.2rem]'>
                <FontAwesomeIcon className='w-6 h-6' icon={faCode} />
            </div>
            <div className='font-dancingScript text-xl font-bold'>Veera</div>
            <div className='font-patrickHand text-[14px] mt-[0.4rem] ml-[0.4rem]'>...Bhargava Reddy. Obulareddy</div>
        </div>
    )
}

export default ProfileLogo;