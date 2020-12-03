const { digitalMusicStoreTopCharts } = require('../../service/getTopChartsService');

module.exports.getTopCharts = async (req, res, next) =>{
  const payload = await digitalMusicStoreTopCharts();
  res.status(200).send(payload);
}

