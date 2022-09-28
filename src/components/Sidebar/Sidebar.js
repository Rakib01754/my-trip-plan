import React from 'react';
import Profile from '../../Profile/Profile';
import About from '../About/About';
import Trip from '../Trip/Trip';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({ updateTime }) => {
    const notify = () => toast("Wow!! Finally Trip Completed!");
    return (
        <div className='w-12/12 md:w-4/12 lg:w-4/12'>
            <Profile></Profile>
            <About></About>
            <Trip updateTime={updateTime}></Trip>
            <button className='btn btn-outline mt-4' onClick={notify}>Trip Complete</button>
            <ToastContainer />

        </div>
    );
};

export default Sidebar;