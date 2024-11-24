function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let temp1 = l1;
  let temp2 = l2;
  let sum = 0;
  let val1, val2;
  let currentListNode = new ListNode();
  let result = currentListNode;
  let nextNode = currentListNode;
  while (temp1 != null || temp2 != null) {
    val1 = 0;
    val2 = 0;
    if (null != temp1) {
      val1 = temp1.val;
      temp1 = temp1.next;
    }
    if (null != temp2) {
      val2 = temp2.val;
      temp2 = temp2.next;
    }
    sum = sum + val1 + val2;
    nextNode.val = sum % 10;
    sum = Math.floor(sum / 10);

    currentListNode = nextNode;
    currentListNode.next = new ListNode();
    nextNode = currentListNode.next;
  }

  if (sum !== 0) {
    nextNode.val = sum;
    currentListNode = nextNode;
  }
  currentListNode.next = null;
  return result;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Create linked lists l1 and l2
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);

// Invoke the addTwoNumbers function
let result = addTwoNumbers(l1, l2);

// Helper function to print the linked list
function printLinkedList(node) {
  let arr = [];
  while (node !== null) {
    arr.push(node.val);
    node = node.next;
  }
  console.log(arr.join(' -> '));
}

// Print the result
printLinkedList(result);