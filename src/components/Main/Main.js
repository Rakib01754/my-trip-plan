import React from 'react';
import Places from '../Places/Places';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row mt-8 bg-slate-100 '>
            <Places></Places>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Main;