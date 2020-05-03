import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Body />
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
