/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let head = 0;
  let tail = s.length - 1;
  function checkPalindrome(head, tail) {
    let [i, j] = [head, tail];
    while (i < j) {
      if (s[i] != s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
  while (head < tail) {
    if (s[head] === s[tail]) {
      tail--;
      head++;
    } else {
      return checkPalindrome(head + 1, tail) || checkPalindrome(head, tail - 1);
    }
  }
  return true;
};
