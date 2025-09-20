/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let slow = head.next;
  let fast = head.next.next;
  while (fast != null) {
    if (fast.next != null) {
      fast = fast.next.next;
    } else {
      break;
    }
    slow = slow.next;
  }
  return slow;
};