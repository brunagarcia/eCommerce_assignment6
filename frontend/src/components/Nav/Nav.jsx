import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';


export default class Nav extends Component {
  render(){
    return(
      <nav className="navbar my-2 my-md-0 mr-md-3 box-shadow">

        <Link to="/" className="nav-link" href="#">
          <span className="p-2 text-dark">
            Home
          </span>
        </Link>

        <Link to="/store" className="nav-link" href="#">
          <span className="p-2 text-dark">
            Store
          </span>
        </Link>

        <Link to="/cart">
          <i className="fas fa-shopping-basket" />
        </Link>
      </nav>
    )
  }
}
