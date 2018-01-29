function verify(functionpassed) {
  if (typeof (functionpassed) === 'function') { return true; }
  return false;
}
module.exports = verify;
