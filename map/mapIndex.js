/** MAP sample code for Youtube video
 * map javascript index example
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

// apply a 10% discount for all orders and return a new object
let discountedOrders = orders.map((order) => {
  return {
    ...order,
    total: order.total * (1 - 10 / 100),
  };
});
console.log("Orders with a 10% discount for the total price: ");
console.log(discountedOrders);

// apply a 10% discount on the FIRST 2 orders and return a new object
discountedOrders = orders.map((order, index) => {
  return {
    ...order,
    total: index < 2 ? order.total * (1 - 10 / 100) : order.total,
  };
});
console.log("The first 3 orders Orders with a 10% discount: ");
console.log(discountedOrders);
