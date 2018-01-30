const func = require('./promise.js');
const verify = require('./verify.js');

describe('function console.log', () => {
  test('should have been called with timeout', (done) => {
    console.log = jest.fn(console.log);
    const mock = jest.fn(() => {
      expect(console.log).toHaveBeenCalledWith('TIMED OUT!');
      done();
    });
    func(mock);
  });
});

describe('function verify', () => {
  test('should have been called with mock', () => {
    const mock = jest.fn(() => {
    });
    expect(verify(mock)).toBe(true);
  });
  test('should have been called with mock', () => {
    expect(verify('abc')).toBe(false);
  });
  test('should have been called with mock', () => {
    expect(verify('')).toBe(false);
  });
  test('should have been called with mock', () => {
    expect(verify()).toBe(false);
  });
  test('should have been called with mock', () => {
    expect(verify(2)).toBe(false);
  });
});
