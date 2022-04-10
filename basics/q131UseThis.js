/**
 * What is printed to the console
 */
let dog = {
  sound: "meows",
  bark() {
    console.log(this.sound);
  },
};

dog.sound = "bark";
let dogSound = dog.bark; //here we are losing the context for this
dogSound(); // undefined. The context for this was lost.

dog.bark(); // grunt

console.log(dogSound);
/**
 * In the browser console returns:
 * ƒ bark() {
    console.log(this.sound);
  }
  Where the `this` keyword is referring to nothing.
 */

/**
 * bark
 * Nothing is printed to the console.
 * undefined
 * meows
 */
