/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s === null || t === null || s.length !== t.length) {
    return false;
  }
  const chars = new Array(256);
  chars.fill(0);
  for (let i = 0; i < s.length; i++) {
    chars[s.charCodeAt(i)]++;
    chars[t.charCodeAt(i)]--;
  }
  for (const char of chars) {
    if (char !== 0) {
      return false;
    }
  }
  return true;
};

// Example 1:
//
// Input: s = "anagram", t = "nagaram"
//
// Output: true
const s = "anagram", t = "nagaram";
console.log(isAnagram(s, t));
// Example 2:
//
// Input: s = "rat", t = "car"
//
// Output: false
const s2 = "rat", t2 = "car";
console.log(isAnagram(s2, t2));