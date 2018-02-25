import React, { Component } from 'react';
// import Store from '../Store/Store';
// import Home from '../Home/Home';
// import { Link } from 'react-router-dom';

export default class Cart extends Component {
  render(){
    // console.log(this.props.cart + ' logging on cart component')
    const itemsMapped = this.props.cart.map((item, i) => {
      return <tr>
              <th scope="row"><img src={item.image} alt="y"/></th>,
              <td>{item.name}</td>,
              <td>{item.price}</td>,
              <td>{item.type}</td>,
            </tr>
    })

    const itemsTotal = this.props.cart.reduce((acc, item )=> {
      return acc += item.price
    }
      ,0
  )

    return(<div>
            <h2>Hello {this.props.username}! This is your shop cart!</h2>
            <table className="table">
            <thead>
              <tr>
                <th clasName="col">Image</th>
                <th className="col">Name</th>
                <th className="col">Price</th>
                <th className="col">Type</th>
              </tr>
              <tr>
                <th clasName="col">Total is {itemsTotal}</th>
              </tr>
            </thead>
            <tbody>
              {itemsMapped}
            </tbody>
          </table>
        </div>
    )
  }
} 