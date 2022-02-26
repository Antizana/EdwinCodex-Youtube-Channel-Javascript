/** REDUCE sample code for Youtube video
 * Reduce javascript example
 */

let items = [1, 2, 3, 4, 5];
let totalItems = 0;

for (let i = 0; i < items.length; i++) {
  totalItems += items[i];
}
console.log(totalItems); // Prints 15

totalItems = items.reduce((total, currItem) => (total += currItem), 0);
console.log(totalItems); // Prints 15
