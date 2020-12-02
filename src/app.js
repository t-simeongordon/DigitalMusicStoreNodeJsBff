const express = require('express');
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/app', (req,res)=>{
  res.status(200).json(
    {greeting:'hello world'}
  )
});

module.exports = app