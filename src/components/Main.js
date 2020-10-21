import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BooksList from './BooksList';
import CartList from './CartList';
import NotFound from './NotFound';

const Main = () => {
    return(
        <Switch>
              <Route exact path = '/' component = {BooksList}/>
              <Route path = '/cartList' component = {CartList}/>
              <Route component = { NotFound } />
        </Switch>
    )
}

export default Main;