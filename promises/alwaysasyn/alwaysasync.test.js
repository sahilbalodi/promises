const returnPromise = require('./alwaysasync.js');


describe('function returnPromise', () => {
  test('should call console.log with i fired', () => {
    const promise = returnPromise();
    console.log = jest.fn(console.log);
    promise.then((data) => {
      console.log(data);
      expect(console.log).toHaveBeenCalledWith(data);
    });
    console.log('MAIN PROGRAM');
  });
});
