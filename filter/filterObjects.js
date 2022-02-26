/** FILTER sample code for Youtube video
 * filter javascript array of objects
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

// Filter orders delivered
let filteredOrders = orders.filter((order) => {
  if (order.delivered == true) {
    return true;
  } else {
    return false;
  }
});
console.log("Delivered orders: ");
console.log(filteredOrders);

filteredOrders = orders.filter((order) => order.delivered == true);
console.log("\nDelivered orders: ");
console.log(filteredOrders);

filteredOrders = orders.filter((order) => order.delivered);
console.log("\nDelivered orders: ");
console.log(filteredOrders);
console.log("_".repeat(80));
// Filter orders with more than 4 items
filteredOrders = orders.filter((order) => order.quantity >= 4);
console.log("\nOrders with more than 4 items: ");
console.log(filteredOrders);
console.log("_".repeat(80));

// Filter orders with the order total more than 100
filteredOrders = orders.filter((order) => order.quantity * order.price > 100);
console.log("\nOrders with more than 4 items: ");
console.log(filteredOrders);
console.log("\nOriginal Array: ");
console.log(orders);

// Filter orders with more than 4 items and price >= 50
filteredOrders = orders.filter(
  (order) => order.quantity >= 4 && order.price >= 50
);
console.log("\nOrders with more than 4 items and price >= 50: ");
console.log(filteredOrders);

// Filter Steve's orders
filteredOrders = orders.filter((order) => order.customerName === "Steve");
console.log("\nSteve's Orders: ");
console.log(filteredOrders);
