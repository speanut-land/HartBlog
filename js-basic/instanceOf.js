function instanceOf(first, second) {
  while (first) {
    if (first.__proto__ === second.prototype) {
      return true;
    }
    first = first.__proto__;
  }
  return false;
}

function c() {}
function a() {}
let cc = new c();

console.log(instanceOf(cc, a));
