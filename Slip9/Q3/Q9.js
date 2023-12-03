const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "select * from customer";
  con.query(sql, function (err, result,fields){
    if (err) throw err;
    console.log(result);
  });
});
