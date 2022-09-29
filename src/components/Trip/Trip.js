import React, { useEffect, useState } from 'react';

const Trip = ({ updateTime }) => {
    const [breaks, setBreaks] = useState(0)
    const getDays = (day) => {
        localStorage.setItem('break-day', day)
        setBreaks(day);
    }
    useEffect(() => {
        const breakData = localStorage.getItem('break-day')
        if (breakData) {
            setBreaks(breakData)
        }
    }, [])
    const tripBreak = [1, 2, 3, 4, 5];
    return (
        <div>
            <div className='px-3 py-5 bg-white shadow-md'>
                <h4 className='font-bold text-xl underline'>Add A Trip Break</h4>

                <div className='bg-[#F2F4FA] flex justify-around gap-1 px-2 py-4 border-2 rounded-md mt-3 shadow-md'>
                    {
                        tripBreak.map(item => (
                            <button key={item} className='btn btn-outline w-12 h-10 rounded-full' onClick={() => getDays(item)}>{item}D</button>
                        ))
                    }
                </div>

            </div>
            <div className='px-3 py-5 bg-white'>
                <h4 className='font-bold text-xl underline'>Trip Details</h4>

                <div className='bg-[#F2F4FA] gap-1 px-2 py-4 border-2 rounded-md mt-3 shadow-md'>
                    <div className='flex justify-between'>
                        <span className='font-bold'>Total Trip Duration</span>
                        <span><span className='font-bold'>{updateTime}</span> Days</span>
                    </div>
                    <hr className='m-2' />
                    <div className='flex justify-between'>
                        <span className='font-bold'>Total Break Duration</span>
                        <span><span className='font-bold'>{breaks}</span> Days</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Trip;