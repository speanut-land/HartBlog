let myFunc = function () {
  console.log(1);
};

Function.prototype.before = function (fn) {
  let _this = this;
  return function () {
    fn.apply(this, arguments);
    return _this.apply(this, arguments);
  };
};

myFunc = myFunc.before(function () {
  console.log(2);
});

myFunc();

new Promise((res) => {
  console.log(1);
  res();
  console.log(2);
});
