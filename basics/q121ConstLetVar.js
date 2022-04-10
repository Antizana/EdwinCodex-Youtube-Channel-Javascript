const dog = 1;
let cat = 2;
var rabbit;

rabbit += dog + cat;
console.log(rabbit); //NaN
console.log(dog + cat); //3
cat++;
console.log(cat); //3
//++dog; //TypeError: Assignment to constant variable.
