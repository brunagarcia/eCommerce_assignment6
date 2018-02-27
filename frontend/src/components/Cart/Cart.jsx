import React, { Component } from 'react';

export default class Cart extends Component {
  render(){

    let itemsMapped = []
    let returnValue;
    let itemsTotal;

    if(this.props.cart.length === 0){
      returnValue= <h2> Your cart is empty </h2>
    } else {
      itemsMapped = this.props.cart.map((item, i) => {
        return <tr>
                  <td clasName="col">{item.name}</td>
                  <td clasName="col">{item.price}</td>
                  <td clasName="col">{item.type}</td>
                </tr>    
      })        
        itemsTotal = this.props.cart.reduce((acc, item )=> {
          return acc += item.price
        } ,0)

        returnValue = itemsMapped;
    }

    return <div className="container">
          <h3>Hello {this.props.username}! This is your shop cart!</h3>

              {returnValue.length > 0 && 
                        <table className="table">
                        <thead>
                          <tr>
                            <th className="col">Name</th>
                            <th className="col">Price</th>
                            <th className="col">Type</th>
                          </tr>
                        </thead>
                          <tbody>
                            {returnValue}
                          </tbody>
                        </table>  
                          
                           }
              {itemsTotal > 0 &&  
                <div>
                    <h2 clasName="col total">Total is {itemsTotal}</h2>
                </div> 
              }
        </div>  
  }
} 