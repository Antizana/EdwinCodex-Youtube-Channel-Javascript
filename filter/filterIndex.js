/** FILTER sample code for Youtube video
 * filter javascript index example
 */

const orders = [
  {
    customerName: "John",
    quantity: 2,
    price: 60,
    delivered: true,
  },
  {
    customerName: "Peter",
    quantity: 1,
    price: 140,
    delivered: false,
  },
  {
    customerName: "Mary",
    quantity: 5,
    price: 50,
    delivered: true,
  },
  {
    customerName: "Mark",
    quantity: 7,
    price: 30,
    delivered: true,
  },
  {
    customerName: "Ann",
    quantity: 3,
    price: 20,
    delivered: true,
  },
];

// Removes the 2nd and 3rd elements (INMUTABLE) way
let newOrders = orders.filter((_order, index) => !(index in [1, 2]));
console.log("\nOrders without the 2nd and 3rd orders (INMUTABLE): ");
console.log(newOrders);
console.log("Original array: ");
console.log(orders);

// Removes the 2nd element (MUTABLE) way
let deletedOrders = orders.splice(1, 2);
console.log("\nOrders without the 2nd or 3rd order (MUTABLE): ");
console.log(orders);
console.log("Deleted Order: ");
console.log(deletedOrders);
