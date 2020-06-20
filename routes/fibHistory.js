const express = require("express");
const getNFibNum = require("./../logics/getNFibNum");
const router = express.Router();

var connectionString =
  "mysql://sql7349727:zkpw8vLnNN@sql7.freemysqlhosting.net:3306/sql7349727?charset=utf8_general_ci&timezone=-0700";
var connection;
(async function() {
  try {
    connection = mysql.createConnection(connectionString);

    connection.connect(function(err) {
      console.log("Connected!");

      var sql = "SHOW TABLES FROM sql7349727 LIKE 'requests'";

      connection.query(sql, (err, results) => {
        if (err) console.log(err);
        if (results.length == 0) {
          let sql = `CREATE TABLE requests(number tinyint, fibNumber bigint)`;
          connection.query(sql, err => {
            if (err) console.log(err);
          });
        } else console.log(results);
      });
    });
  } catch (err) {
    console.error(err.message);
  }
})();

router.get("/", (req, res) => {
  res.send(JSON.stringify(getNFibNum(req.query.n)));
  let sql =
    "INSERT INTO requests VALUES (1, 2);";
  connection.query(sql, err => {
    if (err) console.log(err);
  });
});
module.exports = router;
