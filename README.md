# PaymentGatewayIntegration-Spark
---
app.use()   //use allows us to add new middleware
next      // allows the req. to continue to the next middleware

we can use app.listen(port); as:

app.listen = function listen() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};


Template engines: To put dynamic content into our HTML page we use this

app.engine('handlebars', exhbs())
we say to our engine to use handlebar engine
2 parameter(we use that variable to invoke it as a function)