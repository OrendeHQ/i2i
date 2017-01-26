const router = require('express').Router();
const emailsApi = require('../api/emails');
const adminAuth = require('../middlewares/basicAuth').admin;

router.get('/', adminAuth, emailsApi.retrieveAllEmails);
router.post('/', emailsApi.addNewEmail);

module.exports = router;
