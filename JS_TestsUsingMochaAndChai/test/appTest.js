const assert = require('chai').assert;
const app = require('../app');

describe('sentensify', function () {
  it('returns a string', function () {
    let result = app.sentensify('May-the-force-be-with-you');
    let expected = 'May the force be with you';
    console.log(`result: ${result}, expected: ${expected}`);
    assert.equal(result, expected);
  });
});

describe('sumAll', function () {
  it('returns the correct number', function () {
    let result = app.sumAll([1, 4]);
    let expected = 10;
    console.log(`result: ${result}, expected: ${expected}`);
    assert.equal(result, expected);
  });

});

describe('mutation', function () {
  it('returns true', function () {
    let result = app.mutation(['Hello', 'hello']);
    let expected = true;
    console.log(`result: ${result}, expected: ${expected}`);
    assert.equal(result, expected);
  });

  it('returns false', function () {
    let result = app.mutation(['Hello', 'hey']);
    let expected = false;
    console.log(`result: ${result}, expected: ${expected}`);
    assert.equal(result, expected);
  });

  it('returns true', function () {
    let result = app.mutation(['Alien', 'line']);
    let expected = true;
    console.log(`result: ${result}, expected: ${expected}`);
    assert.equal(result, expected);
  });
});
