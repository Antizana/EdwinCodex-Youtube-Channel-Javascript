var v: number = 1;
var f1 = function () {
  console.log("f1:", v);
};

var f2 = function () {
  var v: number = 2;
  console.log("f2:", v); // 2
  
  f1(); // 1
};

f2();