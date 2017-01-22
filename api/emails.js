const dbQuery = require('../models/db');

module.exports = {

  // GET /api/emails
  retrieveAllEmails(req, res) {
    dbQuery(
      `SELECT * FROM Emails`, (err, emails) => {
        if (err) return res.status(500).send('Database Error');
        res.status(200).json(emails);
      }
    )
  },

  // POST /api/emails
  addNewEmail(req, res) {
    dbQuery(
      `INSERT INTO Emails (email, added)
      values ('${req.body.email}', FALSE)`,
      (err) => {
        if (err) return res.status(500).send('Database Error');
        res.status(200).send('OK');
      }
    )
  }

};
