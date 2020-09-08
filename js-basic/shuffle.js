Array.prototype.shuffle = function () {
  let m = this.length,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    [this[m], this[i]] = [this[i], this[m]];
  }
  return this;
};
