import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//const array with products
  //transfer to components 

const cactusList = [
  {
    name:"Cactus Saguaro",
    price: 10.00,
    image:'https://images.unsplash.com/photo-1509222413196-40eb6b6b96e2?ixlib=rb-0.3.5&s=172c87cf0764bfdc1f77c2d5a848a46b&auto=format&fit=crop&w=978&q=80',
    qty:"",
    type: 'cactus'
    },
    {
    name:"Cactus Mammillaria",
    price: 10.00,
    image:'https://images.unsplash.com/photo-1487020530383-c62abe4f9346?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=911325914333bb594190306cb7c8737a&auto=format&fit=crop&w=1050&q=80',
    qty:"",
    type: 'cactus'
    },
  ];

const fernsList = [
  {
    name:"Fern Adiantum aleuticum",
    price: 10.00,
    image:'https://images.unsplash.com/photo-1496661220595-d73e000a1fa5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=44311a730a80c52e9453489ecef6b064&auto=format&fit=crop&w=1020&q=80',
    qty:"",
    type: 'ferns'
  },
  {
    name:"Fern Astrolepis sinuata",
    price: 10.00,
    image:'https://images.unsplash.com/photo-1504990811233-3201b4ec2628?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca9918266712d6374ae38c8ca7cd4b3d&auto=format&fit=crop&w=634&q=80',
    qty:"",
    type: 'ferns'
  }
  ];

ReactDOM.render(
    
    <Router>
      <App 
        fernsList={fernsList}
        cactusList = {cactusList}
      />
    </Router>,
    
  document.getElementById('root') );
  registerServiceWorker();