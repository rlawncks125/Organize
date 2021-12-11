const object1 = {
  a: "nanana",
  b: "apple",
  c: "gun",
};

const array1 = Object.entries(object1).map(([key, value], index) => {
  console.log(`Object key : ${key} vlaue : ${value}, index : ${index}`);
  return value;
});

const array2 = Array.from(
  Object.entries(object1).map((v) => v),
  ([key, value], i) => ({
    index: i,
    value: `${key}-${value}`,
  })
);

console.log(array1, array2);
console.log(Array.isArray(array1), Array.isArray(array2));
