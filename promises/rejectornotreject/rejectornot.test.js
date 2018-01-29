const func = require('./rejectornotreject.js');

function onReject(error) {
  console.log(error.message);
  expect(error.message).toBe('REJECTED!');
}

describe('function func', () => {
  test('should call console.log with i fired', () => {
    const promise = func();
    console.log = jest.fn(console.log);
    promise.then((data) => {
      console.log(data); expect(console.log).toHaveBeenCalledWith('I FIRED');
    }, onReject);
  });
});
