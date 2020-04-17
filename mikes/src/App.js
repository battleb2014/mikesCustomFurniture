import React from 'react';
import Header from './Header';
import Home from './Home';
import Gallery from './Gallery';
import Shop from './Shop';
import Contact from './Contact';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Route path="/" component={Home} />
				<Route path="/gallery" component={Gallery}></Route>
				<Route path="/shop" component={Shop}></Route>
				<Route path="/contact" component={Contact}></Route>
			</BrowserRouter>
		</div>
	)
}

export default App
