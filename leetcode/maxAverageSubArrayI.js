/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = nums[0];
  for(let i = 1; i < k; i++){
    sum += nums[i];
  }
  let maxSum = sum;
  for(let i = k; i < nums.length; i++){
    sum = sum - nums[i - k] + nums[i];
    /*if(sum > maxSum){
        maxSum = sum;
    }*/
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum/k;
};

// Example 1
const nums1 = [1, 12, -5, -6, 50, 3];
const k1 = 4;
console.log(findMaxAverage(nums1, k1)); // Output: 12.75

// Example 2
const nums2 = [5];
const k2 = 1;
console.log(findMaxAverage(nums2, k2)); // Output: 5