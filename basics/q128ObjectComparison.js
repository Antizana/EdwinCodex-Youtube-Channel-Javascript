/**
 * Which one prints false
 */
const a = { x: 1 };
const b = { x: 1 };

console.log(a["x"] === b["x"]);
console.log(a.x === b.x);
console.log(a != b);
console.log(a === b);

/**
 * Explanation
 */

console.log(a);
console.log(b);
console.log(a.x, a["x"]);
console.log(b.x, b["x"]);
