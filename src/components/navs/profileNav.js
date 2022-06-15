import React from 'react';
import Image from 'next/image'
import ProfileLogo from '../logos/profileLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const ProfileNav = () => {
    return (
        <div className="navbar bg-gray-900 shadow-sm">
            <div className="flex-1">
                <ProfileLogo />
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <FontAwesomeIcon className='w-6 h-6 text-white' icon={faEllipsisVertical} />
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileNav;