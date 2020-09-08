let f = debounce(console.log, 1000);

f(1); // 立即执行
f(2); // 被忽略

setTimeout(() => f(3), 100); // 被忽略（只过去了 100 ms）
setTimeout(() => f(4), 1100); // 运行
setTimeout(() => f(5), 1500); // 被忽略（距上一次运行不超过 1000 ms）

function debounce(fn) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}

function throttle(fn) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    fn.apply(this, arguments);
    setTimeout(() => {
      canRun = true;
    }, 500);
  };
}
