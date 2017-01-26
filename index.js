if (process.env.NODE_ENV === 'dev') require('dotenv').load();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use('/', require('./routes'));
app.use('/api/emails', require('./routes/emails'));

app.listen(process.env.PORT, err => {
  if (err) throw err;
  console.log('UP AND RUNNING @', process.env.PORT);
});
