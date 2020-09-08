Promise._all = function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("arguments must be an array"));
    }
    let count = 0;
    let len = promises.length;
    let resolvedValues = [];
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(
        (res) => {
          count++;
          resolvedValues[i] = res;
          if (count == len) {
            return resolve(resolvedValues);
          }
        },
        (rej) => reject(rej)
      );
    }
  });
};

Promise._allSettled = function (promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("arguments must be an array"));
    }
    let resolvedCounter = 0;
    let promiseNum = promises.length;
    let resolvedValues = [];
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          resolvedCounter++;
          resolvedValues[i] = value;
          if (resolvedCounter == promiseNum) {
            return resolve(resolvedValues);
          }
        },
        (reason) => {
          resolvedCounter++;
          resolvedValues[i] = reason;
          if (resolvedCounter == promiseNum) {
            return reject(reason);
          }
        }
      );
    }
  });
};
