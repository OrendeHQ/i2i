const router = require('express').Router();
const indexController = require('../controllers');

router.get('/', indexController.renderLanding);
router.get('/clients', indexController.renderClients);
router.get('/contact', indexController.renderContact);
router.get('/custom-service', indexController.renderCustomService);
router.get('/customer-insight-innovation', indexController.renderCustomerInsight);
router.get('/disruptive-innovation', indexController.renderDisruptiveInnovation);
router.get('/events', indexController.renderEvents);
router.get('/people', indexController.renderPeople);
router.get('/research', indexController.renderResearch);
router.get('/startup360', indexController.renderStartup);

module.exports = router;
