const index = require("../src/js/index.js");

describe("Cat gets Mouthy", function() {
  it("Cat speak", function() {
    console.log(index)
    expect(index.catSpeak).toBe("Cat says meow");
  })
});

console.log("Hello!");
