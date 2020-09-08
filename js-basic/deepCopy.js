function deepCopy(obj) {
  if (typeof obj !== "object") throw "错误啦 ";
  let res = {};
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      res[key] = deepCopy(obj[key]);
    } else {
      res[key] = obj[key];
    }
  }
  return res;
}
function deepClone(obj) {
  if (!obj) return null;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (typeof obj !== "object") {
    return obj;
  }
  var newObj = new obj.__proto__.constructor();
  for (var key in obj) {
    newObj[key] = deepClone(obj[key]);
  }
  return newObj;
}

let ccc = {
  name: "haha",
  fullname: {
    xixi: "xixi",
    math: {
      jj: "jj",
    },
  },
};
console.log(deepCopy(ccc) === ccc);

/* 测试一 */

const obj = {
  foo: {
    name: "foo",
    bar: {
      name: "bar",
      baz: {
        name: "baz",
        aChild: null, //待会让它指向obj.foo
      },
    },
  },
};
// obj.foo.bar.baz.aChild = obj.foo; // foo->bar->baz->aChild->foo 形成环
function cycleDetector(obj) {
  let hasCircle = false;
  let path = [];
  const dfs = function (obj) {
    let keys = Object.entries(obj);
    for (let i = 0; i < keys.length; i++) {
      let [_, value] = keys[i];
      if (typeof value === "object" && value) {
        let index = path.indexOf(value);
        if (index > -1) {
          hasCircle = true;
          break;
        } else {
          path.push(value);
          dfs(value);
          path.pop();
        }
      }
    }
  };
  dfs(obj);
  return hasCircle;
}

console.log(cycleDetector(obj));
