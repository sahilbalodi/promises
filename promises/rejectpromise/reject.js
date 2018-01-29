const func = () => {
  const promise = new Promise(((fulfill, reject) => {
  // Your solution here
    setTimeout(reject, 300, new Error('REJECTED!'));
  }));
  return promise;
};
module.exports = func;
