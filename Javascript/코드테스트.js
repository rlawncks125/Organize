// ( 완전탐색 - 소수찾기)
// 문자를 숫자 배열로 분할하고 모든값의 조합 구하는 재귀함수
/*
const 문자숫자로분할재귀함수 = (loopCount, array, values) => {
  const buffer = [];
  let nextArray = [];
  if (!values) {
    nextArray = array.map((v, index) => ({ value: v, indexs: [index] }));
  } else {
    array.forEach((v, index) => {
      for (let i = 0; i < values.length; i++) {
        if (!values[i].indexs.includes(index)) {
          buffer.push({
            value: v + values[i].value,
            indexs: [...values[i].indexs, index],
          });
        }
      }
    });

    nextArray = buffer.concat(values);
  }

  loopCount--;

  if (loopCount == 0) {
    console.log("끝");

    const endArray = buffer.map((v) => parseInt(v.value, 10));
    const baseArray = array.map((v) => parseInt(v, 10));
    const resArray = endArray.concat(baseArray);
    // 중복값 제거
    return Array.from(new Set(resArray));
  } else {
    return 문자숫자로분할재귀함수(loopCount, array, nextArray);
  }
};

const 문자 = "0123";
const splits = 문자.split("");

const res = 문자숫자로분할재귀함수(splits.length, splits);
console.log(res.sort((a, b) => a - b));
*/

// (정렬 - 가장 큰수 찾기) 숫자 배열 의 가장 큰 조합 찾기
/*



const 찾기 = (numbers) => {
  const maps = new Map();
  const array = [];
  numbers.forEach((v) => {
    const char = v.toString().charAt(0);
    if (maps.get(char)) {
      const array = maps.get(char);
      maps.set(char, [...array, v.toString()]);
    } else maps.set(char, [v.toString()]);
  });

  maps.forEach((v, key) => {
    const vSort = v.sort((a, b) => {
      if (a.length !== b.length) {
        // 크기가 다르면 문자열 조합으로 크기 비교
        const aS = a + b;
        const bS = b + a;
        return bS - aS;
      } else {
        return b - a;
      }
    });
    array.push({ key, value: vSort });
  });
  array.sort((a, b) => b.key - a.key);
  const re = array.map((v) => v.value).flat();

  if (re[0] === "0") {
    return parseInt(re.reduce((a, b) => a + b)).toString();
  }

  return re.reduce((a, b) => a + b).toString();
};

const data = [6, 10, 42];
console.log(찾기(data));
*/

// ㅁㄴㅇ

// 깊이/너비 우선 탐색 (DFS / BFS)
// 복잡도 O(n)

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

// BFS (너비 우선 탐색)
// const bfs = (graph, startNode) => {
//   let visited = []; // 탐색을 마친 노드들
//   let needVisit = []; // 탐색해야할 노드들

//   needVisit.push(startNode); // 노드 탐색 시작

//   while (needVisit.length !== 0) {
//     // 탐색해야할 노드가 남아있다면
//     const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
//     if (!visited.includes(node)) {
//       // 해당 노드가 탐색된 적 없다면
//       visited.push(node);
//       needVisit = [...needVisit, ...graph[node]];
//     }
//   }
//   return visited;
// };

// DFS ( 깊이 우선 탐색 )
// const dfs = (graph, startNode) => {
//   let visited = []; // 탐색을 마친 노드들
//   let needVisit = []; // 탐색을 해야 할 노드들

//   needVisit.push(startNode);

//   // 탐색을 해야 할 노드가 남아 있다면
//   while (needVisit.length !== 0) {
//     const node = needVisit.shift();
//     if (!visited.includes(node)) {
//       visited.push(node);
//       needVisit = [...graph[node], ...needVisit];
//     }
//   }

//   return visited;
// };

class 탐색 {
  _graph;
  constructor(graph) {
    this._graph = graph;
  }

  bfs(startNode) {
    let 방문한노드 = []; // 탐색을 마친 노드들
    let 대기노드 = []; // 탐색해야할 노드들

    대기노드.push(startNode); // 노드 탐색 시작

    while (대기노드.length !== 0) {
      const node = 대기노드.shift();
      if (!방문한노드.includes(node)) {
        방문한노드.push(node);
        대기노드 = [...대기노드, ...this._graph[node]];
      }
    }
    return 방문한노드;
  }

  dfs(startNode) {
    let 방문한노드 = []; // 탐색을 마친 노드들
    let 대기노드 = []; // 탐색을 해야 할 노드들

    대기노드.push(startNode);

    // 탐색을 해야 할 노드가 남아 있다면
    while (대기노드.length !== 0) {
      const node = 대기노드.shift();
      if (!방문한노드.includes(node)) {
        방문한노드.push(node);
        대기노드 = [...this._graph[node], ...대기노드];
      }
    }

    return 방문한노드;
  }
}

// const ds = new 탐색(graph);
// console.log(ds.bfs("A"));
// console.log(ds.dfs("A"));

const computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
let obj = {};
const Acode = 65;

computers.forEach((v, index) => {
  const array = [];
  const node = String.fromCharCode(Acode + index);
  v.forEach((bool, index) => {
    if (bool) {
      const vNode = String.fromCharCode(Acode + index);
      array.push(vNode);
    }
  });
  obj = { ...obj, [node]: array };
});

const res = new 탐색(obj);
console.log(String.fromCharCode(Acode));
console.log(res.bfs(String.fromCharCode(Acode)));
