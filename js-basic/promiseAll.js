Promise._all = function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!isArray(promises)) {
      return reject(new TypeError("arguments must be an array"));
    }
    var count = 0;
    var len = promises.length;
    var resolvedValues = [];
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
