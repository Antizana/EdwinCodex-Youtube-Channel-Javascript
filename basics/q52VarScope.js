var start = 1;
function setEnd() {
  var end = 10;
  console.log("Inside: ", end); // Inside: 10
}
setEnd();
console.log(end); // ReferenceError: end is not defined
