const auth = require('http-auth');

const admin = auth.basic({ realm: 'i2i Admin' }, (admin, password, done) => {
  done(admin === process.env.ADMIN && password === process.env.ADMIN_PASSWORD);
});

module.exports.admin = auth.connect(admin);
