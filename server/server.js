const express = require('express');
const app = express()
const port  = 8000;

app.get('/',(req,res)=>{
    res.send('Hello m here')
});

app.get('/prerna',(req,res)=>{
    res.send('Hello m here')
});

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`);
})