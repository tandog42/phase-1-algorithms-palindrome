function isPalindrome(word) {
  const newWord = word.split("");
  const revNew = newWord.reverse().join("");
  if (revNew === word) {
    return true;
  } else {
    return false;
  }}

 

/* 
make a function isPalindrome
when you enter an input into the isPalindrome function
if the word is Palindrome
return True
if the word isnt Palindrome
return False

*/

/*
  1. I made a function isPalindrome that takes in a String as an param
  2. I made a variable newWolrd that will take in a our param and for each letter returned will make sub strings and put all the substrings into an array
  3. after i .split() the param i then made a variable revNew that takes our prevouis substring and reverses there order in the array (1st letter becomes last, last letter becoms first)
  after i reverse the order of the substrings i then used .join() that takes all the substrings we have in our array and takes all the seperators out and makes it one string again (backwords)
  4. on line four i took our newly created string(revNew) and if that === the word that we initaily put in as the param
 it will return true 
  6. if our param is not a palindrome we return False

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
