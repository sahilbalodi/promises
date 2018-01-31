function alwaysThrows() {
  throw new Error('OH NOES');
}
function iterate(integerAsArgument) {
  console.log(integerAsArgument);
  return integerAsArgument + 1;
}
const promiseFunc = (func) => {
  Promise.resolve(iterate(1)).then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then((number) => {
      alwaysThrows();
      return iterate(number);
    })
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((error) => { console.log(error.messgae); func(error); });
};
module.exports = { alwaysThrows, iterate, promiseFunc };
