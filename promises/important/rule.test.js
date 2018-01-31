const objectReturned = require('./importantrule.js');

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
