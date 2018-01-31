function attachFile(firstArgument) {
  if (firstArgument === undefined || firstArgument === '') {
    return null;
  }
  return `DR.${firstArgument}`;
}
module.exports = attachFile;
