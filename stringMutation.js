/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.

Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.
*/

//Global Variables
let test1 = ['hello', 'Hello'].join('-').toLowerCase().split('-');
let test2 = ['hello', 'hey'].join('-').toLowerCase().split('-');
let test3 = ['Alien', 'line'].join('-').toLowerCase().split('-');

//Inital data check commented out after test passed - console.log(test1, test2, test3);

//TEST FUNCTION:
//'mutationOfString' takes 1 parameter testArr...
//Selected when the function is called 👇 by the user.

const mutationOfString = (testArr) /* tests = Array of tests */ => {
  //PART 1.
  //ES6 CLONE PARAM ARRAY
  let testArr1 = [...testArr]

  //Prepare variable 'target' to see whether it has all the others chars.
  let target = testArr1[0].split('');

  /*
  DEBUG TEST COMMENTED OUT AFTER PASSED -
  console.log([
      'PART 1. mutationOfString:',
      'Show function input testArr1[0]:',
      target,
      typeof target,
    ]);
    */

  //Prepare variable hypothesis to loop through & see if the other variable has all it's chars.
  let hypothesis = testArr1[1].split('');

  /*
  DEBUG TEST COMMENTED OUT AFTER PASSED - console.log([
    'PART 1.1 mutationOfString:',
    'Show function input testArr1[1]',
    hypothesis,
    typeof hypothesis,
  ]);
  */

  /*
  DEBUG TEST COMMENTED OUT AFTER PASSED - console.log([
    'PART 1.2 mutationOfString:',
    'Show variable: testArr1 & typeof testArr1',
    testArr1,
    typeof testArr1,
  ]);
  */

  //Prepare variable final in preparation for assignment in Internal Function 'testing1'
  let final =  [testArr1, 'Result:', false];

  /*
  DEBUG TEST COMMENTED OUT AFTER PASSED - console.log([
    'PART 1.3 mutationOfString:',
    'Show variable: final',
    final,
    typeof final,
    final.testArr1,
    typeof final.testArr1,
  ]);
  */

  //ES6 Destructure array to variables prepared ☝️ above (Line 27 target & Line 41 hypothesis).
  [target, hypothesis] = testArr1;

  /*
  DEBUG TEST COMMENTED OUT AFTER PASSED -console.log([`PART 1.3.1 'mutationOfString':`, `Show variables & types:`, target]);
  */

  //INTERNAL TEST FUNCTION: 'testing1' takes 1 parameter testArr1 containing 1 array test1.
  function testing1(testArr1) {

    /*
    DEBUG TEST COMMENTED OUT AFTER PASSED -
    console.log([
      'PART 1.4 mutationOfString:',
      `Show variable: TestArr1 param INTERNAL FUNCTION 'testing1'`,
      target,
      typeof target,
      hypothesis,
      typeof hypothesis,
      final.testArr1,
      typeof final.testArr1,
    ]);
    */

    //START: FOR LOOP: OF INTERNAL TEST FUNCTION: 'testing1'
    //Function Array/Param: element2 'TestArr1[1]'
    //hypothesis & iterate over contents & check whether...
    //param element1 has an index of that Char.
    for (let i = 0; i < hypothesis.length; i++) {
      if (target.indexOf(hypothesis[i]) < 0) {
        /*If target does not have index no. of same char
        as Loop's i variable... then assign false to final[result].
        */
        final = [testArr1, { result: [false] }];
        // If target does not contain one element in hypothesis return final with false value.
        return final;

        /*
        DEBUG TEST COMMENTED OUT AFTER PASSED -
        console.log([
          `PART 1.5.1 Show variable: final for loop scoped INTERNAL FUNCTION 'testing1'`,
        final,
        typeof final,
        final[0],
        typeof final[0], final[1], typeof final[1],
      ]);
      */

      };

      //If target does have index no. of same char as Loop's
      //i variable then... assign true value to final[result].
      final = [testArr1, { Result: [true] }];

      /*
      DEBUG TEST COMMENTED OUT AFTER PASSED -
      console.log([
        `PART 1.5.2 Show variable: final for loop scoped INTERNAL FUNCTION 'testing1'`,
        final,
        typeof final,
        final[0],
    typeof final[0],
    final[1],
    typeof final[1],
  ]);
  */

    };

    //END:FOR LOOP.

    /*
    COMMENTED OUT WHEN TEST PASSED -
    console.log([
      `PART 1.6 Show variable: final before final return`,
      final,
      typeof final,
      final[0],
      typeof final[0],
      final[1],
      typeof final[1],
    ]);
    */
  };

  //CALL INTERNAL FUNCTION 'testing1'
  testing1(testArr1);

  //FUNCTION RETURN STATEMENT.
  return final;
};

//CALL 'mutationOfString' on test cases individually:
console.log(mutationOfString(test1));

console.log(mutationOfString(test2));

console.log(mutationOfString(test3));
