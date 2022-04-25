class X {
  get Y() {
    return 42;
  }
}
var x = new X();
console.log(x.Y); // 42
// console.log(x.get('Y')); //Property 'get' does not exist on type 'X'.
// console.log(x.Y()); //This expression is not callable because it is a 'get' accessor.



