// let vowels = "aeiou".toArray(); // toArray works with collections
let vowels = Array.of("aeiou");
console.log(vowels); // ["aeiou"]
console.log(Array.of("This", " ", "is", " ", "an", " ", "array")); // ["This", " ", "is", " ", "an", " ", "array"]
// vowels = {"a", "e", "i", "o", "u"}; // SyntaxError: Unexpected token ','

vowels = "aeiou";
for (var i = 0; i < vowels.length; i++) {
  console.log(vowels[i]);
}
