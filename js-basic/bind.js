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
