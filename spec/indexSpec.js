
describe("testing Card Class", function(){
  let card;
  beforeEach(function(){
    card= new Card(11, 0);
  });

  describe("constructor()", function(){
    it("Sets suit= Diamond", function(){
      expect(card.getSuit()).toEqual("\u2666");
    });
    it("Sets rank = Jack", function () {
      expect(card.getFaceValue()).toEqual("Jack");
    });
  });
  describe("cardToString()",function(){
    it("prints out card", function(){
    expect(card.cardToString()).toEqual("Jack \u2666");
  });
});
  describe("pointValue()", function(){
    it("prints out point value", function(){
      expect(card.pointValue()).toEqual(10);
    });
  });

});

describe ("test Deck class", function(){
  describe("createDeck()", function(){
    var deck= new Deck();
    let card= deck.dealCard();
    let card2= deck.dealCard();

    it("the first card should be a 2 of Diamonds", function(){
      expect(card.cardToString()).toEqual("2 \u2666");
    });
    it("the second card should be a 2 of Hearts", function(){
      expect(card2.cardToString()).toEqual("2 \u2665");
    });
  });
  describe("shuffle()", function(){
    let deck1= new Deck();
    let deck2= new Deck();
    deck1.shuffle();
    let count=0;
    for (var i=0;i<52;i++){
      if (deck1.dealCard().cardToString() !== deck2.dealCard().cardToString()){
        count ++;
      }
    }
    it("the shuffled deck should have at least 48 cards(to account for any random doubles)", function(){
      expect(count).toBeGreaterThan(48);
    });
  });

});
