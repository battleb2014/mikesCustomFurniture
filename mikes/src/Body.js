import React from 'react';
import Home from './Home';
import Gallery from './Gallery';
import Shop from './Shop';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Body = () => {
    return (
        <div className='main'>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/gallery" exact component={Gallery}></Route>
                    <Route path="/shop" exact component={Shop}></Route>
                    <Route path="/contact" exact component={Contact}></Route>
                    <Route path="/" render={() => <div><h1 className='error'>404</h1></div>}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Body;