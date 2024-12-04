/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const queue = [];
  let currentChar;
  let check;
  for (let i = 0; i < s.length; i++) {
    currentChar = s.charAt(i);
    if (currentChar === '(' || currentChar === '[' || currentChar === '{') {
      queue.push(currentChar);
      continue;
    }
    if (queue.length === 0)
      return false;

    switch (currentChar) {
      case ')':
        check = queue.pop();
        if (check === '{' || check === '[')
          return false;
        break;

      case '}':
        check = queue.pop();
        if (check === '(' || check === '[')
          return false;
        break;

      case ']':
        check = queue.pop();
        if (check === '(' || check === '{')
          return false;
        break;
    }

  }
  return queue.length === 0;
};

// Example 1:
//
// Input: s = "()"
//
// Output: true
let s = "()"
console.log(s);
console.log(isValid(s));
// Example 2:
//
// Input: s = "()[]{}"
//
// Output: true
s = "()[]{}"
console.log(s);
console.log(isValid(s));
// Example 3:
//
// Input: s = "(]"
//
// Output: false
s = "(]"
console.log(s);
console.log(isValid(s));
// Example 4:
//
// Input: s = "([])"
//
// Output: true
s = "([])"
console.log(s);
console.log(isValid(s));