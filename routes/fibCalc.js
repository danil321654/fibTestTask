const express = require("express");
const getNFibNum = require("./../logics/getNFibNum");
const router = express.Router();
const connection = require("./../config/mysql-config.js");

router.get("/", (req, res) => {
  res.send(JSON.stringify(getNFibNum(req.query.n)));
  let date = new Date();
  let sql = `INSERT INTO requests VALUES
            (${JSON.stringify(req.query.n)},
             ${JSON.stringify(getNFibNum(req.query.n))},
             ${JSON.stringify(date)});`;
  connection.query(sql, (err, results) => {
    if (err) console.log(err);
    console.log(results);
  });
});

module.exports = router;
