import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Cactus from './Cactus/Cactus';
import Ferns from './Ferns/Ferns';

export default class Store extends Component {

  render(){

    return(
        <div className="storeBg">
          <h2>Hello {this.props.username}! Welcome to plants!!!</h2>
          <h3 className="subTitlte">Store Page</h3>

          <Link to="/store/cactus">
          <button type="button" className="btn btn-outline-success">Cactus</button>
          </Link>

          <Link to="/store/ferns">
          <button type="button" className="btn btn-outline-success">Ferns</button>
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

          </Switch>  
        </div>
      )
    }
}