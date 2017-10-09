const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];
$(document).ready(function(){

  $("#shuffle").click(function(e){
    let deckCount = $('#newGameDeckCount');
    e.preventDefault();
    console.log('deck count?', deckCount)
    // buildDeck();
  });

});
buildDeck = function (decks){
  let deckCount = parseInt(decks);
  console.log('hello from the deck builder :)')
  if (deckCount > 8){
    throw 'Cannot Play with More than 8 Decks'
  }
  for (var i=0; i<deckCount; i++){
    for (var j = 0; j<suits.length; j++){
      console.log("hello from the deck builder :)")
    }
  }
};

shuffleCards = function(deck){

}

newGame = function (players, decks) {

}
