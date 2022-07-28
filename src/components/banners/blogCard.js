import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ link, thumbnail, title, categories }) => {
    return (
        <Link href={link} target="_blank" className="card card-compact w-full bg-base-100 shadow-xl">
            <>
            <figure><Image width={"100%"} height={"100%"} src={thumbnail} alt={title} /></figure>
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
        </Link>
    )
}

export default BlogCard;