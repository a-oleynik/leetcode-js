/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * Iterative with two pointers (prev, curr)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let previous = null;
  let next;
  while (head != null) {
    next = head.next;
    head.next = previous;
    previous = head;
    head = next;
  }
  return previous;
};

// Test cases
const testCases = [
  {head: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1]},
  {head: [1, 2], expected: [2, 1]},
  {head: [1], expected: [1]},
  {head: [], expected: []}
];

// Function to test reverseList
function testReverseList() {
  testCases.forEach(({head, expected}, index) => {
    const headNode = createLinkedList(head);
    const result = reverseList(headNode);
    const resultArr = linkedListToArray(result);
    console.log(`Test Case ${index + 1}:`);
    console.log(`head: ${JSON.stringify(head)}`);
    console.log(`reverseList: ${JSON.stringify(resultArr)} (Expected: ${JSON.stringify(expected)})`);
    console.log('---');
  });
}

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

function linkedListToArray(head) {
  const result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

testReverseList();