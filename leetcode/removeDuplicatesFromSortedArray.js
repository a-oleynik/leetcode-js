/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  j = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      nums[++j] = nums[i];
    }
  }
  return ++j;
};

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
const nums1 = [1, 1, 2]
console.log(removeDuplicates(nums1), nums1);

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums2), nums2);
