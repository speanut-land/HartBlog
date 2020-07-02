const fs = require("fs");
const thunk = (fn) => {
  return function (...args) {
    return function (cb) {
      return fn.call(this, ...args, cb);
    };
  };
};

const readFileThunk = thunk(fs.readFile);
readFileThunk(
  "./arrowFunc.js",
  "utf8"
)((err, msg) => {
  console.log(err, msg);
});
