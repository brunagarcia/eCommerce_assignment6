import React, { Component } from 'react';
// import Store from '../Store/Store';
// import Home from '../Home/Home';
// import { Link } from 'react-router-dom';

export default class Cart extends Component {
  render(){
    // console.log(this.props.cart + ' logging on cart component')
    const itensMapped = this.props.cart.map((item, i) => {
      return <tr>
              <th scope="row"><img src={item.image} alt="y"/></th>,
              <td>{item.name}</td>,
              <td>{item.price}</td>,
              <td>{item.type}</td>,
            </tr>
    })

    return(
      <table className="table">
      <thead>
        <tr>
          <th clasName="col">Image</th>
          <th className="col">Name</th>
          <th className="col">Price</th>
          <th className="col">Type</th>
        </tr>
      </thead>
      <tbody>
        {itensMapped}
      </tbody>
    </table>
    )
  }
}