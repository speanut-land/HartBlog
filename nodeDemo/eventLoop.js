console.log(1);
process.nextTick(() => console.log(0.5));
Promise.resolve().then(() => console.log(1));
process.nextTick(() => console.log(2));
