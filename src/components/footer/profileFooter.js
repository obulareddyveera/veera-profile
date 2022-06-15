import React from 'react';
import ProfileLogo from '../logos/profileLogo';

const ProfileFooter = () => {
    return (
        <footer className="bg-gray-900">
            <div className="px-4 py-8 mx-auto sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-teal-300 sm:justify-start">
                        <ProfileLogo />
                    </div>
                    <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
                        Copyright &copy; 2022. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default ProfileFooter;