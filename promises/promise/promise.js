const func = (mock) => {
  setTimeout(() => {
    console.log('TIMED OUT!'); mock();
  }, 300);
};
module.exports = func;
