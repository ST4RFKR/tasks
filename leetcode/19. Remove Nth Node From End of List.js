/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode
  dummy.next = head

  let f = dummy
  let s = dummy

  for (let i = 0; i <= n; i++) {
    f = f.next;
  }
  while (f) {
    f = f.next
    s = s.next
  }

  s.next = s.next.next
  return dummy.next
};