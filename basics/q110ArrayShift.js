let array = [1, 2, 3, 4, 5];
console.log(array); // [1, 2, 3, 4, 5]
array.pop();
console.log(array); // [1, 2, 3, 4]
array.push(5);
console.log(array); // [1, 2, 3, 4, 5]
array.shift();
console.log(array); // [2, 3, 4, 5]
array.unshift(1);
console.log(array); // [1, 2, 3, 4, 5]
array.reverse();
console.log(array); // [5, 4, 3, 2, 1]
array.sort();
console.log(array); // [1, 2, 3, 4, 5]
console.log(array.slice(1, 3)); // [2, 3]
array.splice(1, 2);
console.log(array); // [1, 4, 5]
