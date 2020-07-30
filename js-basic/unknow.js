function unknow(str) {
  let i = 1;
  let stack = [str[0]];
  while (i < str.length) {
    while (str[i] === str[i + 1]) i += 2;
    while (str[i] === stack[stack.length - 1]) {
      stack.pop();
      i++;
    }
    stack.push(str[i]);
    i++;
  }

  return stack.join("");
}
console.log(unknow("assdaddsddccdccwd"));
