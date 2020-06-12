const str = "(((())))";
function test(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(stack);
    }
    if (str[i] === ")") {
      if (stack.length) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(test(str));
