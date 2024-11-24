// Reverse a string

const reverseString = (str) => {
  let arr = str.split("");
  arr.reverse();
  return arr.join("")
}

console.log(reverseString("Hello World1!"))

function reverseString2(str) {
  let reversed = ''
  for (const character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

console.log(reverseString2("Hello World2!"))

function reverseString3(str) {
  let reversed = ''
  for (let i = str.length - 1; i > -1 ; i--) {
    
  }
  for (const character of str) {
    reversed = character + reversed;
  }
  return reversed;
}