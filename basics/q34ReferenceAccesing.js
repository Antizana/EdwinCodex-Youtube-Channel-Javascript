console.log(sum(10, 20)); // 30
console.log(diff(10, 20)); // ReferenceError: Cannot access 'diff' before initialization
function sum(x, y) {
  return x + y;
}

let diff = function (x, y) {
  return x - y;
};
