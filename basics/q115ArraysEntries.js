let cipherText = [..."YIOSUM AGGOITC OTRHNIOST"];
let plainText = "";

console.log(cipherText); // ['Y', 'I', 'O', 'S', 'U', 'M', ' ', 'A', 'G', 'G', 'O', 'I', 'T', 'C', ' ', 'O', 'T', 'R', 'H', 'N', 'I', 'O', 'S', 'T']

for (let key of cipherText.keys()) {
  plainText += key % 2 === 0 ? key : " ";
}
console.log(plainText); // 0 2 4 6 8 10 12 14 16 18 20 22

plainText = "";
for (let [index, value] of cipherText.entries()) {
  plainText += index % 2 !== 0 ? value : "";
}
console.log(plainText); // ISMAGICORNOT

plainText = "";
for (let [value] of cipherText) {
  plainText += value;
}
console.log(plainText); // YIOSUM AGGOITC OTRHNIOST

plainText = "";
for (let [index, value] of cipherText.entries()) {
  plainText += index % 2 === 0 ? value : "";
}

console.log(plainText); //Prints YOU GOT THIS
