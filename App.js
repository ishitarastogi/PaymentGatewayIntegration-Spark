const express = require('express');
const stripe = require('stripe')('sk_test_51Hct2ULSW13A9t9mDSwN2UufmrMceud8nAV3EEuAqpkqbIbzFCklJuewlghjGOegsSjlFOB7Wb9vvxu89xto1MHc00GjR4prAt');
const bodyParser=require('body-parser');
const exphbs=require('express-handlebars');
const app=express();


// Handlebars Middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Index Route
app.get('/', (req, res) => {
  res.render('index');//, {
    //stripePublishableKey: keys.stripePublishableKey
 // });
});
const port= process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
