var express = require("express");
const nodemon = require("nodemon");

var app = express();

app.get("/fib", function(req, res) {
  let k = 1,
    s = 1;
  let n = +req.query.n;

  for (let i = 0; i < n - 1; i++) {
    let temp = s;
    s += k;
    k = temp;
  }
  console.log(req);
  res.send(k.toString());
  //  process.exit();
});
app.get("/history", function(req, res) {
  res.send("History");
});

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
