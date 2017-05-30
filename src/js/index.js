let display = document.getElementById("display");


class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

    pointValue() {
        if (this.value < 11) {
            return this.value;
        } else if (this.value < 14) {
            return 10;
        } else {
            return 1;
        }
    }

    getFaceValue() {
        if (this.value < 11) {
            return this.value;
        } else if (this.value === 11) {
            return "Jack";
        } else if (this.value === 12) {
            return "Queen";
        } else if (this.value === 13) {
            return "King";
        } else {
            return "Ace";
        }
    }

    getSuit() {
        if (this.suit === 0) {
            return "\u2666";
        } else if (this.suit === 1) {
            return "\u2665";
        } else if (this.suit === 2) {
            return "\u2660";
        } else {
            return "\u2663";
        }
    }

    cardToString() {
        return this.getFaceValue() + " " + this.getSuit();
    }
}
class Deck {
    constructor() {
        this.deckOfCards = this.createDeck();
    }


    createDeck() {
        let deckOfCards = [];
        for (let value = 2; value <= 14; value++) {
            for (let suit = 0; suit <= 3; suit++) {
                deckOfCards.push(new Card(value, suit));
            }
        }
        return deckOfCards;
    }

    shuffle() {

        for (var i = 0; i < this.deckOfCards.length; i++) {
            var j = Math.floor(Math.random() * this.deckOfCards.length);
            var temp = this.deckOfCards[i];
            this.deckOfCards[i] = this.deckOfCards[j];
            this.deckOfCards[j] = temp;
        }
        return this.deckOfCards;
    }

    dealCard() {
        if (this.deckOfCards.length > 0) {
            return this.deckOfCards.shift();
        }
        else {
            return null;
        }
    }
}

class Hand {
    constructor() {
        this.cards = [];
    }
    addCard(card) {
        this.cards.push(card);
    }
    numberOfCardsInHand() {
        return this.cards.length;
    }
    handToString() {
        var cardsInHand = "";
        for (var i = 0; i < this.cards.length; i++) {
            cardsInHand += this.cards[i].cardToString() + " ";
        }
        return cardsInHand;
    }
    handValue() {
        var isAce = false;
        var size = this.numberOfCardsInHand();
        var totalHandValue = 0;

        for (var i = 0; i < size; i++) {
            totalHandValue += this.cards[i].pointValue();
            if (this.cards[i].pointValue() === 1) {
                isAce = true;
            }
        }
        //if there is an Ace present (previously counted as 1) and total is 11 or less, 
        //add 10 so ace is worth 11
        if (isAce && totalHandValue <= 11) {
            return totalHandValue + 10;
        } else {
            return totalHandValue;
        }
    }
}

class GameRunner {
    constructor() {
        this.playerHand = new Hand();
        this.dealerHand = new Hand();
        this.gameDeck = new Deck();
    }
    //deal two cards to player
    //check player score.  If player or dealer= 21--gameover
    //player hit or stay. if hit, deal card. check score. if above 21: busted.
    //if player stay:: deal two cards to dealer.
    //if dealer below 17: deal again. 
    println(input){
        display.innerHTML += input + "<br>";
    }

    startGameDealTwoToPlayer() {
        this.playerHand.addCard(this.gameDeck.dealCard());
        this.playerHand.addCard(this.gameDeck.dealCard());
    }


  

    play() {
        this.startGameDealTwoToPlayer();
        this.startGameDealTwoToDealer();
        let gameOver = this.checkBlackJack();
        if(!gameOver){
            this.println("Your cards: " + this.playerHand.handToString()+" Your hand value = "+ this.playerHand.handValue());
            this.println("Dealer's face up card is a " + this.dealerHand.cards[0].cardToString());
  
                    // this.playerHand.addCard(this.gameDeck.dealCard());
                    // this.println("Your cards: " + this.playerHand.handToString());
          

        }
    }

    checkBlackJack(){
        if(this.checkPlayerBlackJack()){
            if(this.checkDealerBlackJack()){
                this.println("It's a tie!");
                return true;
            } else{
                this.println("You win!");
                return true;
            }
        } else if(this.checkDealerBlackJack()){
            this.println("You lose!");
            return true;
        } else return false;
    }

    checkPlayerBlackJack(){
        return this.dealerHand.handValue() === 21;
    }

    checkDealerBlackJack(){
        return this.dealerHand.handValue() === 21;
    }


    startGameDealTwoToDealer() {
        this.dealerHand.addCard(this.gameDeck.dealCard());
        this.dealerHand.addCard(this.gameDeck.dealCard());
    }

    // hit(){
    //     this.playerHand.addCard(this.gameDeck.dealCard());
    //     var updateHand= "Your cards: "+ this.playerHand.handToString()+"Your hand value = " +this.playerHand.handValue();
    //     document.getElementByIdById("display").innerHTML= updateHand;
    // }



    // checkDealerScore() {
    //     if (this.dealerHand.handValue() < 17) {
    //         this.dealerHand.addCard(this.gameDeck.dealCard());
    //         this.checkDealerScore();
    //     }
    //     else if (this.dealerHand.handValue() === 21) {
    //         return "dealer wins: scored 21";
    //     }
    //     else {
    //         if (this.dealerHand.handValue() > this.playerHand.handValue()) {
    //             return "dealer wins.  Dealer score: " + this.dealerHand.handValue() + "<br> Player score:  " + this.playerHand.handValue();
    //         }
    //         else {
    //             return "Player Wins.  Player score: " + this.playerHand.handValue() + "<br> Dealer score: " + this.dealerHand.handValue();
    //         }
    //     }
    // }



}
