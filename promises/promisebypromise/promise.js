function first() {
  return new Promise((resolve, reject) => {
    resolve('1234567890');
  });
}
function second(key) {
  return new Promise((resolve, reject) => {
    resolve(key);
  });
}
const firstFunction = first();
const secondFunction = firstFunction.then(secretValue => second(secretValue));
secondFunction.then(console.log);
module.exports = { firstFunc: firstFunction, secondFunc: secondFunction };
