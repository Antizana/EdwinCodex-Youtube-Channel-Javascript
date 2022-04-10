let obj = {};
console.log(obj.a?.b); // undefined
// console.log(obj.?a.?b); // SyntaxError: Unexpected token '?'
console.log(obj[a][b]); // Throws ReferenceError: a is not defined
console.log(obj?.a.b); // Throws TypeError: Cannot read property 'b' of undefined
