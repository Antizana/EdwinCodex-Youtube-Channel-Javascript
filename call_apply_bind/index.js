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
  myMethod: function (fn) {},
};

bob(1, "hello"); //prints bob 1 hello and the window global object
