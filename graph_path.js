const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// ------  Iterative method ------
// const hashPath = (graph, src, dst) => {
//   const queue = [src];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     if (current === dst) return true;
//     for (let neighbor of graph[current]) {
//       queue.push(neighbor);
//     }
//   }
//   return false;
// };

//----  Recursive method -----
const hashPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hashPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  return false;
};

console.log(hashPath(graph, "b", "e"));
