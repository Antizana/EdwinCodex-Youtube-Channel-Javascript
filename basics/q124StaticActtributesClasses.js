class RainyForest {
  static minimumRainFall = 20;
  print() {
    console.log(
      "Inside the class. static minimumRainFall:",
      this.minimumRainFall
    );
  }
  static staticPrint() {
    console.log("Static inside the class:", this.minimumRainFall);
  }
}

let amazonas = new RainyForest();
RainyForest.minimumRainFall = 60;

console.log(amazonas.minimumRainFall); //undefined, static properties are not accessible from instances
console.log("Outside the class", RainyForest.minimumRainFall); //60
RainyForest.staticPrint(); //Inside the class 60
amazonas.print(); //Inside the class. static minimumRainFall: undefined
