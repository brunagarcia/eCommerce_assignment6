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
    price: 8.00,
    image:'https://images.unsplash.com/photo-1487020530383-c62abe4f9346?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=911325914333bb594190306cb7c8737a&auto=format&fit=crop&w=1050&q=80',
    qty:"",
    type: 'cactus'
    },
    {
    name:"Cactus Holyoake",
    price: 10.00,
    image:'https://images.unsplash.com/photo-1511048794321-5d21136bf6df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56d9c7f8ce34c1001c7447c4429544c6&auto=format&fit=crop&w=1050&q=80',
    qty:"",
    type: 'cactus'
    },
    {
    name:"Cactus Kylderin",
    price: 15.00,
    image:'https://images.unsplash.com/photo-1463154545680-d59320fd685d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c75bae125fb27f5ef079bfa94609cf6b&auto=format&fit=crop&w=623&q=80',
    qty:"",
    type: 'cactus'
    }
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
  },
  {
    name:"Bogor sinuata",
    price: 20.00,
    image:'https://images.unsplash.com/photo-1485802637672-5fc963b16504?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92dc5b43676edda5aba52fd0c4a14c82&auto=format&fit=crop&w=633&q=80',
    qty:"",
    type: 'ferns'
  },
  {
    name:"Greter Falls",
    price: 15.00,
    image:'https://images.unsplash.com/photo-1512969272518-257455e52b04?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c33ec8d676784323c04667f47d8a069&auto=format&fit=crop&w=634&q=80',
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