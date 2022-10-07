function isPalindrome(word) {
  // Write your algorithm here
  const eliminate = /[^A-Za-z0-9]/g;
  let forwards = word.toLowerCase().replace( eliminate, '');
  let backwards = forwards.split('').reverse().join('');
  return forwards === backwards
}

/* 
  Add your pseudocode here
  - make everything lowercase
  -replace unwanted characters
  - reverse order of spelling 
  - check that the forwards vs backwards spellings and
  - return true or flase
*/

/*
  Add written explanation of your solution here
  Write a function that results in a boolean return after checking if a word is the same spelled forwards as it is spelled backwards.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("morning"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
