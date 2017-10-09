const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];
$(document).ready(function(){

  $("#shuffle").click(function(e){
    let deckCount = $('#newGameDeckCount');
    e.preventDefault();
    buildDeck();
  });

});

buildDeck = function (decks){
  let deckCount = parseInt(decks);
  if (deckCount > 8){
    throw 'Cannot Play with More than 8 Decks'
  }
  for (var i=0; i<deckCount; i++){
    for (var j = 0; j<suits.length; j++){
      for (var k=0; k<cards.length; k++){
        var value = 0;
        value = parseInt(cards[k]);
        if (cards[k] === 'A'){
          value = 'A';
        } else if (cards[k] == 'Q' || cards[k]== 'K' || cards[k] == 'J'){
          value = 10;
        }
        deck.push({
          suit: suits[j],
          value: value,
          face: cards[k]
        });
      }
    }
  }
};

shuffleCards = function(deck){

}

newGame = function (players, decks) {

}
