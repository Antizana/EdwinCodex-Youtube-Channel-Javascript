const numbers = [1, 2, 3, 4, 5];

let [one, two, three, four, five] = numbers;
console.log(one, two, three, four, five);

({ one, two, three, four, five } = numbers);
console.log({ one, two, three, four, five }); //Prints { one: undefined, two: undefined, three: undefined, four: undefined, five: undefined }

[one, two, three, four, five] = [numbers];
console.log(one, two, three, four, five); //Prints: [1, 2, 3, 4, 5] undefined undefined undefined undefined

({ one, two, three, four, five } = { numbers });
console.log({ one, two, three, four, five }); //Prints: {one: undefined, two: undefined, three: undefined, four: undefined, five: undefined}
