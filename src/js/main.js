
let gameRunner= new GameRunner();


gameRunner.gameDeck.shuffle();



// display.innerHTML+= gameRunner.startGameDealTwoToPlayer();
// gameRunner.startGameDealTwoToDealer();
//display.innerHTML+= "<br>"+ gameRunner.askHitOrStay();
gameRunner.play();