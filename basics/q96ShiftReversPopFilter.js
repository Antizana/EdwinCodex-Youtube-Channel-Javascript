let animals = ["dog", "cat"];
//Missing Line
console.log(animals.pop()); //Prints cat

animals = ["dog", "cat"];
console.log(animals.shift()); //Prints dog
console.log(animals.pop()); //Prints cat

animals = ["dog", "cat"];
console.log(animals.reverse()); //Prints ['cat', 'dog']
console.log(animals.pop()); //Prints dog

animals = ["dog", "cat"];
console.log(animals.pop()); //Prints cat
console.log(animals.pop()); //Prints dog

animals = ["dog", "cat"];
console.log(animals.filter((e) => e === "dog")); //Prints cat
console.log(animals.pop()); //Prints cat
