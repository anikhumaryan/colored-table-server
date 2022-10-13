const express = require("express");
const app = express();
const port = 4444;
const fs = require("fs")
const cors = require("cors")

app.use(cors())
app.get("/", (req , res) =>{
     
    var arr = [];
    while(arr.length < 256){
    var r = Math.floor(Math.random() * 7) + 1;
    arr.push(r);
    }
    res.end(arr.toString()) 
});

app.listen(port);