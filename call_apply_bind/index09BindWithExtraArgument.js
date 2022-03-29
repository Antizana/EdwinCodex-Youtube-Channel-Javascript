// Call, Apply and Bind javascript samples for my YouTube channel
// the difference between call(), apply() and bind()
// without strict mode "this" will default to the Global/Window object
// 'use strict';

let bob = function (num, str, x) {
  console.log("bob", num, str, this, x);
  return true;
};

let bill = {
  name: "Bill Murray",
  movie: "Lost in Translation",
  myMethod: function (fn) {
    let number = arguments[1];
    let string = arguments[2];
    fn.apply(bill, [number, string]); // bob 4 ciao billObject
  },
};

console.log("Bob Bind function call with bill object");
bob.bind(bill, 5, "Hasta la vista"); // prints nothing because only prepare to be called
let fred = bob.bind(bill, 5, "Hasta la vista");
fred("x"); // bob 5 Hasta las vista billObject
