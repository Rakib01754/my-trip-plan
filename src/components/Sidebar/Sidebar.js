import React from 'react';
import img from '../../../src/profile.jpg'

const Sidebar = () => {
    return (
        <div className='w-12/12 md:w-3/12 lg:w-3/12'>
            <div className='flex flex-col p-3 items-center'>
                <img src={img} alt="rakib" className='w-[80px] rounded-full mr-2' />
                <div>
                    <h4 className='text-xl font-bold'>Md Rakibul Hasan</h4>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p className='ml-2'>Kishoreganj,Dhaka</p>
                    </div>
                </div>

            </div>
            <div className='p-3'>
                <h4 className='font-bold text-xl underline'>About Me</h4>
                <p>
                    My name is Md Rakibul Hasan. I’m a Web Developer and voracious reader who takes solo trips around the country. So far, I have been to 15 districts and have many more trips planned. As a person, exploring is what I do best. Did I mention I’m terrified of flying? I might have picked the wrong hobby! But I’m living proof that you can follow your dreams even if they happen to scare you.
                </p>
            </div>
        </div>
    );
};

export default Sidebar;