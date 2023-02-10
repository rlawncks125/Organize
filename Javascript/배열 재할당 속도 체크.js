const length = 10000000;

let array1 = new Array({ length }, () => 0);
let array2 = new Array({ length }, () => 0);

console.time("배열 재할당");
array1 = [];
console.timeEnd("배열 재할당");

console.time("길이 초기화");
array2.length = 0;
console.timeEnd("길이 초기화");
