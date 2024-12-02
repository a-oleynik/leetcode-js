/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let length = nums.length;
  if (k > length) {
    k = k % length;
  }
  reverse(nums, 0, length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, length - 1);
};

var reverse = function (nums, iFirst, iLast) {
  let temp;
  let last = iFirst + Math.floor((iLast - iFirst + 1) / 2);

  for (let i = iFirst, j = iLast; i < last; i++, j--) {
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
};

// Example 1:
//
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
const nums1 = [1,2,3,4,5,6,7]
console.log(nums1);
rotate(nums1, 3)
console.log(nums1);

// Example 2:
//
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
const nums2 = [-1,-100,3,99]
console.log(nums2);
rotate(nums2, 2)
console.log(nums2);