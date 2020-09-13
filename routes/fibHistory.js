const express = require("express");
const router = express.Router();
const connection = require("./../config/mysql-config.js");

router.get("/", (req, res) => {
  //let responds = await connection;
  //res.send(responds);
  connection.post.find(function(err, posts) {
    if (err) return console.error(err);
  //  console.log(posts);
    res.send(posts);
  });

  //console.log(responds);
});
module.exports = router;
