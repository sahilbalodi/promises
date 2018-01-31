const objectReturned = require('./importantrule.js');

describe('function alwaysThrows', () => {
  test('shoule return error with message OH NOES', () => {
    expect(objectReturned.alwaysThrows().message).toBe('OH NOES');
  });
  test('shoule return error with message OH NOES', () => {
    expect(objectReturned.alwaysThrows()).toBeInstanceOf(Error);
  });
});
