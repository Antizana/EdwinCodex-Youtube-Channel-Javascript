/** MAP sample code for Youtube video
 * map javascript object return object
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

// Create a customer array
let customers = orders.map((order) => order.customerName);

process.stdout.write("Customers array (map) method: ");
console.log(customers); // Prints [ 'John', 'Peter', 'Mary', 'Steve', 'Ann' ]

// Add taxes to orders (long way)
const VAT = 7.25 / 100;
let ordersWithTaxes = orders.map((order) => {
  const { customerName, total, delivered } = order;
  return {
    ["customerName"]: customerName,
    ["total"]: total,
    ["delivered"]: delivered,
    tax: total * VAT,
    grossTotal: total * (1 + VAT),
  };
});

process.stdout.write("\nOrders array with taxes (map Long Way) method: ");
console.log(ordersWithTaxes); // Prints [ { customerName: 'John', total: 60, delivered: true, tax: 4.35, grossTotal: 64.35 }, ... ]
process.stdout.write("\nOrders array (map Long Way) method: ");
console.log(orders); // Prints [ { customerName: 'John', total: 60, delivered: true }, ... ]
console.log("_".repeat(80));

// Add taxes to order (WRONG SHORT WAY)
let originalOrders = orders;
ordersWithTaxes = orders.map((order) => {
  order.tax = order.total * VAT;
  order.grossTotal = order.total + order.tax;
  return order;
});

process.stdout.write(
  "\nCustomers array with taxes (map WRONG SHORT WAY) method: "
);
console.log(ordersWithTaxes); // Prints [ { customerName: 'John', total: 60, delivered: true, tax: 4.35, grossTotal: 64.35 }, ... ]
process.stdout.write("\nOrders array (map WRONG SHORT WAY) method: ");
console.log(orders); // Prints [ { customerName: 'John', total: 60, delivered: true, tax: 4.35, grossTotal: 64.35 }, ... ]
console.log("_".repeat(80));
// THE ORIGINAL ORDERS ARRAY WAS MODIFIED!!!!!!!!!!!!!!!!!

// Add taxes to order (RIGHT SHORT WAY)
// First lets go to delete the wrong added attributes
// orders = originalOrders; // Wrong orders is a constant
console.log(orders[0]);
const taxAttribute = "tax";
delete orders.forEach((order) => delete order[taxAttribute]);
delete orders.forEach((order) => delete order.grossTotal);
console.log("Droping the wrong added attribute");
console.log(orders[0]);
ordersWithTaxes = orders.map((order) => {
  return {
    ...order,
    ["tax"]: order.total * VAT,
    grossTotal: order.total * (1 + VAT),
  };
});

process.stdout.write(
  "\nCustomers array with taxes (map RIGHT SHORT WAY) method: "
);
console.log(ordersWithTaxes); // Prints [ { customerName: 'John', total: 60, delivered: true, tax: 4.35, grossTotal: 64.35 }, ... ]
process.stdout.write("\nOrders array (map RIGHT SHORT WAY) method: ");
console.log(orders); // Prints [ { customerName: 'John', total: 60, delivered: true }, ... ]
console.log("_".repeat(80));
// THE ORIGINAL ORDERS ARRAY WAS INMUTABLE!!!!!!!!!!!!!!!!!
