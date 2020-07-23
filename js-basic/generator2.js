function* test(arg) {
  let a = yield new Promise((res) => {
    res(arg);
  });
  console.log(a + 2000);
}

let gen = test(1);
gen
  .next()
  .value.then((res) => {
    console.log(res + 10086);
    return res + 10086;
  })
  .then((data) => {
    gen.next(data + 555);
  });
