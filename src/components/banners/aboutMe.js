import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import config from '../../metadata/config';

const AboutMe = () => {
    return (
        <div className='flex flex-col items-start justify-start mt-4'>
            <div className='flex justify-start'>
                <button className='btn btn-circle btn-sm btn-warning text-white'>
                    <FontAwesomeIcon className='w-4 h-4' icon={faFlask} />
                </button>
                <div className='font-bold border-b-2 font-merriweather text-lg ml-1'>Profile</div>
            </div>
            <div className='flex flex-col items-center justify-center mt-4'>
            {
                config.introduction && config.introduction.map((entity, index) => {
                    return (
                        <p className='font-merriweather m-2' key={`aboutMe_${index}`}>{entity}</p>
                    )
                })
            }
            </div>
        </div>
    )
}

export default AboutMe;
