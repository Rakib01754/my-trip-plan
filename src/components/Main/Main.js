import React, { useEffect, useState } from 'react';
import Faq from '../../Faq/Faq';
import Places from '../Places/Places';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    const [times, setTimes] = useState(0);
    useEffect(() => {
        const storedData = localStorage.getItem('trip-time')
        if (storedData) {
            setTimes(storedData);
        }
    }, [])
    const handleTripTime = (time) => {
        const newTime = parseInt(times) + parseInt(time);
        setTimes(newTime);
        localStorage.setItem('trip-time', newTime)
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row lg:flex-row mt-8 bg-slate-100 '>
                <Places
                    handleTripTime={handleTripTime}
                ></Places>
                <Sidebar updateTime={times}></Sidebar>
            </div>
            <Faq></Faq>
        </div>

    );
};

export default Main;