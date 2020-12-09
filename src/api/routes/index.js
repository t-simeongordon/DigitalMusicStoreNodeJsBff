const express = require('express');
const app = express();
const v0 = require('./v0');
app.use('/v0', v0);

module.exports = app;
