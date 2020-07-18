let range = {
  from: 1,
  to: 10,
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,
      async next() {
        await new Promise((res) => setTimeout(res, 1000));
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

let range2 = {
  from: 1,
  to: 10,
  *[Symbol.iterator]() {
    for (let i = 0; i < this.to; i++) {
      yield i;
    }
  },
  async *[Symbol.iterator]() {
    for (let i = 0; i < this.to; i++) {
      await new Promise((res) => setTimeout(res, 1000));
      yield i;
    }
  },
};

(async () => {
  for await (const i of range) {
    console.log(i);
  }
})();
