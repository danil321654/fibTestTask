const express = require("express");
const getNFibNum = require("./../logics/getNFibNum");
const router = express.Router();
const mysql = require("mysql");
require('dotenv').config();

var connectionString =
  `mysql://${process.env.username}:${process.env.pswd}@${process.env.server}:${process.env.port}/${process.env.dbname}?charset=utf8_general_ci&timezone=-0700`;
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
          let sql = `CREATE TABLE requests(number varchar(255), fibNumber varchar(255))`;
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
  let sql = `INSERT INTO requests VALUES (${JSON.stringify(req.query.n)},
             ${JSON.stringify(getNFibNum(req.query.n))});`;
  connection.query(sql, (err, results) => {
    if (err) console.log(err);
    console.log(results);
  });
});

module.exports = router;
