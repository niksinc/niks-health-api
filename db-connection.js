var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'health_app',
});

const getAllData = () => {
  // connection.connect();
  const res = connection.query('SELECT * from health_data order by date desc', function(err, rows, fields) {
    if (err) throw err;
    
    // connection.end();
    return rows;
    
  });
  console.log('The solution is: ', res);
  return res;
}

module.exports =  { getAllData };