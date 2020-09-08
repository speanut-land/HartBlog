/**
 * 获取对象路径
 *
 */
const data = { a: { b: [{}, { c: 0 }] } };
function findPath(obj, path) {
  let pathList = path.split(".");
  let i = 0;
  while (i < pathList.length) {
    if (obj[pathList[i]] !== undefined) {
      obj = obj[pathList[i]];
      i++;
    } else {
      return obj;
    }
  }
  return obj;
}
console.log(findPath(data, "a.b.1"));
