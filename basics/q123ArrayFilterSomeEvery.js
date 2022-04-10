let pets = ["dog", "cat", "rabbit"];
let key = (pet) => pet === "rabbit";

// jump
if (pets.some(key)) {
  console.log("jump");
}

console.log(pets.filter(key) === true); // false
console.log(pets.some(key).length === 1); // false
console.log(pets.every(key)); // false

console.log(pets.filter(key)); // [ 'rabbit' ]
console.log(pets.some(key).length); // undefined
console.log(pets.some(key)); // true
console.log(pets.every(key)); // false
