// Call, Apply and Bind javascript samples for my YouTube channel
// the difference between call(), apply() and bind()
// without strict mode "this" will default to the Global/Window object
// 'use strict';

let bob = function (num, str) {
  console.log("bob", num, str, this);
  return true;
};

let bill = {
  name: "Bill Murray",
  movie: "Lost in Translation",
  myMethod: function (fn) {
    let number = arguments[1];
    let string = arguments[2];
    fn.apply(this, [number, string]); // bob 4 ciao billObject
    fn.apply(bill, [number, string]); // bob 4 ciao billObject
    fn.call(this, number, string); // bob 4 ciao billObject
    fn.call(bill, number, string); // bob 4 ciao billObject
  },
};

console.log("Bob Call with bill object:");
bob.call(bill, 2, "Goodbye"); // bob 2 Goodbye billObject
console.log("Bob Apply call with bill object:");
bob.apply(bill, [3, "Hi"]); // bob 3 Hi billObject
console.log("Bob Apply call with bill object and a defined array:");
let array = [3, "Hi"];
bob.apply(bill, array); // bob 3 Hi billObject

console.log("Bill simple function call with bob object and arguments:");
bill.myMethod(bob, 4, "ciao"); // bob 4 ciao billObject
