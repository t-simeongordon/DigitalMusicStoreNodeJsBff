const express = require('express');
const { getTopCharts } = require('../../controller/getTopChartsController');
const app = express();
app.get('/topcharts', getTopCharts);

module.exports = app;

module.exports = app;
