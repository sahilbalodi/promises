function parsePromised(jsonString) {
  const promise1 = new Promise((resolve, reject) => {
    try {
      JSON.parse(jsonString);
    } catch (e) {
      reject(e);
    }
    resolve(JSON.parse(jsonString));
  });
  return promise1;
}
module.exports = parsePromised;
