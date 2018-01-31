const objectReturned = require('./importantrule.js');
const verify = require('./verify.js');

describe('function alwaysThrows', () => {
  test('shoule return error with message OH NOES', () => {
    expect(objectReturned.alwaysThrows().message).toBe('OH NOES');
  });
  test('shoule return error with message OH NOES', () => {
    expect(objectReturned.alwaysThrows()).toBeInstanceOf(Error);
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
  test('shoule return null if number is  not passed to it', () => {
    expect(verify()).toBe(null);
  });
  test('shoule return null if infinity is passed to it', () => {
    expect(verify(Infinity)).toBe(null);
  });
  test('shoule return null if null is passed to it', () => {
    expect(verify(null)).toBe(null);
  });
  test('shoule return null if null is passed to it', () => {
    expect(verify(-Infinity)).toBe(null);
  });
});
