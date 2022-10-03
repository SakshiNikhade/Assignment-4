const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.get("/" ,(req , res )=>{
    res.send("hello world")
})
app.post("/add" , (req , res) =>{
    a = req.body.num1;
    b = req.body.num2;
    let response = {};
    let result = a + b ;
    if(typeof(a) ==="string" || typeof(b) === "string"){
        response.status = "error";
        response.message = "Invalid Data Types"
    }
    else if(a < -1000000 || b < -1000000 || result < -1000000 ){
        response.status = "error";
        response.message = "Under-Flow check your Input"
    }
    else if(a > 1000000 || b > 1000000 || result > 1000000){
        response.status = "error";
        response.message = "OverFlow check your Input"
    }
    else{
        response.status = "Sucess";
        response.message = "the sum of given two numbers"
        response.sum = result;
    }
    console.log(response)
    res.send(response)
})
app.post("/sub" , (req , res) =>{
    a = req.body.num1;
    b = req.body.num2;
    let response = {};
    let result = a - b ;
    if(typeof(a) ==="string" || typeof(b) === "string"){
        response.status = "error";
        response.message = "Invalid Data Types"
    }
    else if(a < -1000000 || b < -1000000 || result < -1000000 ){
        response.status = "error";
        response.message = "Under-Flow check your Input"
    }
    else if(a > 1000000 || b > 1000000 || result > 1000000){
        response.status = "error";
        response.message = "OverFlow check your Input"
    }
    else{
        response.status = "Sucess";
        response.message = "the subtract of given two numbers"
        response.subtract = result;
    }
    console.log(response)
    res.send(response)
})
app.post("/multiply " , (req , res) =>{
    a = req.body.num1;
    b = req.body.num2;
    let response = {};
    let result = a * b ;
    if(typeof(a) ==="string" || typeof(b) === "string"){
        response.status = "error";
        response.message = "Invalid Data Types"
    }
    else if(a < -1000000 || b < -1000000 || result < -1000000 ){
        response.status = "error";
        response.message = "Under-Flow check your Input"
    }
    else if(a > 1000000 || b > 1000000 || result > 1000000){
        response.status = "error";
        response.message = "OverFlow check your Input"
    }
    else{
        response.status = "Sucess";
        response.message = "the multiply of given two numbers"
        response.multiply = result;
    }
    console.log(response)
    res.send(response)
})
app.post("/divide  " , (req , res) =>{
    a = req.body.num1;
    b = req.body.num2;
    let response = {};
    let result = a / b ;
    if(typeof(a) ==="string" || typeof(b) === "string"){
        response.status = "error";
        response.message = "Invalid Data Types"
    }
    else if(a < -1000000 || b < -1000000 || result < -1000000 ){
        response.status = "error";
        response.message = "Under-Flow check your Input"
    }
    else if(a > 1000000 || b > 1000000 || result > 1000000){
        response.status = "error";
        response.message = "OverFlow check your Input"
    }
    else{
        response.status = "Sucess";
        response.message = "the divide of given two numbers"
        response.divide  = result;
    }
    console.log(response)
    res.send(response)
})
app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;