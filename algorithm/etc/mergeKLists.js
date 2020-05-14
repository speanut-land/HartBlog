/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let n = lists.length;
  if (n == 0) return null;
  let mergeTwoLists = (l1, l2) => {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    if (l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  };
  let merge = (left, right) => {
    if (left == right) return lists[left];
    let mid = Math.floor((left + right) / 2);
    let l1 = merge(left, mid);
    let l2 = merge(mid + 1, right);
    return mergeTwoLists(l1, l2);
  };
  return merge(0, n - 1);
};
