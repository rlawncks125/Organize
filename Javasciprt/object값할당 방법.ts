// ----------------------   할당

let ds = {
  ssa: "sww",
};

// { ssa: 'sww' }
console.log(ds);

const addtest = "add";

ds[addtest] = "sas";

// { ssa: 'sww', add: 'sas' }
console.log(ds);

const addValue = "valeee";
const Key = "keyKK";
const newAdd = { [Key]: addValue };

ds = { ...ds, ...newAdd };

// { ssa: 'sww', add: 'sas', keyKK: 'valeee' }
console.log(ds);

// ----------------  출력
console.log(ds.ssa);

console.log(ds["add"]);

console.log(ds[`${Key}`]);

// 타입 검사 or 특정 프로퍼티 있는지 검사
if (typeof ds === "object" && ds.hasOwnProperty("www")) {
  // 출력안함
  console.log(ds.ssa);
}

if (typeof ds === "object" && ds.hasOwnProperty("add")) {
  console.log(ds["add"]);
}
