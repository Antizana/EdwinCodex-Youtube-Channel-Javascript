const list = [
  {
    id: 2,
    name: "John Doe",
  },
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 3,
    name: "Samuel Soe",
    phone: "+12223334444",
  },
  {
    id: 2,
    name: "John Doe",
  },
  {
    id: 4,
    name: "John Doe",
  },
  {
    id: 1,
    phone: "+12223334444",
  },
];

function dedupe(list) {
  newList = [];
  ids = list.map((element) => {
    return element.id;
  });
  idSet = new Set(ids);
  for (const id of idSet) {
    person = list
      .filter((element) => element.id === id)
      .reduce((acc, element) => ({ ...acc, ...element }));
    newList.push(person);
  }
  return newList;
}

module.exports = dedupe;
