const data = { a: { b: [{}, { c: 0 }] } };
function findPath(obj, path) {
  let pathList = path.split(".");
  let node = obj;
  let i = 0;
  while (i < pathList.length) {
    if (node[pathList[i]] !== undefined) {
      node = node[pathList[i]];
      i++;
    } else {
      return node;
    }
  }
  return node;
}
console.log(findPath(data, "a.b.1.c"));
