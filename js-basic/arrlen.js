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
Object.defineProperty(c, "length", {
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
