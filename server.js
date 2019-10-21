const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3400;

app.use((req, res, next) => {
  res.locals.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'health_app',
  });
  res.locals.connection.connect();
  next();
});

app.get('/mydata', (req, res) => {
  // TODO: do cleanup for this app
  res.locals.connection.query('SELECT * from health_data order by date desc', function(err, rows, fields) {
    if (err) {
      throw err;
    }
    res.send({ data: rows, error: ''});
  });
});

app.listen(port, () => console.log(`PORT: ${port}`));

