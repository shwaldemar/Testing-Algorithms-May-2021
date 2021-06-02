/*-------------------------------BRIEF------------------------------------
Return true if the string in the first element of the
array contains all of the letters of the string in the
second element of the array.
The arguments/tests:
1. ['hello', 'Hello'], should return TRUE because all of
the letters in the second string are present in the first,
ignoring case.
['hello', 'hey'] should return FALSE because the string
'hello' does not contain a 'y'.
['Alien', 'line'], should return TRUE because all of the
letters in 'line' are present in 'Alien'.
-------------------------------END OF BRIEF-------------------------------*/
/*-----------------------------FORWARD/NOTES & EXPLANAITION START---------
1.0 This is a straight forward algorithm I have used to
layout methodical & rigorous approach to development.
Also I have used it as a showcase for use of ES6 &
awareness of latency (using a for loop over enumerators…
At/In this scale no diff/bigData…DIFF).
1.1 I Have used strings, arrays and objects throughout to
rangle data in to suitable format for the tasks in hand. N.B.
...I will go on to chain ".methods" & "enumerators"[map, filter,
reduce, every...] in other algorithms in this "TestingAndAlgorithms"
folder.
2. Test data/arrays/objects are prepared at outset & in advance of processing throughout.
- Arrays are joined(‘-‘)
- changed to lowercase
- Split(‘-‘)
2. Main function takes 1 test array.
3. Detailed COMMENTS on what happens at each stage are
included throughout.
4. Numbered tests/logs are included throughout to display
all variables & types. N.B. commented out as they passed.
5. TestArr is cloned using ES6 - testArr1 = […testArr].
6. Internal function ‘testing1(testArray1)’
variables[target(ARRAY), hypothesis(ARRAY)] are prepared
in advance with split(‘’).
The 'final'(ARRAY) variable RETURNED is also prepared in
advance. It contains: [testArr1, ‘Result:’, false].
7. testArray1 is destructured using ES6 to make the
variables easily available for the Internal function
‘testing1(testArray1)'.
8. A for loop is used to iterate through the elements
of the hypothesis array & confirm whether the target
array contains all. If one is not there it returns the
final variable with a false value…
final = [testArr1, ‘Result’, false].
Otherwise it continues until complete… If all elements
match… the final variable is assigned a true boolean value.
9. Outside the Loop the internal function testing1 is
called with testing1(testArr1) & final is returned once
data prep, iteration & comparison are completed.
10. The tests are called using/log and they are called
individually to ensure max chance of spotting any anomalies
with data & logic.
11. I would normally go on to create a function to run as many
tests... However this is a pretty basic algorithm & I should
move on to testing a more concise version with Mocha.
12. Mocha is a testing library for Node. js, created to be a
simple, extensible, and fast. It's used for unit and
integration testing, and it's a great candidate for BDD
- Behavior Driven Development.
13.0 QUESTION - Now... a function with an internal function
that is recursively called before the final return statement?
... Not great design eh? Wouldn't be better to separate
that/"split that out" as a named function that can still be
called before the final return statement?
13.1 ANSWER - YUP! However it neatly demonstrates how one
deals with "tangled knitting" in a structured fashion...
And... having slept on it... The understanding to recognise
this and consider how it might be structured in a more logical
AND... TESTABLE fashion... Hard to rigorously test a function
that is nested/contained within another... AIN'T IT?
14.0 I have pushed this all up to GitHub demonstrating basic
awareness and utilisation of version control.

VERSION CONTROL - Definition: In software engineering, version
control is a class of systems responsible for managing changes
to computer programs, documents, large web sites, or other
collections of information. Version control is a component of
software configuration management.

Version Control Systems are process management systems which
maintain changes recorded in a file or set of files over period
of time. Each change is maintained as a version.

Users can track specific versions later. Version control systems
are also called as revision control systems. Revision control
systems work as independent standalone applications. Applications
like spreadsheets and word processors have control mechanisms. The
unique features of version control system/ revision control system
are as follows:

- Up to date history is available for the document and file types. 
It does not require any other repository systems. The repositories
can be cloned as per the need and availability. This is extremely
helpful in case of failure and accidental deletions. VCS includes
tag system which helps in differentiating between alpha, beta or
various release versions for different documents.
For example, changes made in code base among developers include
version control system for tracking changes with specific lines.
The various types of the version control systems are: 
1. Local Version Control System.
 2. Centralized Version Control System.
3. Distributed Version Control System.


14.1 For this folder I am using GitHub version control system. I could just as easily used GitBucket or another version control system. There are many!
14.2 Now most active development and enhancement normally happens on a branch off Master. This is done to protect the integrity & functionality of fully functional operational code.
14.3 Better Version Control Structure & practice

14.4 VERSION CONTROL BRANCH STRUCTURE:
14.4.1. Master (Code that is running efficiently - TO BE RESPECTED!)

14.4.2. Development (Code that is ready to integrate/merge)

14.4.3. Feature Branches (Specifically named {E.G.Separate nested function}.
In any codebase there will be many!).
N.B. These are used to make specific system enhancements and... Once/when fully tested in isolation are ready for respectful & careful testing & merge with the development branch...And from there... ready for respectful & careful testing & merge with the Master branch.

-------------------------------FORWARD/NOTES & EXPLANAITION END-----------
*/

//Global Variables
let test1 = ['hello', 'Hello'].join('-').toLowerCase().split('-');
let test2 = ['hello', 'hey'].join('-').toLowerCase().split('-');
let test3 = ['Alien', 'line'].join('-').toLowerCase().split('-');

/*Inital data check commented out after test passed -
console.log(test1, test2, test3);*/

//TEST FUNCTION:
//'mutationOfString' takes 1 parameter testArr...
//Selected when the function is called 👇 by the user.

const mutationOfString = (testArr) /* tests = Array of tests */ => {
  //PART 1.
  //ES6 CLONE PARAM testArr to testArr1
  let testArr1 = [...testArr];

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

  /*Prepare variable hypothesis to loop through & see if the other
  variable has all it's chars.*/
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

  /*Prepare variable final in preparation for assignment in
  Internal Function 'testing1'*/
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

  /*ES6 Destructure array to variables prepared ☝️ above (Line 27
  target & Line 41 hypothesis).
  [target, hypothesis] = testArr1;*/

  /*
  DEBUG TEST COMMENTED OUT AFTER PASSED -console.log([`PART 1.3.1
  'mutationOfString':`, `Show variables & types:`, target]);
  */

  /*INTERNAL TEST FUNCTION: 'testing1' takes 1 parameter testArr1
  containing 1 array test1.*/
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
        /*If target does not contain one element in hypothesis
        return final with false value.*/
        return final;

        /*
        DEBUG TEST COMMENTED OUT AFTER PASSED -
        console.log([
          `PART 1.5.1 Show variable: final for loop scoped
          INTERNAL FUNCTION 'testing1'`,
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
        `PART 1.5.2 Show variable: final for loop scoped INTERNAL
        FUNCTION 'testing1'`,
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
