
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

describe("Test hand class", function(){
  describe("addCard()", function(){
    var hand= new Hand();
    hand.addCard(new Card(11,0));
    hand.addCard(new Card(5, 0));

    it("should add Jack \u2666 and 5 \u2666 to hand", function(){
      expect(hand.handToString()).toEqual("Jack \u2666 5 \u2666 ")
    });
    it("should increase numberOfCardsInHand to 2", function (){
      expect(hand.numberOfCardsInHand()).toEqual(2);
    });
  });

  describe ("check value() of Jack and 5", function(){
    var hand= new Hand();
    hand.addCard(new Card(11,0));
    hand.addCard(new Card(5,0));

    it("should total the values of a jack and a 5", function(){
      expect(hand.handValue()).toEqual(15);
    });
  });
  describe ("check that if Ace is present and below 11, it counts it correctly", function(){
    var hand= new Hand();
    hand.addCard(new Card(5,0));
    hand.addCard(new Card(1,2));

    it ("should total the value of a five and an ace", function(){
        expect(hand.handValue()).toEqual(16);
    });
  });
  describe("check if Ace will calculate at 1 point", function(){
    var hand= new Hand();
    hand.addCard(new Card(6,0));
    hand.addCard(new Card(10,0));
    hand.addCard(new Card(1,2));

    it("should return a total value of 16+1", function(){
      expect(hand.handValue()).toEqual(17);
    });
  });
});

describe("Test gameRunner", function(){
  describe("checkBlackJack() if dealer 21", function(){
    var gameRunner= new GameRunner();
    gameRunner.dealerHand.addCard(new Card(1, 0));
    gameRunner.dealerHand.addCard(new Card(11,0));
    gameRunner.playerHand.addCard(new Card(5,2));
    gameRunner.playerHand.addCard(new Card(2,1));
    it("should return dealer win", function(){
      expect(gameRunner.checkBlackJack()).toContain(gamRunner.checkBlackJack());
    });
  });
});
