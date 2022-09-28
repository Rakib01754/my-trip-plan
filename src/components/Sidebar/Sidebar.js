import React from 'react';
import Profile from '../../Profile/Profile';
import About from '../About/About';
import Trip from '../Trip/Trip';

const Sidebar = () => {
    return (
        <div className='w-12/12 md:w-3/12 lg:w-3/12'>
            <Profile></Profile>
            <About></About>
            <Trip></Trip>

        </div>
    );
};

export default Sidebar;