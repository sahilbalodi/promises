const alwaysThrows = require('./importantrule.js');

describe('function alwaysThrows', () => {
  test('shoule return error with message OH NOES', () => {
    expect(alwaysThrows().message).toBe('OH NOES');
  });
  test('shoule return error with message OH NOES', () => {
    expect(alwaysThrows()).toBeInstanceOf(Error);
  });
});
