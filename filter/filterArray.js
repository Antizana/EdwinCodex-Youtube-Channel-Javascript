/** FILTER sample code for Youtube video
 * filter javascript array
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter only numbers >= 5
let filteredNumbers = numbers.filter((number) => number >= 5);
process.stdout.write("Numbers >= 5: ");
console.log(filteredNumbers);

// filter only even numbers
filteredNumbers = numbers.filter((number) => number % 2 == 0);
process.stdout.write("Even Numbers: ");
console.log(filteredNumbers);
