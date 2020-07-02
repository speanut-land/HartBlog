function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let currySum = curry(sum);

console.log(currySum(1, 2, 3), currySum(1, 2)(3), currySum(1)(2, 3));
