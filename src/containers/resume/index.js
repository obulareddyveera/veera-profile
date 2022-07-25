import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ResumeHeader from '../../components/banners/resumeHeader';
import ProfileLogo from '../../components/logos/profileLogo';
import ProfileNav from '../../components/navs/profileNav';

const Resume = () => {
    return (
        <div className="w-screen h-screen">
            <div className='p-4 w-full'>
                <ResumeHeader />
            </div>
        </div>
    )
}

export default Resume;