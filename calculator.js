//jshint esversion:6
const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendfile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var weight=parsefloat(req.body.weight);
  var height=parsefloat(req.body.height);
  var result=weight/(height*height);
    res.send("Your BMI is"+" "+result);
});
app.listen(3000,function() {
  console.log("server is running");
});
