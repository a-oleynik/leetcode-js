/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];
  let current;
  let previous = [1];
  result.push(previous);
  for(let i = 1; i < numRows; i++){
    current = [];
    current.push(1);
    for(let j = 1; j < i; j++){
      current.push(previous[j - 1] + previous[j]);
    }
    current.push(1);
    result.push(current);
    previous = current;
  }
  return result;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate2 = function(numRows) {
  let current = [1];
  let result = [current];
  let c;
  for(let i = 1; i < numRows; i++){
    c = 1;
    current = [];
    for (let j = 0; j < i; j++) {
      current.push(c);
      c = c * (i - j);
      c = c / (j + 1);
    }
    current.push(1);
    result.push(current);
  }
  return result;
};

const testCases = [
  { numRows: 1, expected: [[1]] },
  { numRows: 2, expected: [[1], [1,1]] },
  { numRows: 3, expected: [[1], [1,1], [1,2,1]] },
  { numRows: 5, expected: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]] }
];

function testPascalsTriangle() {
  testCases.forEach(({ numRows, expected }, idx) => {
    const res1 = generate(numRows);
    const res2 = generate2(numRows);
    console.log(`Test Case ${idx + 1}: numRows = ${numRows}`);
    console.log(`generate:  ${JSON.stringify(res1)} (Expected: ${JSON.stringify(expected)})`);
    console.log(`generate2: ${JSON.stringify(res2)} (Expected: ${JSON.stringify(expected)})`);
    console.log('---');
  });
}

testPascalsTriangle();