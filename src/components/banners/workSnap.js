import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React from 'react';

import Config from '../../metadata/config'
const WorkSnap = () => {

    const getMonthYear = (date) => {
        return (
            <div>
                {date ? (<>
                    <span className='text-gray-700 font-dancingScript font-bold'>{moment(date).format('MMM')} </span>
                    <span className='text-gray-800 font-dancingScript font-bold'>{moment(date).format('YYYY')}</span>
                </>) : (
                    <span className='text-gray-900 font-dancingScript font-bold'>Till Date</span>
                )}
            </div>
        )
    }
    const getTotalExpPerSlot = (startDate, endDate) => {
        const given = moment(startDate);
        const current = moment(endDate || new Date());

        return (
            <div>
                <span className='text-gray-500 font-dancingScript font-bold'>{Math.round((current.diff(given, 'months') / 12) * 10) / 10}</span>
                <span className='text-gray-400 font-dancingScript font-bold'> years</span>
            </div>
        )
    }
    const getTotalExp = (payload) => {
        let totalExpByMonth = 0;
        payload.forEach(entity => {
            const given = moment(entity.start);
            const current = moment(entity.end || new Date());
            totalExpByMonth = totalExpByMonth + current.diff(given, 'months');
        })

        return (
            <div>
                <span className='text-gray-500 font-dancingScript font-bold'>{Math.round((totalExpByMonth / 12) * 10) / 10}</span>
                <span className='text-gray-400 font-dancingScript font-bold'> years</span>
            </div>
        )

    }

    return (
        <div className='flex flex-col m-4'>
            {
                Config && Config.workExp.map((entity, index) => {

                    return (
                        <div key={`workSnap${index}`} className="grid grid-cols-12 gap-4 mt-4">
                            <div className="col-start-1 col-span-9">
                                <div className='grid grid-cols-1 grid-rows-1 md:grid-rows-2'>
                                    <div className='flex'>
                                        <button className='btn btn-sm btn-circle mr-1'>
                                            <FontAwesomeIcon className='w-4 h-4' icon={entity.icon} />
                                        </button>
                                        <div className='flex flex-col md:flex-row justify-around mb-2'>
                                            <div className='text-xl font-bold font-merriweather mt-1 ml-1'>{entity.name},</div>
                                            <div className='text-sm font-bold font-merriweather mt-2 ml-2'>{entity.role}</div>
                                        </div>
                                    </div>
                                    <div className='text-sm font-merriweather mt-1 hidden md:flex'>{entity.desc}</div>
                                </div>
                            </div>
                            <div className="col-start-10 col-end-13">
                                <div className='grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 md:gap-4'>
                                    <div>{getMonthYear(entity.start)}</div>
                                    <div>{getMonthYear(entity.end)}</div>
                                    <div>{getTotalExpPerSlot(entity.start, entity.end)}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="grid grid-cols-12 gap-4 pt-4 pb-4">
                <div className="col-start-10 col-end-13 md:col-start-12 border-t-2 border-t-white">
                    <div>{getTotalExp(Config.workExp)}</div>
                </div>
            </div>
        </div>
    )
}

export default WorkSnap;
