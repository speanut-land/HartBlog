let range = {
  from: 1,
  to: 10,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      this.current++;
      return { done: false, value: Math.random() * this.to + 1 };
    } else {
      return { done: true };
    }
  },
};

for (const i of range) {
  console.log(i);
}
