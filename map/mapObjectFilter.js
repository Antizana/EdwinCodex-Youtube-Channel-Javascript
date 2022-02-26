/** MAP sample code for Youtube video
 * map javascript object filter
 */

const orders = [
  {
    customerName: "John",
    quantity: 2,
    unitPrice: 60,
    delivered: true,
  },
  {
    customerName: "Peter",
    quantity: 1,
    unitPrice: 140,
    delivered: false,
  },
  {
    customerName: "Mary",
    quantity: 5,
    unitPrice: 50,
    delivered: true,
  },
  {
    customerName: "Steve",
    quantity: 7,
    unitPrice: 30,
    delivered: true,
  },
  {
    customerName: "Ann",
    quantity: 3,
    unitPrice: 20,
    delivered: true,
  },
];

// map, filter and reduce
let ordersSumarized = orders.map((order) => ({
  ...order,
  orderTotal: order.quantity * order.unitPrice,
}));
console.log("Orders with the Order Total:");
console.log(ordersSumarized); // Prints [{ customerName: John', quantity: 2, unitPrice: 60, delivered: true, orderTotal: 120 }, ... ]
console.log("_".repeat(80));

// Orders where orderTotal is greater than 200
let ordersTotalGreaterThan200 = orders
  .map((order) => order.quantity * order.unitPrice)
  .filter((orderSumarized) => orderSumarized > 200);
console.log("Orders with the Order Total greater than 200:");
console.log(ordersTotalGreaterThan200); // Prints [ 250, 210 ]
console.log("_".repeat(80));

// Total from orders where orderTotal is greater than 200
let sumOrdersTotalGreaterThan200 = orders
  .map((order) => order.quantity * order.unitPrice)
  .filter((orderSumarized) => orderSumarized > 200)
  .reduce((total, currentOrder) => (total += currentOrder), 0);
console.log(
  `Total from Orders Greater Than 200: ${sumOrdersTotalGreaterThan200}`
); // Prints 460
