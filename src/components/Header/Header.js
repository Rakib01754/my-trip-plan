import React from 'react';
import logo from '../../../src/title.jpg'

const Header = () => {
    return (
        <div>
            <div className="navbar flex items-center border-b-2" >
                <img src={logo} alt="logo" className='w-[120px]' />
                <span className='text-3xl font-bold'>My Trip Plan</span>
            </div>

        </div>
    );
};

export default Header;