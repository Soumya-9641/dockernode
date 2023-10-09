const express= require('express');

const app=express();
const port = 8000;

app.get("/",(req,res)=>{
    res.send("<h1>hello backend developer.I am backend dev</h1>")
})

app.listen(port,(req,res)=>{
    console.log(`app is running on port ${port}`);
})