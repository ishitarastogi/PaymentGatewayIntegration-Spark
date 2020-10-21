const express = require('express');
const keys = require('./config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const bodyParser=require('body-parser');
const exphbs=require('express-handlebars');
const app=express();


// Handlebars Middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static(`${__dirname}/public`));

// Index Route
app.get('/', (req, res) => {
  res.render('index', {
    stripePublishableKey: keys.stripePublishableKey
  });
});


    
app.post('/charge', function(req, res){ 
  
  
  const amount = 2500;
  
  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  }) 
  .then(customer => stripe.charges.create({
    amount,
    description: 'D',
    currency: 'usd',
    customer: customer.id
  })) 
  .then((charge) => { 
      res.render("Success")   
  }) 
  .catch((err) => { 
      console.log('');       
  }); 

  console.log("your payment was succesful");
  res.render('success');
});
const port= process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
