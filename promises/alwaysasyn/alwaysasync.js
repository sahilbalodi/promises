module.exports = () => {
  const promise = new Promise((resolve, reject) => {
    resolve('PROMISE VALUE');
  });
  return promise;
};
