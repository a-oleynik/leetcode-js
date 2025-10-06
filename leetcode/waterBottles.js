/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let totalBottles = numBottles;
  let remain = 0;
  while (numBottles >= numExchange) {
    remain = numBottles % numExchange;
    numBottles = Math.floor(numBottles / numExchange);
    totalBottles = totalBottles + numBottles;
    numBottles = numBottles + remain;
  }
  return totalBottles;
};

// Example 1
console.log(numWaterBottles(9, 3)); // Expected output: 13
// Explanation: You can exchange 3 empty bottles for 1 full bottle.
// Total bottles drunk: 9 + 3 + 1 = 13

// Example 2
console.log(numWaterBottles(15, 4)); // Expected output: 19
// Explanation: You can exchange 4 empty bottles for 1 full bottle.
// Total bottles drunk: 15 + 3 + 1 = 19

// Example 3
console.log(numWaterBottles(5, 5)); // Expected output: 6
// Explanation: You can exchange 5 empty bottles for 1 full bottle.
// Total bottles drunk: 5 + 1 = 6

// Example 4
console.log(numWaterBottles(2, 3)); // Expected output: 2
// Explanation: You cannot exchange because you don't have enough empty bottles.
// Total bottles drunk: 2
