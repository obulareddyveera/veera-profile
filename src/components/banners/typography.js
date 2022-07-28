import React from 'react';

const Typography = ({type, text}) => {
    return (
        <div className='text-sm text-center font-patrickHand p-2'>
            <div className='m-2'>{text}</div>
            <div className='w-full border-t-2 border-t-white pt-2'></div>
        </div>
    )
}

export default Typography;
