const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const config = require('./config/init')
const appRoute = require('./api/routes')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(config.cors)

app.use('/app', appRoute);

module.exports = app