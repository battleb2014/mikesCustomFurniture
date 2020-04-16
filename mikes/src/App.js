import React from 'react'
import Header from './Header'
import Body from './Body'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
			</Router>
		</div>
	)
}

export default App
