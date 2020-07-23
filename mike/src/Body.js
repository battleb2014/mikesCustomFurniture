import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import Shop from './Shop';
import Contact from './Contact';

const Body = () => {
    return (
        <div className='body'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/shop" component={Shop} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/" render={() => <div><h1 className='error'>404</h1></div>} />
            </Switch>
        </div>
    )
}

export default Body;