var capitalsJSON =
  '{ "countries" : [' +
  '{ "country":"Usa" , "capital":"Washington" },' +
  '{ "country":"Germany" , "capital":"Berlin" },' +
  '{ "country":"France" , "capital":"Paris" } ]}';

console.log("Capitals JSON: ", capitalsJSON);

var capitalsDatabase = JSON.parse(capitalsJSON);

console.log("Capitals Database: ", capitalsDatabase);

console.log(capitalsDatabase.countries[0].capital); // Washington
console.log(capitalsDatabase.countries[1].capital); // Berlin
// console.log(capitalsJSON.countries[0].capital); // TypeError: Cannot read property '0' of undefined
console.log(typeof capitalsJSON); // string
// console.log(capitalsDatabase[1].capital); // TypeError: Cannot read property 'capital' of undefined
