import React from 'react';
import img from '../../src/profile.jpg'
const Profile = () => {
    return (
        <div>
            <div className='flex flex-col p-3 items-center'>
                <img src={img} alt="rakib" className='w-[100px] rounded-full mr-2' />
                <div>
                    <h4 className='text-xl font-bold'>Md Rakibul Hasan</h4>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p className='ml-2'>Kishoreganj,Bangladesh</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;