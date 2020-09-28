let str = "borderLeftTop";
let reg = /-\w/g;
console.log(
  str.replace(reg, function (i) {
    return i.slice(1).toUpperCase();
  })
);

function underline(str) {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}
console.log(
  underline(str)
);
