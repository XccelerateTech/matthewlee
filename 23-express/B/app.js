const express = require('express');
const bodyParser = require ('body-parser')
const path = require('path')
const app = express();

app.use(express.static('profolio'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(`${__dirname}/profolio/index.html`))
})

app.listen(8080);