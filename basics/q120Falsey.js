console.log([] ? true : false); // true
console.log(undefined ? true : false); // false
console.log(0 ? true : false); // false
console.log(null ? true : false); // false
console.log(undefined + 5); // NaN
let a;
console.log(a); // undefined
console.log(a + 5); // NaN
console.log(undefined + 5 ? true : false); // false
