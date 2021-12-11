// jsftp 라는 모듈 사용하면 될거같음

let count = 0;
const 재귀함수 = (array) => {
  const data = {
    index: count++,
    array: array.shift(),
  };

  // console.log(`index :${data.index} data:${data.array}  array:${array.length}`);
  if (array.length === 0) return data;

  return [data, 재귀함수(array)].flat();
};

console.log(재귀함수([4, [2, 3], 2, 1, 3, 6, 2]));
