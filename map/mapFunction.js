/** MAP sample code for Youtube video
 * map function in javascript array example
 */
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];

// for Mutable Method
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
}

process.stdout.write("Doubled Numbers (for MUTABLE) method: ");
console.log(numbers); // Prints [2, 4, 6, 8, 10]

// for Inmutable Method
numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers[i] = numbers[i] * 2;
}

process.stdout.write("\nNumbers: ");
console.log(numbers);
process.stdout.write("Doubled Numbers (for INMUTABLE) method: ");
console.log(doubledNumbers); // Prints [2, 4, 6, 8, 10]

// forEach Method
doubledNumbers = [];
numbers.forEach((number) => {
  doubledNumbers.push(number * 2);
});

process.stdout.write("\nDoubled Numbers (forEach) method: ");
console.log(doubledNumbers); // Prints [2, 4, 6, 8, 10]

// map Method
doubledNumbers = numbers.map((number) => number * 2);

process.stdout.write("\nDoubled Numbers (map) method: ");
console.log(doubledNumbers); // Prints [2, 4, 6, 8, 10]

// map with a Callback Function
function createItemsArray(item, index) {
  let itemName = "item" + index;
  return { name: itemName, value: item * 2 };
}
process.stdout.write("\ncreateItemsArray returned object example: ");

console.log(createItemsArray(1, 1)); // Prints { name: 'item1', value: 1 }

doubledValues = numbers.map(createItemsArray);

console.log(`Doubled Values Object with (map Callback Function):`);
console.log(doubledValues); // Prints [ { name: 'item0', value: 2 },  { name: 'item1', value: 4 }, ...  { name: 'item5', value: 10 },

// map with index parameter
indexes = numbers.map((_number, index) => index);

process.stdout.write("\n(indexes in map) method: ");
console.log(indexes); // Prints [ 0, 1, 2, 3, 4 ]

// map with arrow function
doubledNumbers = numbers.map((number) => number * 2);

process.stdout.write("\nDoubled Numbers (map with arrow function) method: ");
console.log(doubledNumbers); // Prints [2, 4, 6, 8, 10]
