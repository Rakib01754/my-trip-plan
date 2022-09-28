import React from 'react';
import Profile from '../../Profile/Profile';

const Sidebar = () => {
    return (
        <div className='w-12/12 md:w-3/12 lg:w-3/12'>
            <Profile></Profile>
            <div className='m-3 p-2 border-2 rounded-md'>
                <h4 className='font-bold text-xl underline'>About Me</h4>
                <p>
                    My name is Md Rakibul Hasan. I’m a Web Developer and voracious reader who takes solo trips around the country. So far, I have been to 15 districts and have many more trips planned. As a person, exploring is what I do best. Did I mention I’m terrified of flying? I might have picked the wrong hobby! But I’m living proof that you can follow your dreams even if they happen to scare you.
                </p>
            </div>
            <div className='px-3'>
                <h4 className='font-bold text-xl underline'>Add A Trip Break</h4>

                <div className='bg-[#F2F4FA] flex justify-around gap-1 px-2 py-4 border-2 rounded-md mt-3'>
                    <button className='btn btn-outline w-12 h-10 rounded-full'>1D</button>
                    <button className='btn btn-outline w-12 h-10 rounded-full'>2D</button>
                    <button className='btn btn-outline w-12 h-10 rounded-full'>3D</button>
                    <button className='btn btn-outline w-12 h-10 rounded-full'>4D</button>
                    <button className='btn btn-outline w-12 h-10 rounded-full'>5D</button>
                </div>

            </div>
            <div className='px-3'>
                <h4 className='font-bold text-xl underline'>Trip Details</h4>

                <div className='bg-[#F2F4FA] flex justify-around gap-1 px-2 py-4 border-2 rounded-md mt-3'>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;