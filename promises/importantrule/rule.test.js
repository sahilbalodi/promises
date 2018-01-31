const objectReturned = require('./importantrule.js');
const verify = require('./verify.js');

describe('function alwaysThrows', () => {
  test('should return error with message OH NOES', () => {
    expect(() => { objectReturned.alwaysThrows(); }).toThrow();
  });
  test('should return error with message OH NOES', () => {
    expect(() => { objectReturned.alwaysThrows(); }).toThrowError('OH NOES');
  });
});
describe('function iterate', () => {
  test('should return number one greater than arguemnt passed to it', () => {
    expect(objectReturned.iterate(1)).toBe(2);
  });
  test('should return number one greater than arguemnt passed to it for negative numbers', () => {
    expect(objectReturned.iterate(-1)).toBe(0);
  });
});
describe('function verify', () => {
  test('should return true if number is passed to it', () => {
    expect(verify(1)).toBe(true);
  });
  test('should return true if number is passed to it', () => {
    expect(verify(-Infinity)).toBe(null);
  });
  test('should return true if number is passed to it', () => {
    expect(verify()).toBe(null);
  });
  test('should return true if number is passed to it', () => {
    expect(null).toBe(null);
  });
});
describe('function promiseFunc', () => {
  test('should throw Error', (done) => {
    function callback(error) {
      expect(error).toBeInstanceOf(Error);
      done();
    }
    objectReturned.promiseFunc(callback);
  });
  test('should throw Error', (done) => {
    function callback(error) {
      expect(error.message).toBe('OH NOES');
      done();
    }
    objectReturned.promiseFunc(callback);
  });
});
