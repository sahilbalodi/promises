function parsePromised(jsonString) {
  const promise1 = new Promise((resolve, reject) => {
    try {
      const parsedObject = JSON.parse(jsonString);
      resolve(parsedObject);
    } catch (e) {
      reject(e);
    }
  });
  return promise1;
}
console.log(parsePromised());
module.exports = parsePromised;
