import React from 'react';
import OSUCornhole from './images/Gallery/osu cornhole.jpg';
import Cornhole from './images/Gallery/steelers cornhole.jpg';
import PatFlag from './images/Gallery/patriotic flag.jpg';
import Flag from './images/Gallery/wooden flag.jpg';
import Harley from './images/Gallery/harley table.jpg';
import OSUTable from './images/Gallery/osu table.jpg';
import SportsTable from './images/Gallery/sports end stands.jpg';
import NamePlaque from './images/Gallery/name plaque.jpg';
import SportsPlaque from './images/Gallery/sports plaque.jpg';

const Gallery = () => {
    return (
        <div className='gallery'>
            <h2>Here are just some of the custom pieces we've done for customers!!</h2>
            <img src={OSUCornhole} alt='OSU cornhole' /><br />
            <img src={Cornhole} alt='Steelers cornhole' /><br />
            <img src={PatFlag} alt='Patriotic flag' /><br />
            <img src={Flag} alt='Wooden flag' /><br />
            <img src={Harley} alt='Harley table' /><br />
            <img src={OSUTable} alt='OSU table' /><br />
            <img src={SportsTable} alt='Sports table' /><br />
            <img src={NamePlaque} alt='Name plaque' /><br />
            <img src={SportsPlaque} alt='Sports plaque' /><br />
        </div>
    );
}

export default Gallery;