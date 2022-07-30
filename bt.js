const problem = {
  A: {C: 1, D: 2, F: 2},
  B: {D: 1, E: 6, F: 4},
  C: {A: 3, F: 9},
  D: {B: 2, E: 6},
  E: {F: 2, Y: 3},
  F: {C: 2, X: 3},
  X: {F: 1, Y: 2, Z: 8},
  Y: {Z: 1},
  Z: {},
};

const lowestCostNode = (costs, processed) => {
  return Object.keys(costs).reduce((lowest, node) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!processed.includes(node)) {
        lowest = node;
      }
    }
    return lowest;
  }, null);
};

const dijkstra = (graph) => {

  const costs = Object.assign({Z: Infinity}, graph.A);

  const parents = {Z: null};
  for (let child in graph.start) {
    parents[child] = 'A';
  }

  const processed = [];

  let node = lowestCostNode(costs, processed);

  while (node) {
    let cost = costs[node];
    let children = graph[node];
    for (let n in children) {
      let newCost = cost + children[n];
      if (!costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = lowestCostNode(costs, processed);
  }

  let optimalPath = ['Z'];
  let parent = parents.Z;
  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }
  optimalPath.reverse();

  const results = {
    distance: costs.Z,
    path: optimalPath
  };

  return results;
};

console.log(dijkstra(problem));
var đườngĐiNgắnNhất = Number.MAX_SAFE_INTEGE;
var đườngĐiNgắnNhấtHiệnTại = '';


function di(bắtĐầuĐiTừ,chiPhíHiệnTại,conĐườngĐãĐi,vịTríHiệnTại)
{
    if (vịTríHiệnTại === 'Z' && đườngĐiNgắnNhất > chiPhíHiệnTại )
    {
        đườngĐiNgắnNhấtHiệnTại = conĐườngĐãĐi;
        đườngĐiNgắnNhất = chiPhíHiệnTại;
    }

    if (chiPhíHiệnTại>30)
        return;
    if (vịTríHiệnTại === 'Z' && chiPhíHiệnTại>25 && chiPhíHiệnTại<30 )
        console.log(conĐườngĐãĐi + ":"+chiPhíHiệnTại)
    Object.keys(problem[bắtĐầuĐiTừ])
        .map(key => di(
            key,
            chiPhíHiệnTại+problem[bắtĐầuĐiTừ][key],
            conĐườngĐãĐi.concat('->'+key),key 
        ))
}

di("A",0,"A","A")