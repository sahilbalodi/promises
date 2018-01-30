const returnPromise = require('./alwaysasync.js');


describe('function returnPromise', () => {
  test('should call console.log with PROMISE VALUE', () => {
    const promise = returnPromise();
    console.log = jest.fn(console.log);
    promise.then((data) => {
      console.log(data);
      expect(console.log).toHaveBeenCalledWith('PROMISE VALUE');
    });
    console.log('MAIN PROGRAM');
  });
});
describe('function returnPromise', () => {
  test('should return a promise', () => {
    const promise = returnPromise();
    expect(promise).toBeInstanceOf(Promise);
  });
});
