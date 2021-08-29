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

};
