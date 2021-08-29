module.exports = {
  /* SENTENSIFY INSTRUCTIONS
  Use the join method (among others) inside
  the sentensify function to make a sentence
  from the words in the string str.

  The function should return a string.
  For example, "I-like-Star-Wars" would be
  converted to "I like Star Wars".
  For this challenge, do not use the replace method.
  */

  sentensify: function (str) {
    let result = str.split(/\W/).join(' ');
    return result;

    //Using Regex \W to split str on non word
    //characters (i.e. not from a to z, A to Z, 0 to 9).
    //Then using join(' ') to rejoin the string replacing
    // \W characters with spaces.
  },

  /* SUMALL INSTRUCTIONS
  We'll pass you an array of two numbers.
  Return the sum of those two numbers plus
  the sum of all the numbers between them.
  The lowest number will not always come first.

  E.G. sumAll([4,1]) should return 10
  because sum of all the numbers between 1 and 4
  (both inclusive) is 10.
  */

  sumAll: function (arr) {
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
    let sum = 0;

    for (let i = min; i <= max; i++) {
      sum += i;
    };

    return sum;
  },

  /*STRINGMUTATION INSTRUCTIONS
  Return true if the string in the first element
  of the array contains all of the letters of the
  string in the second element of the array.

  For example, ["hello", "Hello"], should return
  true because all of the letters in the second
  string are present in the first, ignoring case.

  The arguments ["hello", "hey"] should return false
  because the string "hello" does not contain a "y".

  Lastly, ["Alien", "line"], should return true
  because all of the letters in "line" are present
  in "Alien".
*/

  mutation: function (arr) {
    let target = arr[0].toLowerCase();
    let test = arr[1].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) {
        return false;}
    };

    return true;
  },

};
