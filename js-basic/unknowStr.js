function fn(str) {
  let res = str.replace(/b+/g, "");
  while (res.match(/(ac)+/)) {
    console.log(res.match(/(ac)+/));
    res = res.replace(/ac/, "");
  }
  return res;
}
console.log(fn("aacbd"));
