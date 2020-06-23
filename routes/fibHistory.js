const express = require("express");
const getNFibNum = require("./../logics/getNFibNum");
const router = express.Router();
const connection = require("./../config/mysql-config.js");

router.get("/", (req, res) => {
  let sql = "SELECT * FROM requests";
  connection.query(sql, (err, results) => {
    if (err) console.log(err);
    res.send(results);
    console.log(results);
  });
});
module.exports = router;
