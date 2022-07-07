// array 은 findIndex 탐색 처리 시간이 많을수록 더오래걸림

// map은 key값이 있어서 해당 값을 가져오는거라 빠름

// index 값으로 찾을수 있는 경우 ( 숫자 정수 )
// index값 > map > findIndex사용

// 문자일경우 => map

const mn = [
  [1, 0],
  [3, 4],
  [1, 7],
  [1, 7],
];

console.time("array");
const arrayX = [];
const arrayY = [];
mn.forEach((v) => {
  const isFindX = arrayX.findIndex((f) => f.key === v[0]);
  const isFindY = arrayY.findIndex((f) => f.key === v[1]);

  if (isFindX >= 0) {
    arrayX[isFindX] = { key: v[0], value: arrayX[isFindX].value + 1 };
  } else {
    arrayX.push({ key: v[0], value: 1 });
  }
  if (isFindY >= 0) {
    arrayY[isFindY] = { key: v[1], value: arrayY[isFindY].value + 1 };
  } else {
    arrayY.push({ key: v[1], value: 1 });
  }
});
arrayX.sort((a, b) => b - a).map((v) => v.key);
arrayY.sort((a, b) => b - a).map((v) => v.key);
console.timeEnd("array");

console.time("arrayIndex");
const indexX = [];
const indexY = [];

mn.forEach((v) => {
  if (indexX[v[0]]) {
    indexX[v[0]] += 1;
  } else {
    indexX[v[0]] = 1;
  }
  if (indexY[v[1]]) {
    indexY[v[1]] += 1;
  } else {
    indexY[v[1]] = 1;
  }
});

const indexXA = indexX
  .map((v, index) => ({ key: index, value: v }))
  .filter((v) => v)
  .sort((a, b) => a.value - b.value)
  .map((v) => v.key);
const indexYA = indexY
  .map((v, index) => ({ key: index, value: v }))
  .filter((v) => v)
  .sort((a, b) => a.value - b.value)
  .map((v) => v.key);
console.timeEnd("arrayIndex");

console.time("map");
const mapX = new Map();
const mapY = new Map();
mn.forEach((v) => {
  if (mapX.get(v[0])) {
    mapX.set(v[0], mapX.get(v[0]) + 1);
  } else {
    mapX.set(v[0], 1);
  }
  if (mapY.get(v[1])) {
    mapY.set(v[1], mapY.get(v[1]) + 1);
  } else {
    mapY.set(v[1], 1);
  }
});
const mapXA = Array.from(mapX)
  .map((v) => ({ key: v[0], value: v[1] }))
  .sort((a, b) => b - a)
  .map((v) => v.key);
const mapYA = Array.from(mapY)
  .map((v) => ({ key: v[0], value: v[1] }))
  .sort((a, b) => b - a)
  .map((v) => v.key);

console.timeEnd("map");

// console.log(arrayX, arrayY);
// console.log(indexXA, indexYA);
console.log(mapXA, mapYA);
