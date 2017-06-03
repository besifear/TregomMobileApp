var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'kolegu2'
});
connection.connect();

var achievement = {
  description: '20Pyetje',
  reputationaward: 50,
  difficulty: 'Medium'
};

var query = connection.query('insert into achievements set ?', achievement, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});
