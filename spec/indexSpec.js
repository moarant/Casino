const index = require("../src/js/index.js");

describe("Deal a card", function(){
  it("deal", function(){
    expect(index.deal()).toBe(Card);
  })
});

// describe("Cat gets Mouthy", function() {
//   it("Cat speak", function() {
//     console.log(index)
//     expect(index.catSpeak()).toBe("Cat says meow");
//   })
// });
