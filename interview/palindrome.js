const palindrome = (str) => {
  return str.split("").reverse().join("") === str;
}

console.log(palindrome("1234321"))