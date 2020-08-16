Function.prototype._bind = function (ctx, ...args) {
  return (...args2) => this.call(ctx, ...args, ...args2);
};
function foo() {
  this.b = 100;
  return this.a;
}
let fe = foo._bind({ a: 1 });
console.log(fe()); // 1
console.log(new fe()); // 实例 {b: 100}

Function.prototype.bind2 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function () {};
  var fBound = function (...bindArgs) {
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};
