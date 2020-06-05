/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = (numCourses, prerequisites) => {
  let inDegree = new Array(numCourses).fill(0);
  let graph = {};
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
    if (graph[prerequisites[i][1]]) {
      graph[prerequisites[i][1]].push(prerequisites[i][0]);
    } else {
      let list = [];
      list.push(prerequisites[i][0]);
      graph[prerequisites[i][1]] = list;
    }
  }
  let res = [];
  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  while (queue.length) {
    let cur = queue.shift();
    res.push(cur);
    let toEnQueue = graph[cur];
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--;
        if (inDegree[toEnQueue[i]] == 0) {
          queue.push(toEnQueue[i]);
        }
      }
    }
  }
  return res.length === numCourses ? res : [];
};
