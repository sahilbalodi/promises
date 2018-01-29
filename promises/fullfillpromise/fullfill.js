require('es6-promise');

const func = (string) => {
  const promise = new Promise(((fulfill) => {
  // Your solution here
    setTimeout(fulfill, 300, string);
  }));
  return promise;
};

// Your solution here
module.exports = func;
