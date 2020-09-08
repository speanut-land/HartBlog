function strNumSort(str) {
  return "fed123ab456c"
    .split("")
    .sort((a, b) => {
      let aAscii = a.charCodeAt();
      let bAscii = b.charCodeAt();
      if (aAscii < 58 && aAscii > 48 && bAscii > 96 && bAscii < 123) {
        return 1;
      } else if (aAscii > 96 && aAscii < 123 && bAscii < 58 && bAscii > 48) {
        return -1;
      } else {
        return aAscii - bAscii;
      }
    })
    .join("");
}
console.log(strNumSort());
