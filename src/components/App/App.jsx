import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Store from '../Store/Store'
import Home from '../Home/Home'
import Nav from '../Nav/Nav'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="my-0 mr-md-auto font-weight-normal">Plants Store</h1>
          <Nav />
        </header>

        <Switch>
          <Route exact path='/' render={ () => {return <Home />}} />,
          <Route path='/store' render={ () => {return <Store />}} />
        </Switch>
      </div>
    );
  }
}

export default App;
