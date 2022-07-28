/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ link, thumbnail, title, categories }) => {
    console.log('--=  thumbnail ', thumbnail);
    return (
        <Link href={link}>
            <a target="_blank" className="card card-compact w-full bg-base-100 shadow-xl">
                <>
                    <figure>
                        <img
                            src={thumbnail} 
                            alt={title}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>

                    </div>
                    {
                        categories && (<div className="alert alert-default m-0">
                            <div>
                                <span className='text-sm font-bold font-merriweather'>{categories.join(',')}</span>
                            </div>
                        </div>)
                    }
                </>
            </a>
        </Link>
    )
}

export default BlogCard;