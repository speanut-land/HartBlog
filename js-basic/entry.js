const entry = {
  "a.b.c.dd": "abcdd",
  "a.d.xx": "adxx",
  "a.e": "ae",
};
var entry2 = {
  a: {
    b: {
      c: {
        dd: "abcdd",
      },
    },
    d: {
      xx: "adxx",
    },
    e: "ae",
  },
};
const changObjStructureOfNormal = (output) => {
  const res = {};
  for (const key of Object.keys(output)) {
    const everyKey = key.split(".");
    everyKey.reduce((pre, next, index, array) => {
      if (index === array.length - 1) {
        pre[next] = output[key];
        return;
      }
      pre[next] = pre[next] || {};
      return pre[next];
    }, res);
  }
  return res;
};
function flatObj(obj, parentKey = "", result = {}) {
  for (const key of Object.keys(obj)) {
    let keyName = `${parentKey}${key}`;
    if (typeof obj[key] === "object") flatObj(obj[key], keyName + ".", result);
    else result[keyName] = obj[key];
  }
  return result;
}
console.log(changObjStructureOfNormal(entry));
console.log(flatObj(entry2));
