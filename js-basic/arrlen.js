function defineProperty(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      return val;
    },
    set(newVal) {
      console.log(this, val);
      val = newVal;
    },
  });
}

let c = [0];
Object.defineProperty(c, "0", {
  enumerable: true,
  configurable: true,
  get() {
    return val;
  },
  set(newVal) {
    console.log(newVal);
  },
});
c[0] = 1;
