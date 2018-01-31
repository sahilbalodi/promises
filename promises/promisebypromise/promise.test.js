const fun = require('./promise.js');

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

describe('function second ', () => {
  test('should return a promise ', () => {
    console.log = jest.fn(console.log);
    setTimeout(() => {
      fun.secondFunc.then(console.log);
      expect(console.log).toHaveBeenCalledWith('1234567890');
    }, 0);
  });
});
