let str = "border-left-top";
let reg = /-\w/g;
console.log(
  str.replace(reg, function (i) {
    return i.slice(1).toUpperCase();
  })
);

function underline(str) {
  return str.replace(/\B([A-Z])/g, "_$1").toLowerCase();
}
