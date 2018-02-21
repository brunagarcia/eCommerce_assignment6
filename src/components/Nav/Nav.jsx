import React, { Component } from 'react';
// import Store from '../Store/Store';
// import Home from '../Home/Home';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render(){
    return(
      <nav className="my-2 my-md-0 mr-md-3 box-shadow">
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
      </nav>
    )
  }
}
