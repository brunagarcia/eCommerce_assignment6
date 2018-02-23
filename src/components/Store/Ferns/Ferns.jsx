import React, { Component } from 'react';
// import Store from '../Store/Store';
// import Home from '../Home/Home';
// import { Link } from 'react-router-dom';

export default class Ferns extends Component {
  render(){
    let fernsList = this.props.fernsList
    // console.log(fernsList)

    const fernsMapped = fernsList.map((fernSingle, i) => {
      return <div className="card-body">
            
            <img className="card-img-top" 
            alt="cactus"
            src={fernSingle.image} />

            <h5 className="card-title">{fernSingle.name
            }</h5>

            <p className="card-text">{fernSingle.price}
            </p>

            <button 
              type="button" 
              className="btn btn-outline-dark"
              onClick={() => {this.props.addToCart(fernSingle)}}>
              Buy
            </button>
            
        </div>
        })
    return(
      <div className="card">  
          {fernsMapped}
      </div>
    )
  }
}