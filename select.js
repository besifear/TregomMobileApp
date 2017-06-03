var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'kolegu2'
});
connection.connect();


// website.com/articles?id=1
// website.com/articles?id=1; drop table articles;



var query = connection.query('select * from questions ',  function(err, result) {
  console.log(result);
});
