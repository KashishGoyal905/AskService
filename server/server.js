const express = require('express');
const cors = require('cors')
const app = express()
const port  = 8000;
const db = require('./config/mongoose');


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());

app.use('/', require('./routes'));
app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`);
})