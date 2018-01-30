const promise1 = new Promise((resolve, reject) => {
  resolve('resolved');
});
const promise2 = Promise.resolve('rejected');
promise2.catch(console.log);
module.exports = { promiseA: promise1, promiseB: promise2 };
