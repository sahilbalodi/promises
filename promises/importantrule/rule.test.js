const objectReturned = require('./importantrule.js');
const verify = require('./verify.js');

describe('function alwaysThrows', () => {
  test('shoule return error with message OH NOES', () => {
    expect(() => { objectReturned.alwaysThrows(); }).toThrow();
  });
  test('shoule return error with message OH NOES', () => {
    expect(() => { objectReturned.alwaysThrows(); }).toThrowError('OH NOES');
  });
});
describe('function iterate', () => {
  test('shoule return number one greater than arguemnt passed to it', () => {
    expect(objectReturned.iterate(1)).toBe(2);
  });
  test('shoule return number one greater than arguemnt passed to it for negative numbers', () => {
    expect(objectReturned.iterate(-1)).toBe(0);
  });
});
describe('function verify', () => {
  test('shoule return true if number is passed to it', () => {
    expect(verify(1)).toBe(true);
  });
});
