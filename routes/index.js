const router = require('express').Router();
const indexController = require('../controllers');

router.get('/', indexController.renderLanding);

module.exports = router;
