let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log(this);
    return x * this.someMethod(); // (*)
  },
};

// 和之前例子中的代码相同
function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    console.log(this);
    console.log(func());
  };
}
worker.slow = cachingDecorator(worker.slow); // 现在对其进行缓存
console.log(worker.slow(2));
