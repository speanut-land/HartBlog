let str = "01:32:54:67:89:AB";
let regexp = /(([0-9A-F]){2}:){5}([0-9A-F]){2}$/;
console.log(regexp.test("01:32:54:67:89:AB"));
console.log(regexp.test("0132546789AB"));
console.log(regexp.test("01:32:54:67:89"));
console.log(regexp.test("01:32:54:67:89:ZZ"));

console.log(
  "color: #3f3; background-color: #AA00ef; and: #abcd".match(
    /#([0-9A-F]{3}){1,2}\b/gi
  )
);

console.log("-1.5 0 2 -123.4.".match(/-?\d+(\.\d+)?/g));

function parse(str) {
  let regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
  return str.match(regexp).slice(1, 4);
}

console.log(parse("1.2 * 3.4"));
