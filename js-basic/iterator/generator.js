function* test(x) {
  console.log(10086);
  return 1;
}

function sum(a, b) {
  return a + b;
}

let gen = test();
console.log(gen.next());
