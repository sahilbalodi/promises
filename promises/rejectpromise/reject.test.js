const func = require('./reject.js');

function onReject(error) {
  expect(error.message).toBe('REJECTED!');
}
describe('function fun ', () => {
  test('should have been called with hey', () => {
    const promise = func();
    promise.then(null, onReject);
  });
});
