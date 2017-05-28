//const index = require("../src/js/index.js");
var deck;

  //This will be called before running each spec
  beforeEach(function() {
      deck = new Deck();
  });

describe("deckOfCards", function(){



  it("deckOfCards", function(){
    expect(deck.deckOfCards()).toContain(deck.deckOfCards()[51]);
  });
});


describe("should shuffle the cards", function(){
  it("shuffle", function(){
    expect(deck.shuffle()).toContain(deck.shuffle()[50]);
  });
});

// describe("shuffle should reorder the cards", function(){
//   it("shuffle", function(){
//     expect(index.deckOfCards()).toBe(this.deckOfCards);
//   })
// });

// describe("Cat gets Mouthy", function() {
//   it("Cat speak", function() {
//     console.log(index)
//     expect(index.catSpeak()).toBe("Cat says meow");
//   })
// });
