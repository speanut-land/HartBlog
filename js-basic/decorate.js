// 我们将对 worker.slow 的结果进行缓存
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // 可怕的 CPU 过载任务
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
    // let result = func.call(this, x);
    // cache.set(x, result);
    // return result;
  };
}
worker.slow = cachingDecorator(worker.slow); // 现在对其进行缓存
console.log(worker.slow(2));
