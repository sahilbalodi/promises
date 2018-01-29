const func = require('./fullfill.js');
const verify = require('./verify.js');

describe('function fun ', () => {
  test('should have been called with hey', () => {
    const promise = func('hey');
    promise.then((content) => {
      expect(content).toBe('hey');
    });
  });
  test('should not have been called with hey', () => {
    const promise = func('hi');
    promise.then((content) => {
      expect(content).toBe('hey');
    });
  });
});
describe('function verify ', () => {
  test('should return true if string is passed to it', () => {
    expect(verify('hey')).toBe(true);
  });
  test('should return false if string is not passed to it', () => {
    expect(verify(1)).toBe(false);
  });
  test('should return true if emptystring is passed to it', () => {
    expect(verify('')).toBe(true);
  });
  test('should return false if nothing is passed to it', () => {
    expect(verify()).toBe(false);
  });
});
