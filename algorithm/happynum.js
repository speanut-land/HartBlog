/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function getNext(number) {
    number += '';
    let sum = 0;
    for (const i of number) {
      sum += i * i;
    }
    return sum;
  }
  // also use hashMap or set record value
  let slow = getNext(n);
  let fast = getNext(slow);
  while (slow != fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return slow == 1;
};
