import React, { Component } from 'react';

import Cactus from './Cactus/Cactus';
import Ferns from './Ferns/Ferns';
import Cart from './Cart/Cart';

import { Route, Switch, Link } from 'react-router-dom';

export default class Store extends Component {

  render(){
    console.log(this.props.cactusList + 'Print Store')
    return(
        <div>
          <h2>Store Page</h2>

          <Link to="/store/cactus">
          <button type="button" class="btn btn-outline-success">Cactus</button>
          </Link>

          <Link to="/store/ferns">
          <button type="button" class="btn btn-outline-success">Ferns</button>
          </Link>

          <Link to="/store/cart">
          <i className="fas fa-shopping-basket" />
          </Link>

          <Switch>
            <Route 
              path='/store/cactus' 
              render={() => { 
              return <Cactus 
                      cactusList={this.props.cactusList}
                      addToCart = {this.props.addToCart}
                      />}} 
            />
            
            <Route 
              path='/store/ferns' 
              render={() => { 
              return <Ferns 
                      fernsList={this.props.fernsList}
                      addToCart = {this.props.addToCart}
                      />}} 
            />

            <Route 
              path='/store/cart' 
              render={() => { 
              return <Cart cart={this.props.cart} />}} 
              />

          </Switch>  
        </div>
      )
    }
}