import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const EducationSnap = () => {
    return (
        <div className='grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 m-4 p-4'>
            <div className='col-start-1 col-end-8 flex'>
                <button className='btn btn-sm btn-circle ml-1 mr-1'>
                    <FontAwesomeIcon className='w-4 h-4' icon={faUniversity} />
                </button>
                <div className='flex flex-col justify-start items-start ml-1 mr-1'>
                    <div className='text-xl font-bold font-merriweather mt-1'>SRI VENKATESWARA UNIVERSITY - <span className='text-sm pl-1'>Tirupati, Andhra Pradesh, India</span></div>
                    <div className='text-sm font-bold font-merriweather mt-1'>Bachelor of Technology</div>
                    <div className='text-sm font-bold font-merriweather mt-1'>Computer Science Engineering</div>
                </div>
            </div>
            {/* <div className='col-start-9 col-end-13 flex justify-center'>
                <div className='text-sm font-bold font-merriweather mt-1'>2001 - 2005</div>
            </div> */}
        </div>
    )
}

export default EducationSnap;