import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';



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
				<Router id='lnk' >
					<Link className='link' id='link' to="/" onClick={this.addActiveClass}>
						Home
				</Link>
					<Link className='link' id='link' to="/gallery" onClick={this.addActiveClass}>
						Gallery
				</Link>
					<Link className='link' id='link' to="/shop" onClick={this.addActiveClass}>
						Shop
				</Link>
					<Link className='link' id='link' to="/contact" onClick={this.addActiveClass}>
						Contact Us
				</Link>
				</Router>
			</div>
		);
	}
};

export default Navbar;
