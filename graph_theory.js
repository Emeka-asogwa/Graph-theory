const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

//  ------ Iterative method ----

// const depthFirstPrint = (graph, source) => {
//   const stack = [source];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);

//     for (let neighbor of graph[current]) {
//       stack.push(neighbor);
//     }
//   }
// };

//  ---- Recursive method ---------//
// const depthFirstPrint = (graph, source) => {
//   console.log(source);
//   for (let neighbor of graph[source]) {
//     depthFirstPrint(graph, neighbor);
//   }
// };

// depthFirstPrint(graph, "a");

// ######   BreadthFirst method, iterative only  ####

const BreadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

BreadthFirstPrint(graph, "a");
