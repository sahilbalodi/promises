// const attachTitle = require('./attachfile.js');
function attachTitle(firstArgument) {
  return `DR. ${firstArgument}`;
}
const promise1 = Promise.resolve('MANHATTAN');
// const promise1 = new Promise((resolve, reject) => {
//  resolve('MANHATTAN');
// });
// console.log(promise1);
const promise2 = promise1.then(attachTitle).then(console.log);
module.exports = { firstFunc: promise1, secondFunc: promise2 };
// console.log('hey');
