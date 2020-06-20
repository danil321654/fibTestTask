const express = require("express");
const fibCalc = require("./routes/fibCalc");

var app = express();



 

app.use("/fib", fibCalc);
app.get("/history", function(req, res) {
  res.send("History");
});

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
