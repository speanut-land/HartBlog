var decodeString = function (s) {
  let stack = [];
  let num = '';
  let str = '';
  for (c of s) {
    if (c >= 0) {
      num += c;
    } else if (c === '[') {
      stack.push([str, +num]);
      str = '';
      num = '';
    } else if (c === ']') {
      const [last_str, last_num] = stack.pop();
      str = last_str + str.repeat(last_num);
    } else {
      str += c;
    }
  }
  return str;
};

var decodeString = s => {
  let numStack = [];
  let strStack = [];
  let num = 0;
  let result = '';
  for (const char of s) {
    if (!isNaN(char)) {
      num = num * 10 + +char;
    } else if (char === '[') {
      strStack.push(result);
      result = '';
      numStack.push(num);
      num = 0;
    } else if (char === ']') {
      let repeatTimes = numStack.pop();
      result = strStack.pop() + result.repeat(repeatTimes);
    } else {
      result += char;
    }
  }
  return result;
};
