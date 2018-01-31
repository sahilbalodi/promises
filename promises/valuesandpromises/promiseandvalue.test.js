const attachFile = require('./attachfile.js');
const fun = require('./promiseandvalue.js');
// testcase for attachFile
describe('function attachfile', () => {
  test('should return string prepended with dr.', () => {
    expect(attachFile('abcd')).toBe('DR.abcd');
  });
  test('should return string prepended with dr.', () => {
    expect(attachFile('efd')).toBe('DR.efd');
  });
  test('should return string prepended with dr.', () => {
    expect(attachFile('')).toBe(null);
  });
  test('should return string prepended with dr.', () => {
    expect(attachFile()).toBe(null);
  });
});
// testcase for promises
describe('function first ', () => {
  test('should return a promise ', () => {
    expect(fun.firstFunc).toBeInstanceOf(Promise);
  });
});
describe('function second ', () => {
  test('should return a promise ', () => {
    expect(fun.secondFunc).toBeInstanceOf(Promise);
  });
});
