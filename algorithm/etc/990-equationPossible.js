var equationsPossible = (equations) => {
  const uf = new UnionFind(26);
  for (const e of equations) {
    if (e[1] === "=") uf.union(e.charCodeAt(0) - 97, e.charCodeAt(3) - 97);
  }
  for (const e of equations) {
    if (
      e[1] == "!" &&
      uf.findRoot(e.charCodeAt(0) - 97) == uf.findRoot(e.charCodeAt(3) - 97)
    ) {
      return false;
    }
  }
  return true;
};

class UnionFind {
  constructor(num) {
    this.parent = new Array(num);
    for (let i = 0; i < num; i++) {
      this.parent[i] = i;
    }
  }
  findRoot(x) {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }
  union(x, y) {
    this.parent[this.findRoot(x)] = this.findRoot(y);
  }
}
