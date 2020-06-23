const mysql = require("mysql");
require("dotenv").config();

var connectionString = `mysql://${process.env.username}:${process.env.pswd}@${process.env.server}:${process.env.port}/${process.env.dbname}?charset=utf8_general_ci&timezone=-0700`;
var connection;

(async () => {
  try {
    connection = mysql.createConnection(connectionString);
    connection.connect(function(err) {
      console.log("Connected!");

      var sql = "SHOW TABLES FROM sql7349727 LIKE 'requests'";

      connection.query(sql, (err, results) => {
        if (err) console.log(err);
        if (results.length == 0) {
          let sql = `CREATE TABLE requests(number varchar(255), fibNumber varchar(255), date varchar(255))`;
          connection.query(sql, err => {
            if (err) console.log(err);
          });
        } else console.log(results);
      });
    });
    return connection;
  } catch (err) {
    console.error(err.message);
  }
})();
module.exports = connection;
