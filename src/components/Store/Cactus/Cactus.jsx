import React, { Component } from 'react';
// import Store from '../Store/Store';
// import Home from '../Home/Home';
// import { Link } from 'react-router-dom';

export default class Cactus extends Component {
  render(){
    let cactusList = this.props.cactusList
    // console.log(cactusList)

    const cactusMapped = cactusList.map((cactusSingle, i) => {
      //map return
      return <div className="card-body">
            
            <img className="card-img-top" 
            alt="cactus"
            src={cactusSingle.image} />

            <h5 className="card-title">{cactusSingle.name
            }</h5>

            <p className="card-text">{cactusSingle.price}
            </p>

            <button 
              type="button" 
              className="btn btn-outline-dark"
              onClick={() => {this.props.addToCart(cactusSingle)}}>
              Buy
            </button>
            
            </div>
        })
    
    //component return
    return(
      <div className="card">  
          {cactusMapped}
      </div>
    )
  }
}


// style="width: 18rem;"