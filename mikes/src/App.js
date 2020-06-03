import React from 'react';
import Header from './Header';
import Home from './Home';
import Gallery from './Gallery';
import Shop from './Shop';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router className='main'>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/gallery" component={Gallery} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/" render={() => <div><h1 className='error'>404</h1></div>} />
			</Switch>
			<Footer />
		</Router>

	)
}

export default App
