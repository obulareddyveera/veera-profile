import { faBars, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProfileNav = () => {
    return (
        <header className="bg-gray-900 shadow-sm">
            <div className="max-w-screen-xl p-4 mx-auto">
                <div className="flex items-center justify-between space-x-4 lg:space-x-10">
                    <div className="flex lg:w-0 lg:flex-1">
                        <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>
                    </div>

                    <nav className="hidden space-x-8 text-sm font-medium md:flex">
                        <a className="text-gray-500" link="">About</a>
                        <a className="text-gray-500" link="">Blog</a>
                        <a className="text-gray-500" link="">Projects</a>
                        <a className="text-gray-500" link="">Contact</a>
                    </nav>

                    <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                        <a
                            className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
                            link=""
                        >
                            Log in
                        </a>

                        <a
                            className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
                            link=""
                        >
                            Sign up
                        </a>
                    </div>

                    <div className="lg:hidden">
                        <button className="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
                            <span className="sr-only">Open menu</span>
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewbox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 6h16M4 12h16M4 18h16"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default ProfileNav;