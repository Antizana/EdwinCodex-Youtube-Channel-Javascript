/** REDUCE sample code for Youtube video
 * reduce javascript objects example
 */
const orders = [
  {
    customerName: "John",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Peter",
    total: 140,
    delivered: false,
  },
  {
    customerName: "Mary",
    total: 50,
    delivered: true,
  },
  {
    customerName: "Steve",
    total: 30,
    delivered: true,
  },
  {
    customerName: "Ann",
    total: 20,
    delivered: true,
  },
];

// Sum of total from all orders
const totals = orders.reduce((total, currItem) => (total += currItem.total), 0);
console.log(totals); // prints 300

// Sum of total from orders delivered
const totalForCompletedOrders = orders
  .map((order) => (order.delivered ? order.total : 0)) // gets this array [60, 0, 50, 30, 20]
  .reduce((total, currItem) => (total += currItem));

console.log(totalForCompletedOrders); // prints 160
