var express = require("express");
var app = express();
app.use(function middleware1(req, res, next) {
  console.log("A middleware1 开始");
  next();
  console.log("B middleware1 结束");
});

app.use(function middleware2(req, res, next) {
  console.log("C middleware2 开始");
  next();
  console.log("D middleware2 结束");
});

app.get("/", function handler(req, res) {
  res.send("ok");
  console.log("======= G =======");
});

app.listen(3000);
