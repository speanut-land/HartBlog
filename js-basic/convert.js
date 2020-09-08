const list = [
  { id: 1, name: "A", parentId: 0 },
  { id: 2, name: "B", parentId: 0 },
  { id: 3, name: "C", parentId: 1 },
  { id: 4, name: "D", parentId: 1 },
  { id: 5, name: "E", parentId: 2 },
  { id: 6, name: "F", parentId: 3 },
  { id: 7, name: "G", parentId: 2 },
  { id: 8, name: "H", parentId: 4 },
  { id: 9, name: "I", parentId: 5 },
];
function convert(list) {
  const res = [];
  const map = list.reduce((res, v) => ((res[v.id] = v), res), {});
  for (const item of list) {
    if (item.parentId === 0) {
      res.push(item);
      continue;
    }
    if (item.parentId in map) {
      const parent = map[item.parentId];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return res;
}

console.log(convert(list));
