import React from 'react';
import Nav from './Nav'

const Header = () => {
    return (
        <div>
            <header>
                <h1 className='name'>Mikes Custom Furniture & more</h1>
                <div className='missionBar'>
                    <h3>We strive to create high quality custom pieces, utilizing the best materials and years of skillful experience in every piece.</h3><br /> <br />
                    <Nav />
                </div>
            </header>
        </ div>
    );
}

export default Header;