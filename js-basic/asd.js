setTimeout(() => {
  console.log("log-timeout");
}, 0);
console.log(1);
Promise.resolve(2).then((res) => console.log(res));
process.nextTick(() => {
  console.log("tick");
});
console.log(3);
