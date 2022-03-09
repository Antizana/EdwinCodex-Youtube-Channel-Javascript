function areAnagrams(s1, s2) {
  if (s1.length !== s2.length) return false;
  let letters1 = [];
  let letters2 = [];
  for (let i = 0; i < s1.length; i++) {
    letters1[s1[i].charCodeAt()] = !letters1[s1[i].charCodeAt()]
      ? 1
      : letters1[s1[i].charCodeAt()] + 1;
    letters2[s2[i].charCodeAt()] = !letters2[s2[i].charCodeAt()]
      ? 1
      : letters2[s2[i].charCodeAt()] + 1;
  }
  for (let i = 0; i < letters1.length; i++) {
    if (letters1[i] != letters2[i]) return false;
  }
  return true;
}

function areAnagramsWithObjects(s1, s2) {
  object1 = {};
  object2 = {};
  if (s1.length != s2.length) return false;
  for (let i = 0; i < s1.length; i++) {
    object1[s1[i]] = !object1[s1[i]] ? 1 : object1[s1[i]] + 1;
    object2[s2[i]] = !object2[s2[i]] ? 1 : object2[s2[i]] + 1;
  }
  for (let i in object1) {
    if (object1[i] != object2[i]) return false;
  }
  return true;
}

function areAnagramsSorted(s1, s2) {
  if (s1.length != s2.length) return false;
  s1Sorted = s1.split("").sort().join("");
  s2Sorted = s2.split("").sort().join("");
  return s1Sorted == s2Sorted;
}

console.log(areAnagrams("nameless", "salesmen"));
console.log(areAnagramsWithObjects("nameless", "salesmen"));
console.log(areAnagramsSorted("nameless", "salesmen"));
