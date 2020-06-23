const express = require("express");
const fibCalc = require("./routes/fibCalc");
const fibHistory = require("./routes/fibHistory");

var app = express();

app.use("/fib", fibCalc);
app.use("/history", fibHistory);

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
