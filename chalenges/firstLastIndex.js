function firstLastIndex(array, key) {
  first = 0;
  last = array.length - 1;
  while (first < last) {
    middle = Math.floor((last + first) / 2);
    if (array[middle] == key) {
      first = last = middle;
      while (array[first] == key) first -= 1;
      first += 1;
      while (array[last] == key) last += 1;
      last -= 1;
      return [first, last];
    }
    if (key < array[middle]) {
      last = middle;
    } else {
      first = middle;
    }
  }
  return [-1, -1];
}

function firstLastIndexOptimum(array, key) {
  first = 0;
  last = array.length - 1;
  while (first < last) {
    middle = Math.floor((last + first) / 2);
    if (key == array[middle]) {
      left = findFirst(array, key, first, middle);
      right = findLast(array, key, middle, last);
      return [left, right];
    } else if (array[middle] < key) {
      first = middle;
    } else {
      last = middle;
    }
  }
}

function findLast(array, key, first, last) {
  if (array[last] == key) return last;
  while (first <= last) {
    middle = Math.floor((last + first) / 2);
    if (array[middle] == key && key < array[middle + 1]) {
      return middle;
    } else if (array[middle] == key) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return -1;
}

function findFirst(array, key, first, last) {
  if (array[first] == key) return first;
  while (first <= last) {
    middle = Math.floor((last + first) / 2);
    if (array[middle] == key && array[middle - 1] < key) {
      return middle;
    } else if (array[middle] < key) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return -1;
}

array = [2, 4, 5, 5, 5, 5, 5, 7, 9, 9];
console.log(firstLastIndex(array, 5));
console.log(firstLastIndex(array, 9));
console.log(firstLastIndex(array, 2));
console.log(firstLastIndex(array, 1));
console.log(firstLastIndex(array, -1));

console.log("Sorted aproach");
console.log(firstLastIndexOptimum(array, 5));
console.log(firstLastIndexOptimum(array, 2));
console.log(firstLastIndexOptimum(array, 9));
console.log(firstLastIndexOptimum(array, 1));
console.log(firstLastIndexOptimum(array, -1));
