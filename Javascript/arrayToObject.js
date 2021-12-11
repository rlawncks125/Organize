const array = ["a", "b", "c"];

const arrayKeyValue = Object.entries(array);
console.log(arrayKeyValue);

const obj2 = Object.fromEntries(arrayKeyValue);

console.log(obj2, !Array.isArray(obj2));
