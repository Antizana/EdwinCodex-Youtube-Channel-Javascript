/** REDUCE sample code for Youtube video
 * reduce javascript return array example
 */
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let array = matrix.reduce(
  (row, currentRowMatrix) => row.concat(currentRowMatrix),
  []
);
console.log(array); // Prints [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

array = matrix.reduce(
  (row, currentRowMatrix) => [...row, ...currentRowMatrix],
  []
);
console.log(array); // Prints [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

array = matrix.flat();
console.log(array); // Prints [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

matrix = [
  [
    [0, 1],
    [2, 3],
  ],
  [4, 5, 6],
  [7, 8, 9],
];

array = matrix.flat();
console.log(array); // Prints [ [ 0, 1 ], [ 2, 3 ], 4, 5, 6, 7, 8, 9 ]

array = matrix.flat(2);
console.log(array); // Prints [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
