const returnPromise = require('./shortcuts.js');

describe('function returnPromise returns promise1 and ', () => {
  test('should call console.log with Resolved', () => {
    const promise = returnPromise.promiseA;
    console.log = jest.fn(console.log);
    promise.catch((data) => {
      console.log(data);
      expect(console.log).toHaveBeenCalledWith('resolved');
    });
  });
  test('should call console.log with Rejected', () => {
    const promise = returnPromise.promiseB;
    console.log = jest.fn(console.log);
    promise.catch((data) => {
      console.log(data);
      expect(console.log).toHaveBeenCalledWith('rejected');
    });
  });
});
describe('function returnPromise should contain an object', () => {
  test('promiseA which should be a promise', () => {
    const promise = returnPromise.promiseA;
    expect(promise).toBeInstanceOf(Promise);
  });
  test('promiseB which should be a promise', () => {
    const promise = returnPromise.promiseB;
    expect(promise).toBeInstanceOf(Promise);
  });
});
