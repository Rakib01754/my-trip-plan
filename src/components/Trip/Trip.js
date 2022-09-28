import React from 'react';

const Trip = () => {
    return (
        <div>
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

                <div className='bg-[#F2F4FA] gap-1 px-2 py-4 border-2 rounded-md mt-3'>
                    <div className='flex justify-between'>
                        <span className='font-bold'>Total Trip Duration</span>
                        <span>Days</span>
                    </div>
                    <hr className='m-2' />
                    <div className='flex justify-between'>
                        <span className='font-bold'>Total Break Duration</span>
                        <span>Days</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Trip;