import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                <h1>Mike's Custom Furniture & more</h1>
                <Navbar />
            </div>
        </div>
    );
}

export default Header;