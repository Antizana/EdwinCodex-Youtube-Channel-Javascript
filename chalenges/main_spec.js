const assert = require("assert");
const dedupe = require("./main");

describe("function dedupe()", function () {
  it("should remove array duplicates by ID", function () {
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
    ];
    assert.deepEqual(dedupe(list), [
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
        id: 4,
        name: "John Doe",
      },
    ]);
    assert.deepEqual(dedupe(list), [
      {
        id: 2,
        name: "John Doe",
      },
      {
        id: 3,
        name: "John Doe",
      },
      {
        id: 3,
        name: "John Doe",
        phone: "+12223334444",
      },
    ]);
  });
});
