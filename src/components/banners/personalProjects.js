import { faAndroid, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PersonalProjects = () => {
    return (
        <>

            <div className="card w-fit md:max-w-sm bg-base-100 shadow-xl">
                <figure><img src="images/finSlate.png" alt="FinSlate" /></figure>
                <div className="card-body p-0 m-0 bg-[#F2F2F2]">
                    <div className='p-2  m-2'>
                        <h2 className="card-title">
                            <span className='m-2 text-xl font-merriweather text-gray-900'>FinSlate</span>
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='m-2 text-sm font-merriweather text-gray-900'>Slate your expenses by event/type/program and use, share, group your expenses.</p>
                    </div>
                    <div className='flex justify-end'>
                        <button className='btn btn-sm btn-circle m-2'>
                            <FontAwesomeIcon className='w-4 h-4' icon={faGithub} />
                        </button>
                    </div>
                    <div className='flex flex-wrap justify-center items-center'>
                        <button className='btn btn-sm btn-success text-white m-2'>
                            <FontAwesomeIcon className='w-4 h-4' icon={faSignIn} />
                            <span className='mr-1 ml-1 text-white'>Start <span className='text-gray-900'>Now,</span> use Free</span>
                        </button>
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

export default PersonalProjects;
