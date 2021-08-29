const assert = require('chai').assert;
const app = require('../app');

describe('sentensify', function () {
  it('returns a string', function () {
    let result = app.sentensify('May-the-force-be-with-you');
    let expected = 'May the force be with you';
    assert.equal(result, expected);
  });
});

describe('sumAll', function () {
  it('returns the correct number', function () {
    let result = app.sumAll([1, 4]);
    let expected = 10;
    assert.equal(result, expected);
  });
});
