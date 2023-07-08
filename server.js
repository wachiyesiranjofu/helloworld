/**
 * Name: Juvraj Singh  Student ID: 170320212
 * Github:https://github.com/juvraj-singh/helloworld.git
 * Cyclic URL:https://my-hello-app.cyclic.app/
 * Date: 26/05/2023
 */

var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
  res.send("Juvraj Singh - 170320212");
});

// setup http server to listen on PORT
app.listen(PORT, () => {
  console.log("Server started on port:" + PORT);
});
