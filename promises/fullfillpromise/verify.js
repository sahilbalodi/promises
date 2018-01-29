function verify(string) {
  if (typeof (string) === 'string') { return true; }
  return false;
}
module.exports = verify;
