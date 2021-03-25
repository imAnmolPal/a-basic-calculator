// jshint esversion:6

const express =  require("express");

const app = express(); // a function that represent express module

app.get("/", function(req,res){
  res.send("Hello World");
});
//
// app.get("/testing", function(res,req){  // argument pos is wrong
//   res.send("<h1>HEY CUTIE!!!</h1>");
// });

app.get("/testing", function(req,res){
  res.send("<h1>Hello about</h1>");
});

app.listen(3000, function(){
  console.log("Port at 3000 is listening...");
}); // port number
