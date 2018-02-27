import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import axios from 'axios';
import logo from './logo.png';
import './App.css';

import Store from '../Store/Store';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Cart from '../Cart/Cart';

class App extends Component {
  constructor(props){
    super(props)

    //Storage within the constructor because ComponentWillMount is not valid.
    let name = JSON.parse(localStorage.getItem('username'));

    this.state = {
      username: name,
      cart: []
    }
  }

//Component will mount and call the the api from Node server.
  componentWillMount(){
    axios.get('http://localhost:8080/getcart')
      .then((response) => {
        console.log(response)
        this.setState({
          cart: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

//Component Updated by the post request.
  componentDidUpdate(){
    axios.post('http://localhost:8080/setcart', 
    this.state.cart
    
    )
    .then((response) => {
      console.log(response);   
      })

      .catch((error) => {
        console.log(error);
      });  
    }


//Adding to cart ==> 
  addToCart = (item) => {
    console.log(item)
    this.setState({
      cart: this.state.cart.concat(item)
    })
  };


//Get name user function ==>
  addName = (e, name) => {
    e.preventDefault()
    
    localStorage.setItem('username', JSON.stringify(name))
    
    this.setState({
      username: name
    })
  }


  render() {
      return (
        <div className="App">
          <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="my-0 mr-md-auto font-weight-normal">Plants Store</h1>
            <Nav />
          </header>

          <Switch>
            <Route 
              exact path='/' 
              render={ () => {return <Home
                username={this.state.username}
                addName={this.addName}
                />}} 
            />,
            <Route 
              path='/store' 
              render={ () => {return <Store 
                username={this.state.username}
                addToCart={this.addToCart}
                fernsList={this.props.fernsList}
                cactusList={this.props.cactusList}
                cart={this.state.cart}
              />}} 
            />

            <Route 
              path='/cart' 
              render={() => { 
              return <Cart 
              username={this.state.username}
              cart={this.state.cart} />}} 
            />
          </Switch>
        </div>
      );
    }
}

export default App;
// registerServiceWorker();

