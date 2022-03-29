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

console.log("Function simple call:");
bob(1, "hello"); //prints bob 1 hello and the window global object
console.log("Function called from an object with arguments hard coded:");
bill.myMethod(bob); //prints bob 2 Hello and the window global object
