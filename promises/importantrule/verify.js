function verify(number) {
  if ((typeof (number) === 'number') && ((number > -Infinity) && (number < Infinity))) { return true; }
  return null;
}
module.exports = verify;
