import React from 'react';
import Saw from './images/Home/saw.jpg';
import Drill from './images/Home/drill.jpg';

const Home = () => {
	return (
		<div className="home">
			<h2>Welcome to Mike's.  We take our decades of experience and passion for woodworking, <br /> along with the highest quality materials to deliver the best products.</h2><br /><br /><br />
			<img src={Saw} alt='saw' /><br />
			<img src={Drill} alt='drill' /><br />
			<h2>We can make anything out of wood.  Our more popular products are cornhole, wooden flags, <br /> end tables and end stands with storage and cup holder.  So browse our gallery and shop and <br /> if what you want
					isn't there don't hesitate to send us an email with detailed information of what you're <br /> looking for and we'll get back with you quickly.</h2>
		</div>
	)
}

export default Home;