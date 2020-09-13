const express = require("express");
const getNFibNum = require("./../logics/getNFibNum");
const router = express.Router();
const connectionModule = require("./../config/mysql-config.js");

router.get("/", (req, res) => {
  let fibbonacciResult = getNFibNum(req.query.n);
  res.send(JSON.stringify(fibbonacciResult));
  connectionModule.createNewPost(
    req.query.n.toString(),
    JSON.stringify(fibbonacciResult)
  )
});

module.exports = router;
