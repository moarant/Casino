

// function catSpeak() {
//     return "Cat says meow";
//   }

 function Card (value, suit){
   this.value= value;
   this.suit= suit;
 };

function deckOfCards(){
  //  this.deckOfCards= new Array(52);
   var values= new Array("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace");
   var suits= new Array("Diamonds", "Hearts", "Spades", "Clubs");
   this.deckOfCards= new Array(52);
   for(var i=0;i<13;i++){
     for(var j=0;j<4;j++){
       this.deckOfCards[i*suits.length+j]= new Card(values[j], suits[i]);
     }
   }
 }
  function shuffle(){
    for(var i=0;i<5;i++){
      for(var j=0;j<this.deckOfCards.length;j++){
        var shuffledDeck= Math.floor(Math.random()*this.deckOfCards.length);
        var temporaryDeck= this.deckOfCards[j];
        this.deckOfCards[j]= this.deckOfCards[shuffledDeck];
        this.deckOfCards[shuffledDeck]=temporaryDeck;
      }
    }
  };

  function deal(){
    if (this.deckOfCards.length>0){
      //remove from top of deck if there are cards available
      return this.deckOfCards.shift();
    }
    else{
      var error= "There are no more cards available in the deck";
       return error;
    }
  };





module.exports= {"deal": deal};
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
