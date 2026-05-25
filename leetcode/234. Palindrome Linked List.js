/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  var findMiddle = function (head) {
    let slow = head, fast = head
    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  };

  var reverseList = function (head) {
    let prev = null
    let cur = head
    while (cur) {
      let next = cur.next
      cur.next = prev
      prev = cur
      cur = next
    }
    return prev
  };

  let middleNode = findMiddle(head)
  let reversed = reverseList(middleNode)
  let cur = head
  while (reversed) {
    if (cur.val !== reversed.val) return false
    cur = cur.next
    reversed = reversed.next
  }
  return true


};