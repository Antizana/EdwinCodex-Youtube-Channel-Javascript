/** REDUCE sample code for Youtube video
 * Reduce javascript array of objects example
 */

const customers = [
  {
    name: "John",
    country: "United States",
  },
  {
    name: "Peter",
    country: "United States",
  },
  {
    name: "Mary",
    country: "Canada",
  },
  {
    name: "Steve",
    country: "UK",
  },
  {
    name: "Nancy",
    country: "UK",
  },
  {
    name: "Tom",
    country: "United States",
  },
];

console.log(customers[1].name); // Prints Peter
console.log(customers[2]["name"]); // Prints Mary
console.log(customers[0]["age"]); // Prints undefined

numberOfCustomersByCountry = customers
  .map((customer) => customer.country) // produces: ['United States', 'United States', 'Canada', 'UK', 'UK', 'United States']
  .reduce((countryCount, currentCountry) => {
    if (countryCount[currentCountry]) countryCount[currentCountry] += 1;
    else countryCount[currentCountry] = 1;
    return countryCount;
  }, {});
console.log(numberOfCustomersByCountry); // Prints { 'United States': 3, Canada: 1, UK: 2 }

numberOfCustomersByCountry = customers.reduce(
  (countryCount, currentCustomer) => {
    if (countryCount[currentCustomer.country])
      countryCount[currentCustomer.country] += 1;
    else countryCount[currentCustomer.country] = 1;
    return countryCount;
  },
  {}
);
console.log(numberOfCustomersByCountry); // Also prints { 'United States': 3, Canada: 1, UK: 2 }
