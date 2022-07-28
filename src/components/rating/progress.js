import React from 'react';

const Progress = ({ type = "success", label, rating, value }) => {
    const progressClass = `progress progress-${type} w-56 mt-3 mr-1`;

    return (
        <div className='grid grid-rows-1 grid-cols-2 border-t-2 border-t-white p-2'>
            <div className='font-patrickHand'>{label}</div>
            <div className='flex'>
            <progress
                className={progressClass}
                value={rating * 10}
                max="100"
            ></progress>
            <button className={`btn btn-${type} btn-sm btn-circle text-white`}>{value}</button>
            </div>
        </div>
    )
}

export default Progress;