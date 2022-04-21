function curry(f) { // curry(f) does the currying transform
  return function(a: number) {
    return function(b: number){
      return f(a, b);
    };
  };
}

// usage
function sum(a: number, b: number): number {
  return a + b;
}

let curriedSum = curry(sum);

alert( curriedSum(1)(2) ); // 3