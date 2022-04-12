let myArray = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10];
let mySet = new Set(myArray);

console.log(mySet); // Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

console.log(mySet.entries().next()); //{ value: [ 1, 1 ], done: false }

console.log(mySet.entries().next().value); // [ 1, 1 ]

let iterator = mySet.entries();

console.log(iterator.next()); //{ value: [ 1, 1 ], done: false }
console.log(iterator.next()); //{ value: [ 2, 2 ], done: false }

while (!iterator.next().done) {
  console.log(iterator.next());
}

console.log(iterator.next()); //{ value: undefined, done: true }

let setObj = {};
for (const num of myArray) {
  if (num in setObj) {
    setObj[num] = setObj[num] + 1;
  } else {
    setObj[num] = 1;
  }
}

console.log(setObj); // {'1': 1, '2': 2, '3': 1, '4': 1, '5': 1, '6': 2, '7': 1, '8': 1, '9': 1, '10': 1 }

let objArray = [];
for (const key in setObj) {
  objArray.push({ digit: key, count: setObj[key] });
}
console.log(objArray); // [ { digit: '1', count: 1 }, { digit: '2', count: 2 }, { digit: '3', count: 1 }, { digit: '4', count: 1 }, { digit: '5', count: 1 }, { digit: '6', count: 2 }, { digit: '7', count: 1 }, { digit: '8', count: 1 }, { digit: '9', count: 1 }, { digit: '10', count: 1 } ]

for ({ digit, count } of objArray) {
  console.log(digit, count);
}

console.log("for Each: ");
objArray.forEach(({ digit, count }) => {
  console.log(digit, count);
});

console.log(objArray.entries()); //Object [Array Iterator] {}
console.log(objArray.keys()); //Object [Array Iterator] {}
console.log(objArray.values()); //Object [Array Iterator] {}

console.log("Keys with For in: ");
for (key in Object.keys(objArray)) {
  console.log(key);
}

//With for .. of we can iterate over arrays and strings
// for of loop doesn’t work with objects, because they are not iterable.
// for of → Use it with arrays and strings
console.log("entries with For of: ");
console.log(objArray.entries().next().value[1]); // { digit: '1', count: 1 }
console.log(objArray.entries().next()); // { value: [ 0, { digit: '1', count: 1 } ], done: false }
for (value of Object.entries(objArray)) {
  console.log(value[1]);
}

// Basically for in allows us to loop over and see the object properties.
// for in loop loops over enumerable properties and enumerable property names of an object.
// for in → Use it with objects
console.log("entries with For in: ");
for ({ value, done } in Object.entries(objArray)) {
  console.log(value, done);
}

const detailedBasket = {
  strawberries: 5,
  peaches: 4,
  oranges: 11,
};
for (item in detailedBasket) {
  console.log(item); // strawberries, peaches, oranges
}

console.log("string with For of: ");
for (const letter of "This is a string") {
  console.log(letter);
}

const myString = "This is a string";
console.log("string with For in: ");
for (let letter in myString) {
  console.log(myString[letter]);
}

customers = [
  {
    customerId: 3,
    name: "Anne",
    age: 23,
  },
  {
    customerId: 1,
    name: "John",
    age: 30,
  },
  {
    customerId: 2,
    name: "Jane",
    age: 25,
  },
  {
    customerId: 1,
    age: 31,
    city: "New York",
  },
];

let newObjs = [];
for (const customer of customers) {
  console.log(customer);
  const index = newObjs.findIndex(
    (obj) => obj.customerId === customer.customerId
  );
  if (index >= 0) {
    newObjs[index] = { ...newObjs[index], ...customer };
  } else {
    newObjs.push(customer);
  }
}
console.log(newObjs); // [ { customerId: 3, name: 'Anne', age: 23 }, { customerId: 1, name: 'John', age: 31, city: New York' }, { customerId: 2, name: 'Jane', age: 25 }]

newObjs.sort((a, b) => a.customerId - b.customerId);

console.log(newObjs); // [ { customerId: 1, name: 'John', age: 31, city: New York' }, { customerId: 2, name: 'Jane', age: 25 }, { customerId: 3, name: 'Anne', age: 23 }]

newObjs.sort((a, b) => a.name.localeCompare(b.name) * -1);
console.log(newObjs); // [ { customerId: 1, name: 'John', age: 31, city: 'New York' }, { customerId: 2, name: 'Jane', age: 25 },  { customerId: 3, name: 'Anne', age: 23 } ]
