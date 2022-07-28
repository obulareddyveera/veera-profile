import React from 'react';
import Image from 'next/image'
import ProfileLogo from '../logos/profileLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const ProfileNav = () => {
    return (
        <div className="navbar bg-gray-900 shadow-sm">
            <div className="flex-1">
                <ProfileLogo />
            </div>
        </div>
    )
}

export default ProfileNav;