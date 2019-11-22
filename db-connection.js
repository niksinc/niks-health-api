var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'health_app',
});
// connection.connect();
const getAllData = () => {
  const query = 'SELECT * FROM health_data ORDER BY date DESC';
  const res = connection.query(query, (err, rows, fields) => {
    if (err) throw err;
    console.log('The solution is: change', res);
    // connection.end();
    return rows;
  });
  console.log('The solution is: change', res);
  return res;
}

module.exports =  { getAllData };
