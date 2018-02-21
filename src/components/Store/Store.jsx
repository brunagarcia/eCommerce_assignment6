import React, { Component } from 'react';

import Cactus from './Cactus/Cactus';
import Ferns from './Ferns/Ferns';
import Shop from './Shop/Shop';

import { Route, Switch, Link } from 'react-router-dom';

export default class Store extends Component {
  render(){
    return(
      <div>
        <h2>Store Page</h2>
        
        <Link to="/store/cactus">
        <button type="button" class="btn btn-outline-success">Cactus</button>
        </Link>

        <Link to="/store/ferns">
        <button type="button" class="btn btn-outline-success">Ferns</button>
        </Link>

        <Link to="/store/shop">
        <i className="fas fa-shopping-basket" />
        </Link>

        <Switch>
          <Route path='/store/cactus' render={() => { 
          return <Cactus />}} />
          
          <Route path='/store/ferns' render={() => { 
          return <Ferns />}} />

          <Route path='/store/shop' render={() => { 
          return <Shop />}} />
        </Switch>  
      </div>
    )
  }
}