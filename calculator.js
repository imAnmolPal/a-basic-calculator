// jshint esversion:6

const express =  require("express");
const bodyParser = require("body-parser");
const app = express(); // a function that represent express module
app.use(bodyParser.urlencoded({extended: true}));


// Sending file is different from sending text

// app.get("/", function(req,res){
//   res.sendFile("index.html");
// });

// instead of sending relative path what we can do is we can
// use a constant that called __dirname (directory)
//__dir it gives file loc no matter where your app is deployed

app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

// lets add app.post() to handle any post request that come to our home route
// here also we are going to have a call back(req,res).
//

app.post("/", function(req,res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  num1+=num2;
  res.send("The result of calculation is: "+ num1);
  // console.log(req.body.num1);
  // res.send("Working...!!");
});

app.listen(3000, function(){
  console.log("Port at 3000 is listening...");
}); // port number
