function isPalindrome(word) {
  // Write your algorithm here
  let reverse = word.split("").reverse().join("");
    return word === reverse;

}

/* 
  split word
  if split word == reverse (splitword)
  return true
  else
  false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
