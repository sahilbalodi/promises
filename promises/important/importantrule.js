function alwaysThrows() {
  throw new Error('OH NOES');
}
function iterate(integerAsArgument) {
  console.log(integerAsArgument);
  return integerAsArgument + 1;
}
module.exports = { alwaysThrows, iterate };
