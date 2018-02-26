//require modules.
const express = require('express');
const app = express();
const fs = require('file-system');
const port = process.argv[2] || 8080; //Set it up port number.
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

//using body parser to get info from search
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Allowing cors access. 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

//Send cart data to cart page 
app.get('/getcart', (req, res) => {    
  let shoppingCart = []
  fs.readFile('shopCart.json', (err, data) => {
    if(data) {
     shoppingCart = data;
     console.log(shoppingCart) 
    }
  res.send(shoppingCart);
  })
})

//Get Cart data
app.post('/setcart', (req, res) => {
  
  let shoppingCart = req.body
  console.log(req.body)
  fs.writeFile('shopCart.json', JSON.stringify(shoppingCart))

  //Send back a success message
  res.json({ success: true})
})

//Listening to port
app.listen(8080, () => {
  console.log(`Server Started on http://localhost:${port}`);
  console.log('Press CTRL + C to stop server');
});