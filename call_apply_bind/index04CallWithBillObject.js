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
    fn(2, "Hello");
  },
};

console.log("Bob Call with bill object:");
bob.call(bill, 2, "Goodbye"); // bob 2 Goodbye billObject
