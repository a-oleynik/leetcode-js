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
  while (fast) {
    if (fast.next) {
      fast = fast.next.next;
    } else {
      break;
    }
    slow = slow.next;
  }
  return slow;
};

// Helper function to create a linked list node
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// Example 1: [1,2,3,4,5] -> Expected output: node with value 3
let head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log("Example 1 - Input: [1,2,3,4,5]");
console.log("Output:", printList(middleNode(head1))); // Should be [3,4,5]

// Example 2: [1,2,3,4,5,6] -> Expected output: node with value 4
let head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
console.log("Example 2 - Input: [1,2,3,4,5,6]");
console.log("Output:", printList(middleNode(head2))); // Should be [4,5,6]

// Example 3: [1] -> Expected output: node with value 1
let head3 = new ListNode(1);
console.log("Example 3 - Input: [1]");
console.log("Output:", printList(middleNode(head3))); // Should be [1]

// Example 4: [1,2] -> Expected output: node with value 2
let head4 = new ListNode(1, new ListNode(2));
console.log("Example 4 - Input: [1,2]");
console.log("Output:", printList(middleNode(head4))); // Should be [2]

// Helper function to create linked list from array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to print linked list
function printList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}