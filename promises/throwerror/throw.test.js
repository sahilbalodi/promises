const parsePromised = require('./throwerror.js');

describe('function parsePromised ', () => {
  test('should return a promise ', () => {
    expect(parsePromised()).toBeInstanceOf(Promise);
  });
  test('should return a promise ', () => {
    expect(parsePromised('{ "name" : "abcd" }')).toBeInstanceOf(Promise);
  });
});
describe('function console.log ', () => {
  test('should be called with json ', (done) => {
    console.log = jest.fn(console.log);
    parsePromised('{ "name" : "abcd" }').then((message) => {
      console.log(message);
      expect(console.log).toHaveBeenCalledWith(message);
      done();
    }, null);
  });
  test('should be called with error ', (done) => {
    console.log = jest.fn(console.log);
    parsePromised('{ name "abcd" }').then(null, () => {
      console.log('error occurred');
      expect(console.log).toHaveBeenCalledWith('error occurred');
      done();
    });
  });
});
