const express = require('express');
const { getTopCharts } = require('../../controller/getTopChartsController')
const app = express();
app.get('/topcharts', async(req, res, next) => await getTopCharts(req, res, next));



module.exports=app;