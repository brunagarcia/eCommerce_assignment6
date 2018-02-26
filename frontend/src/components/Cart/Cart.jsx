import React, { Component } from 'react';

export default class Cart extends Component {
  render(){
    let itemsMapped = []
    let returnValue;
    let itemsTotal;

    if(!this.props.cart){
      returnValue= <h2> Your cart is empty </h2>
    } else {
      itemsMapped = this.props.cart.map((item, i) => {
        return <table className="table" >
                <thead>
                  <tr>
                    <th className="col">Name</th>
                    <th className="col">Price</th>
                    <th className="col">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td clasName="col">{item.name}</td>
                    <td clasName="col">{item.price}</td>
                    <td clasName="col">{item.type}</td>
                  </tr>
                </tbody>
                </table>      
      })        
        itemsTotal = this.props.cart.reduce((acc, item )=> {
          return acc += item.price
        } ,0)

        returnValue = itemsMapped;
    }

    return <div>
              <h2>Hello {this.props.username}! This is your shop cart!</h2>

              {returnValue}
              {itemsTotal > 0 &&  
                <div>
                    <h2 clasName="col">Total is {itemsTotal}</h2>
                </div>
              }
        </div>  
  }
} 