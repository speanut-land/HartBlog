function* generateSequence(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
}

function* generatePwd() {
  yield* generateSequence(2, 4);
  yield* generateSequence(3, 10);
}

// for (const i of generatePwd()) {
// console.log(i);
// }

function* gen() {
  let res = yield 10086;
  console.log(res, 123123);
  let cc = yield res;
  console.log(cc);
}

let genc = gen();

setTimeout(() => {
  console.log(genc.next(4).value);
  setTimeout(() => {
    console.log(genc.next(9));
  }, 2000);
}, 1000);
