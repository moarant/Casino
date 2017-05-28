"use strict"

// function catSpeak() {
//     return "Cat says meow";
//   }
var cardDeck;
 function Card (value, suit){
   this.value= value;
   this.suit= suit;
 };

var Deck = function () {};


Deck.prototype.deckOfCards =function (){

   var values= new Array("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace");
   var suits= new Array("Diamonds", "Hearts", "Spades", "Clubs");
  cardDeck= new Array(52);
   for(var i=0;i<4;i++){
     for(var j=0;j<13;j++){
       cardDeck[j*suits.length+i]= new Card(values[j], suits[i]);


     }
   }

    return cardDeck;

 }
  Deck.prototype.shuffle= function(){
    //for(var i=0;i<2;i++){
      for(var j=0;j<cardDeck.length;j++){
        var shuffledDeck= Math.floor(Math.random()*cardDeck.length);
        var temporaryDeck= cardDeck[j];
        cardDeck[j]= cardDeck[shuffledDeck];
        cardDeck[shuffledDeck]=temporaryDeck;
      }
    //}
    //console.log(cardDeck);
    return cardDeck;
  };

  function deal(){
    if (cardDeck.length>0){
      //remove from top of deck if there are cards available
      var dealtCard= cardDeck.shift();
      return dealtCard;
    }
    else{
      var error= "There are no more cards available in the deck";
       return error;
    }
  };






//module.exports= {"catSpeak": catSpeak};


  // if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  //   console.log(module.export)
  //   let exports = module.exports= {}
  //   exports.catSpeak = catSpeak;
  // }
  // else {
  //   console.log("Else triggers")
  //   window.catSpeak = catSpeak;
  // }
