import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<div className="navBar">
			<Router>
				<Link className="link" to="/">
					Home
				</Link>
				<Link className="link" to="/gallery">
					Gallery
				</Link>
				<Link className="link" to="/order">
					Order
				</Link>
				<Link className="link" to="/contact">
					Contact Us
				</Link>
			</Router>
		</div>
	);
};

export default Navbar;
