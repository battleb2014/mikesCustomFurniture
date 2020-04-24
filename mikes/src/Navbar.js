import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';



const Navbar = () => {
	return (
		<div className="navBar">
			<Router>
				<Link id='link' to="/">
					Home
				</Link>
				<Link id='link' to="/gallery">
					Gallery
				</Link>
				<Link id='link' to="/shop">
					Shop
				</Link>
				<Link id='link' to="/contact">
					Contact Us
				</Link>
			</Router>
		</div>
	);
};

export default Navbar;
