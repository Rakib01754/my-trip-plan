import React from 'react';
import Profile from '../../Profile/Profile';
import About from '../About/About';
import Trip from '../Trip/Trip';

const Sidebar = ({ updateTime }) => {
    return (
        <div className='w-12/12 md:w-3/12 lg:w-3/12'>
            <Profile></Profile>
            <About></About>
            <Trip updateTime={updateTime}></Trip>
            <button className='btn btn-outline mt-3'>Trip Complete</button>

        </div>
    );
};

export default Sidebar;