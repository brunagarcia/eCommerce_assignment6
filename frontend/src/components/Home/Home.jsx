import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: this.props.username
    }
  }

  nameUpdate = (e) => {
    this.setState ({
      username: e.target.value
    })
  } 
  
  render(){

    return <div className="homeContent"> 
          <h2>Hello {this.props.username}! Welcome to plants!!!</h2> 
              <form onSubmit={(e)=>{this.props.addName(e, this.state.username)}
            }>
                <div className="form-group">
                  <label>Name</label>
                  <input onChange={(e) => {this.nameUpdate(e)} } type="text" name="name" placeholder="Enter your name here!" />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
                </div>
              <button type="submit" className="btn btn-success">Submit</button>
              </form>
        </div>
  }
}