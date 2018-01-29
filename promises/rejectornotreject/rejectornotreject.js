module.exports = () => {
  const promise = new Promise(((fulfill, reject) => {
  // Your solution here

    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
  }));
  return promise;
};
