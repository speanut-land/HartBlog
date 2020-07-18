var koa = require("koa");
var app = new koa();

app.use(function* (next) {
  console.log("hello world");
  this.status = 302;
  this.body = "hello world";
});

app.listen(3000);
