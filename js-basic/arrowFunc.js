class Test {
  a = 1;
  b = () => {
    console.log(this.a);
  };
  c() {
    console.log(a);
  }
}

let c = new Test();
c.b();

setTimeout(c.c, 1000);
