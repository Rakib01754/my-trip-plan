import React from 'react';
import logo from '../../../src/title.jpg'

const Header = () => {
    return (
        <div>
            <div className="navbar flex items-center border-b-2" >
                <img src={logo} alt="logo" className='w-[120px]' />
                <span className='text-4xl font-bold mt-3 ml-2'>My Trip Plan</span>
            </div>

        </div>
    );
};

export default Header;