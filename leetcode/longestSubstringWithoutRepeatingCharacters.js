/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === null || s.length === 0) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  let maxLength = 0;
  const visited = new Array(256);
  let left = 0;
  let right = 0;
  while (right < s.length) {
    if (visited[s.charAt(right)]) {
      while (s.charAt(left) !== s.charAt(right)) {
        visited[s.charAt(left)] = false;
        left++;
      }
      left++;
    } else {
      visited[s.charAt(right)] = true;
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
  }
  return maxLength;
};

// Example 1:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
const s1 = "abcabcbb"
console.log(lengthOfLongestSubstring(s1));

// Example 2:
//
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
const s2 = "bbbbb"
console.log(lengthOfLongestSubstring(s2));


// Example 3:
//
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
const s3 = "pwwkew"
console.log(lengthOfLongestSubstring(s3));