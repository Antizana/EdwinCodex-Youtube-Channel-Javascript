const person = { name: "Dave", age: 40, birthCountry: "USA" };
const result = Object.keys(person).map((x) => x.toUpperCase());

console.log(result); // [ 'NAME', 'AGE', 'BIRTHCOUNTRY' ]

console.log(Object.keys(person)); // [ 'name', 'age', 'birthCountry' ]

console.log(Object.values(person)); // [ 'Dave', 40, 'USA' ]
