console.log("我是service1的js文件");
fetch("http://localhost:3002/login")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  });
throw "service1的错误";
