import React from 'react';
import Places from '../Places/Places';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    return (
        <div className='flex mt-8'>
            <Places></Places>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Main;