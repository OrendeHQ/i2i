const router = require('express').Router();

module.exports = {

  // GET /
  renderLanding(req, res) {
    res.render('landing/index', {
      title: 'i2i | Innovation and Insights Center',
      customStyle: '/static/css/index.css'
    });
  }

}
