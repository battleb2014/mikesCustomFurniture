import React from 'react';
import { Link } from 'react-router-dom';



class Navbar extends React.Component {

	constructor() {
		super();
		this.state = {
			className: 'link'
		}
		this.addActiveClass = this.addActiveClass.bind(this);
	}

	addActiveClass() {
		this.setState({ className: 'link, active' });
	}


	render() {
		return (
			<div className="navBar" >
				<Link className='link' id='link' to="/" >
					Home
				</Link>
				<Link className='link' id='link' to="/gallery" >
					Gallery
				</Link>
				<Link className='link' id='link' to="/shop" >
					Shop
				</Link>
				<Link className='link' id='link' to="/contact" >
					Contact Us
				</Link>
			</div>
		);
	}
};

export default Navbar;
