function f(a) {
  console.log(a);
}

// f1000 最多每 1000ms 将调用传递给 f 一次
let f1000 = throttle(f, 1000);

f1000(1); // 显示 1
setTimeout(() => {
  f1000(2);
}, 500); // (节流，尚未到 1000ms)
setTimeout(() => {
  f1000(3);
}, 600); // (节流，尚未到 1000ms)

function throttle(f, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;
  return function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    f.apply(this, arguments); // (1)
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  };
}
