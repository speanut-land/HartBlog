function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...arg2) {
        return curried.apply(this, args.concat(arg2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let currySum = curry(sum);

console.log(currySum(1, 2, 3), currySum(1, 2)(3), currySum(1)(2, 3));
