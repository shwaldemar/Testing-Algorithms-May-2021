/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.

Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.
*/

//Tests
const test1 = ['hello', 'Hello'];
const test2 = ['hello', 'hey'];
const test3 = ['Alien', 'line'];

const mutationOfString = (stringArray) => {
  let target = stringArray[0].toLowerCase();
  let test = stringArray[1].toLowerCase();
  let result = [target, test];
  return result;
};

//test data
const algDataTest = () => {
  let dataTest1Result = mutationOfString(test1);
  let dataTest2Result = mutationOfString(test2);
  let dataTest3Result = mutationOfString(test3);
  let results = [dataTest1Result, dataTest2Result, dataTest3Result];
  return results;
};

//call test algDataTest.
console.log(algDataTest(test1, test2, test3));
