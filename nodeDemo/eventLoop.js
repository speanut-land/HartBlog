console.log(1);
process.nextTick(() => console.log(0.5));
Promise.resolve().then(() => console.log(1));
process.nextTick(() => console.log(2));
setTimeout(() => {
    console.log(10)
}, 0);
setImmediate(() => {
    console.log(20)
});
setTimeout(() => {
    console.log(30)
}, 0);
setImmediate(() => {
    console.log(40)
});
setTimeout(function() {
    setTimeout(function() {
      console.log('setTimeout')
    }, 0);
    setImmediate(function() {
      console.log('setImmediate')
    });
  }, 10);