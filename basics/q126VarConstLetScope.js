/**
 * What is the console output
 */
if (true) {
  var x = 5;
  const y = 6;
  let z = 7;
}

console.log(x + y + z); // throw a ReferenceError about y.
console.log(x + z); // throw a ReferenceError about z.
console.log(x); // prints 5
