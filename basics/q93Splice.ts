let  animals93: string[] = ["dog", "cat", "elephant", "tiger"];
animals93.splice(0, 2)
console.log(animals93); // ["elephant", "tiger"]

animals93 = ["dog", "cat", "elephant", "tiger"];
console.log(animals93.splice(0, 2, "lion", "cow"));
console.log(animals93);

