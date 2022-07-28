/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const BlogCard = ({ link, thumbnail, title, categories }) => {
    return (
        <a href={link} target="_blank" className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={thumbnail} alt={title} /></figure>
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
        </a>
    )
}

export default BlogCard;