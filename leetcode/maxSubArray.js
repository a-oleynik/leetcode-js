/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (map.has(num2)) {
      return [i, map.get(num2)];
    }
    map.set(num1, i);
  }
};

// Test cases
const testCases = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
  { nums: [1, 2, 3, 4, 5], target: 9, expected: [3, 4] },
  { nums: [1, 2, 3, 4, 5], target: 10, expected: null }
];

// Function to test twoSum and twoSum2
function testTwoSumFunctions() {
  testCases.forEach(({ nums, target, expected }, index) => {
    const result1 = twoSum(nums, target);
    const result2 = twoSum2(nums, target);
    console.log(`Test Case ${index + 1}:`);
    console.log(`nums: ${JSON.stringify(nums)}`);
    console.log(`target: ${target}`);
    console.log(`twoSum: ${JSON.stringify(result1)} (Expected: ${JSON.stringify(expected)})`);
    console.log(`twoSum2: ${JSON.stringify(result2)} (Expected: ${JSON.stringify(expected)})`);
    console.log('---');
  });
}

// Run the tests
testTwoSumFunctions();