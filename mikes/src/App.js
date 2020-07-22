import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router className='main'>
            <Header />
            <Body />
            <Footer />
        </Router>

    )
}

export default App
