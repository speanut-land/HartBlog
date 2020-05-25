/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const myReverse = (head, tail) => {
    let prev = tail.next;
    let p = head;
    while (prev !== tail) {
      const nex = p.next;
      p.next = prev;
      prev = p;
      p = nex;
    }
    return [tail, head];
  };
  const hair = new ListNode(0);
  hair.next = head;
  let pre = hair;
  while (head) {
    let tail = pre;
    for (let i = 0; i < k; ++i) {
      tail = tail.next;
      if (!tail) {
        return hair.next;
      }
    }
    const nex = tail.next;
    [head, tail] = myReverse(head, tail);
    pre.next = head;
    tail.next = nex;
    pre = tail;
    head = tail.next;
  }
  return hair.next;
};

var reverseKGroup = function(head, k) {
  if (head == null) {
    return null;
  }
  let start, end;
  start = end = head;
  for (let i = 0; i < k; i++) {
    // 不足 k 个，不需要反转
    if (end == null) {
      return head;
    }
    end = end.next;
  }
  // 反转前 k 个元素
  let reverseHead = reverse(start, end);
  // 递归反转后面k个元素 , 并前后连接起来
  start.next = reverseKGroup(end, k);
  return reverseHead;
};
function reverse(start, end) {
  let pre = null,
    cur = start,
    nxt = start;
  while (cur != end) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
}

var reverseKGroup = function(head, k) {
  let pre = null;
  let cur = head;
  let p = head;
  for (let i = 0; i < k; i++) {
    if (p == null) return head;
    p = p.next;
  }
  for (let i = 0; i < k; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  head.next = reverseKGroup(cur, k);
  return pre;
};
