/* eslint-disable @next/next/no-img-element */
import { faAndroid, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const HostelMate = () => {
    return (
        <>

            <div className="card w-fit md:max-w-sm bg-base-100 shadow-xl">

                <Link href={"https://hostelmate.vercel.app/"}>
                    <a target={"_blank"}>
                        <figure><img src="images/hostelMateBanner.png" alt="FinSlate" /></figure>
                    </a>
                </Link>

                <div className="card-body p-0 m-0 bg-[#F2F2F2]">
                    <div className='p-2'>
                        <div className='flex justify-between w-full'>
                        <h2 className="card-title">
                            <span className='m-2 text-xl font-merriweather text-gray-900'>HostelMate</span>
                            <div className="badge badge-secondary">NEW</div>
                    
                        </h2>
                        <div className='flex justify-end'>
                        <Link href={"https://github.com/obulareddyveera/hostel-mate"}>
                            <a target={"_blank"} className='btn btn-sm btn-circle'>
                                <FontAwesomeIcon className='w-4 h-4' icon={faGithub} />
                            </a>
                        </Link>
                    </div>
                        </div>
                        <div className="font-roboto m-4 flex justify-center">
                            Hostel service business runs with expenses, someone needs to record and study each expense to keep it healthy.
                        </div>
                        <div className="m-4">
                            <span className='text-2xl font-bold font-dancingScript'>HostelMate</span>
                            <span className='text-md font-merriweather'> is a platform to manage each service expense.</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center items-center'>
                        <Link href={"https://hostelmate.vercel.app/"}>
                            <a target={"_blank"} className='btn btn-sm btn-success text-white m-2'>
                                <FontAwesomeIcon className='w-4 h-4' icon={faSignIn} />
                                <span className='mr-1 ml-1 text-white'>Start <span className='text-gray-900'>Now,</span> use Free</span>
                            </a>
                        </Link>
                        <button className='btn btn-sm btn-info text-white m-2' disabled>
                            <FontAwesomeIcon className='w-4 h-4' icon={faAndroid} />
                            <span className='mr-1 ml-1'>Android</span>
                        </button>
                    </div>
                    <div className="card-actions justify-end border-t-2 border-t-white">
                        <div className='flex flex-wrap w-full p-2 m-2'>
                            <div className="badge badge-primary m-1">Next.js</div>
                            <div className="badge badge-primary m-1">Express.js</div>
                            <div className="badge badge-primary m-1">Prisma (ORM)</div>
                            <div className="badge badge-secondary m-1">planetscale</div>
                            <div className="badge badge-info m-1">React.js</div>
                            <div className="badge badge-info m-1">Redux</div>
                            <div className="badge badge-info m-1">tailwindCSS</div>
                            <div className="badge badge-warning m-1">vercel</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HostelMate;
