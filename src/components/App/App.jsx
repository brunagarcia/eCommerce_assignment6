import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Store from '../Store/Store'
import Home from '../Home/Home'
import Nav from '../Nav/Nav'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      
      username: "",
      cart: [],
      cartNum: ''
      
    }
  }

//Adding to cart ==> 
addToCart = (item) => {
//axios soon
  this.setState({
    cart: this.state.cart.concat(item)
  })
  console.log(this.state.cart + ' logging after function')
}


//   //Add user
//   addName = () => {
//   localStorage.setItem('user', PARSE.stringify(this.state.username))
//       //get item with getItem, set state, 
//   } 

// componentDidUpdate(){
//   axios.get(localhost)
// }

  render() {
    // console.log(this.props.cactusList + ' Print App')
  
    return (
      <div className="App">
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="my-0 mr-md-auto font-weight-normal">Plants Store</h1>
          <Nav />
        </header>

        <Switch>
          <Route 
            exact path='/' 
            render={ () => {return <Home />}} 
          />,
          <Route 
            path='/store' 
            render={ () => {return <Store 
              addToCart={this.addToCart}
              fernsList={this.props.fernsList}
              cactusList={this.props.cactusList}
              cart={this.state.cart}
            />}} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;

